import { createSelector, createFeatureSelector, MemoizedSelector } from '@ngrx/store';
import { DaySelectors, DayState } from './day-store';
import { State } from './root-state';


//export const selectDayState = (state: State) => state.DayState;
export const selectDayState = createFeatureSelector<State, DayState.State>('calendar');
//export const selectDayState = createFeatureSelector<State>('DayState');

export const selectDay = createSelector(
	selectDayState,
	DaySelectors.selectDay
);