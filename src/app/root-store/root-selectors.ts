import { createSelector, 
		 createFeatureSelector, 
		 MemoizedSelector } from '@ngrx/store';
import { CalendarSelectors, 
		 CalendarState } from './calendar-store';
import { ClockSelectors, 
		 ClockState } from './clock-store';
import { FirestoreSelectors, 
		 FirestoreState } from './firestore'
import { RequestSelectors, 
		 RequestState } from './request-store'
import { State } from './root-state';
import { InFirestoreRequestState } from './root-state';
import { RouterReducerState } from '@ngrx/router-store'
import { AdminState,
		 AdminSelector } from './admin-store'


export const selectAdminState = createFeatureSelector<State, AdminState.State>('admin');
export const selectAdminLoginPassword = createSelector(
	selectAdminState,
	AdminSelector.selectLoginPassword
)

export const selectAdminStatus = createSelector(
	selectAdminState,
	AdminSelector.selectStatus
)

export const selectRequestLength = createSelector(
	selectAdminState,
	AdminSelector.selectRequestsLength
)

export const selectPage = createSelector(
	selectAdminState,
	AdminSelector.selectPage
)

export const selectPageRequests = createSelector(
	selectAdminState,
	AdminSelector.selectPageRequests
)

export const selectRouterState = (state: State) => state.router
export const selectUrl = createSelector(
	selectRouterState,
	(state: RouterReducerState) => state.state.url
)


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

export const selectRequestAll = createSelector(
	selectRequest,
	RequestSelectors.selectRequestAll
)


export const selectFirestore = createFeatureSelector<State, FirestoreState.State>('firestore');
export const selectFirestoreDocuments = createSelector(
	selectFirestore,
	FirestoreSelectors.selectDocuments
)


export const selectForClocksRow = createSelector(
	selectDay,
	selectFirestoreDocuments,
	(date: string, documents) => {
		if (date && documents) {
			return documents.filter((x: InFirestoreRequestState) => x.date === date)
							.map((x: InFirestoreRequestState): Array<string> => x.clocks)
		}
		return documents
	}
)





























