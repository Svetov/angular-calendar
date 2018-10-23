import { Action } from '@ngrx/store';

export enum CalendarActionTypes {
  SELECT_DAY = 'SELECT_DAY',
  SELECT_MONTH = 'SELECT_MONTH',
  SELECT_YEAR = 'SELECT_YEAR'
}

export class selectDayAction implements Action {
  readonly type = CalendarActionTypes.SELECT_DAY;
  constructor(public payload: { date: string }) {}
}

export class selectMonthAction implements Action {
	readonly type = CalendarActionTypes.SELECT_MONTH;
	constructor(public payload: { month: string }) {}
}

export class selectYearAction implements Action {
	readonly type = CalendarActionTypes.SELECT_YEAR;
	constructor(public payload: { year: string }) {}
}

export type CalendarActions = selectDayAction | selectMonthAction | selectYearAction;
