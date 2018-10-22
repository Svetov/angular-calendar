import { Action } from '@ngrx/store';

export enum DayActionActionTypes {
  SELECT_DAY = 'SELECT_DAY'
}

export class selectDayAction implements Action {
  readonly type = DayActionActionTypes.SELECT_DAY;
  constructor(public payload: { day: string }) {}
}

export type DayActions = selectDayAction;
