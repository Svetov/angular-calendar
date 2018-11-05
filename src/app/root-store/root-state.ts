import { CalendarState } from './calendar-store';
import { ClockState } from './clock-store';
import { RequestState } from './request-store'
import { FirestoreState } from './firestore'
import { RouterReducerState } from '@ngrx/router-store'
import { AdminState } from './admin-store'


export interface State {
	router: RouterReducerState,
	[CalendarState.name]: CalendarState.State,
	[ClockState.name]: ClockState.State,
	[RequestState.name]: RequestState.State,
	[FirestoreState.name]: FirestoreState.State,
	[AdminState.name]: AdminState.State
}

export interface StateEffects {
	[CalendarState.name]: CalendarState.State,
	[ClockState.name]: ClockState.State,
	[RequestState.name]: RequestState.State
}

export interface InFirestoreRequestState {
	first_name: string,
	second_name: string,
	telephone: string,
	service_type: string,
	children_amount: number,
	adult_amount: number,
	table_type: string,
	request_status: string,
	date: string,
	clocks: Array<string>
}