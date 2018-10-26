import { Action } from '@ngrx/store';

export enum ClockActionTypes {
  SELECT_CLOCKS = 'SELECT_CLOCKS',
}

export class selectClockAction implements Action {
	readonly type = ClockActionTypes.SELECT_CLOCKS;
	constructor(public payload: { clocks: Array<string> }) {}
}

export type ClockActions = selectClockAction;
