import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  Observable,
  BehaviorSubject,
  of,
  timer,
} from 'rxjs';
import {
  shareReplay,
  map,
  tap,
  retryWhen,
  delayWhen,
} from 'rxjs/operators';
import { Sprint } from '../model/sprint';
import { SPRINTS } from '../model/db-data';
import { debug, RxJsLoggingLevel } from '../common/debug';

@Injectable({
  providedIn: 'root'
})
export class SprintService {

  private subject = new BehaviorSubject<Sprint[]>([]);
  sprints$: Observable<Sprint[]> = this.subject.asObservable();

  constructor( private http: HttpClient ) { }

  init() {
    const http$ = of(SPRINTS);

    http$
      .pipe(
        tap(() => console.log('HTTP request executed')),
        retryWhen( errors =>
          errors.pipe(
            delayWhen(() => timer(2000))
          )
        )
      )
      .subscribe(
        sprints => this.subject.next(sprints)
      );
  }

  createSprint(sprint: Sprint): Observable<any> {
    const sprints = this.subject.getValue();
    const newId = sprints.length + 1;
    sprint.id = newId;
    sprints.push(sprint);
    this.subject.next(sprints);

    return of(sprint);
  }
}
