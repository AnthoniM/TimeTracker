export interface Sprint {
  id?: number;
  sprintType: number;
  progress: number;
  status: string;
  notify: boolean;
  user: string;
  startedAt: Date;
  finishedAt: Date;
}

