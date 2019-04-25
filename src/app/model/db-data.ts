import * as moment from 'moment';

export const SPRINTTYPES: any = [
  {
    id: 0,
    name: 'Pomodoro',
    duration: 25 * 60,
  },
  {
    id: 1,
    name: 'Short',
    duration: 5 * 60,
  },
  {
    id: 2,
    name: 'Instant',
    duration: 60,
  },
  {
    id: 3,
    name: 'Flash',
    duration: 60,
  },
];

export const SPRINTS: any = [
  {
    id: 0,
    sprintType: 0,
    progress: 100,
    status: 'Completed',
    notify: 'true',
    user: 'foo.bar@email.com',
    startedAt: moment(),
    finishedAt: moment().add('seconds', SPRINTTYPES[0].duration),
  },
  {
    id: 1,
    sprintType: 1,
    progress: 60,
    status: 'Cancelled',
    notify: 'true',
    user: 'foo.bar@email.com',
    startedAt: moment(),
    finishedAt: moment().add('seconds', SPRINTTYPES[1].duration * 0.6),
  },
];
