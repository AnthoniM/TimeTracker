import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { Sprint } from '../model/sprint';
import * as moment from 'moment';

import { SprintService } from './sprint.service';

const newSprint: Sprint = {
    sprintType: 0,
    progress: 100,
    status: 'Completed',
    notify: true,
    user: 'foo.bar@email.com',
    startedAt: moment('2019-04-25T16:10:02.123Z').toDate(),
    finishedAt: moment('2019-04-25T16:19:02.123Z').toDate(),
};

describe('SprintService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule,
    ]
  }));

  it('should be created', () => {
    const service: SprintService = TestBed.get(SprintService);
    expect(service).toBeTruthy();
  });

  it('should have an observable sprints$', () => {
    const service: SprintService = TestBed.get(SprintService);
    expect(service.sprints$).toBeTruthy();
  });

  describe('init Method', () => {
    it('should exist', () => {
      const service: SprintService = TestBed.get(SprintService);
      expect(service.init).toBeTruthy();
    });

    it('after init, sprints$ should return an array of length 2', () => {
      const service: SprintService = TestBed.get(SprintService);
      service.init();
      service.sprints$.subscribe((sprints) => {
        expect(sprints.length).toBe(2);
      });
    });

    it('should call backend once', () => {
      spyOn(console, 'log');
      const service: SprintService = TestBed.get(SprintService);
      service.init();
      service.sprints$.subscribe();
      service.sprints$.subscribe();
      const obs1$ = service.sprints$;
      const obs2$ = service.sprints$;
      obs1$.subscribe();
      obs2$.subscribe();
      expect(console.log).toHaveBeenCalledWith('HTTP request executed');
      expect(console.log).toHaveBeenCalledTimes(1);
    });
  });

  describe('createSprint Method', () => {
    it('should exist', () => {
      const service: SprintService = TestBed.get(SprintService);
      expect(service.createSprint).toBeTruthy();
    });

    it('should add a new sprint locally with an ID', () => {
      const service: SprintService = TestBed.get(SprintService);
      service.init();
      service.createSprint(newSprint);
      service.sprints$.subscribe((sprints) => {
        expect(sprints.length).toBe(3);
        expect(sprints[2].id).toBeDefined();
      });
    });
  });
});
