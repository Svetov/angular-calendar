import { CalendarState } from './calendar-store';
import { ClockState } from './clock-store';
import { RequestState } from './request-store'
import { FirestoreState } from './firestore'
import { RouterReducerState } from '@ngrx/router-store'
import { AdminState } from './admin-store'

export interface State {
	calendar: CalendarState.State;
	clock: ClockState.State;
	request: RequestState.State;
	firestore: FirestoreState.State;
	router: RouterReducerState;
	admin: AdminState.State;
}

export interface StateEffects {
	calendar: CalendarState.State;
	clock: ClockState.State;
	request: RequestState.State;
}

export interface FirestoreState {
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