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
import { SprintType } from '../model/sprintType';
import { SPRINTTYPES } from '../model/db-data';
import { debug, RxJsLoggingLevel } from '../common/debug';

@Injectable({
  providedIn: 'root'
})
export class SprintTypeService {

  private subject = new BehaviorSubject<SprintType[]>([]);
  sprintTypes$: Observable<SprintType[]> = this.subject.asObservable();

  constructor( private http: HttpClient ) { }

  init() {
    const http$ = of(SPRINTTYPES);

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
        sprintTypes => this.subject.next(sprintTypes)
      );
  }
}
