import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { SprintTypeService } from './sprint-type.service';

describe('SprintTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule,
    ],
  }));

  it('should be created', () => {
    const service: SprintTypeService = TestBed.get(SprintTypeService);
    expect(service).toBeTruthy();
  });

  it('should have an observable sprints$', () => {
    const service: SprintTypeService = TestBed.get(SprintTypeService);
    expect(service.sprintTypes$).toBeTruthy();
  });

  describe('init Method', () => {
    it('should exist', () => {
      const service: SprintTypeService = TestBed.get(SprintTypeService);
      expect(service.init).toBeTruthy();
    });

    describe('init Method', () => {
      it('should exist', () => {
        const service: SprintTypeService = TestBed.get(SprintTypeService);
        expect(service.init).toBeTruthy();
      });

      it('after init, sprints$ should return an array of length 2', () => {
        const service: SprintTypeService = TestBed.get(SprintTypeService);
        service.init();
        service.sprintTypes$.subscribe((sprints) => {
          expect(sprints.length).toBe(4);
        });
      });

      it('should call backend once', () => {
        spyOn(console, 'log');
        const service: SprintTypeService = TestBed.get(SprintTypeService);
        service.init();
        service.sprintTypes$.subscribe();
        service.sprintTypes$.subscribe();
        const obs1$ = service.sprintTypes$;
        const obs2$ = service.sprintTypes$;
        obs1$.subscribe();
        obs2$.subscribe();
        expect(console.log).toHaveBeenCalledWith('HTTP request executed');
        expect(console.log).toHaveBeenCalledTimes(1);
      });
    });
  });
});
