import { createSelector, createFeatureSelector, MemoizedSelector } from '@ngrx/store';
import { CalendarSelectors, CalendarState } from './calendar-store';
import { ClockSelectors, ClockState } from './clock-store';
import { RequestSelectors, RequestState } from './request-store'
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


export const selectClock = createFeatureSelector<State, ClockState.State>('clock');

export const selectClocks = createSelector(
	selectClock,
	ClockSelectors.selectClocks
);


export const selectRequest = createFeatureSelector<State, RequestState.State>('request');

export const selectRequestStatus = createSelector(
	selectRequest,
	RequestSelectors.selectRequestStatus
)

