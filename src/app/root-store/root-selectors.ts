import { createSelector, createFeatureSelector, MemoizedSelector } from '@ngrx/store';
import { CalendarSelectors, CalendarState } from './calendar-store';
import { State } from './root-state';


export const selectCalendar= createFeatureSelector<State, CalendarState.State>('calendar');

export const selectDay = createSelector(
	selectCalendar,
	CalendarSelectors.selectDay
);

export const selectMonth = createSelector(
	selectCalendar,
	CalendarSelectors.selectMonth
);

export const selectYear = createSelector(
	selectCalendar,
	CalendarSelectors.selectYear
);

export const selectMonthYear = createSelector(
	selectCalendar,
	CalendarSelectors.selectMonthYear
);