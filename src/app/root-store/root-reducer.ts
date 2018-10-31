import { calendarReducer } from './calendar-store';
import { ClockReducer } from './clock-store';
import { RequestReducer } from './request-store'
import { FirestoreReducer } from './firestore'
import { routerReducer } from '@ngrx/router-store'
import { AdminReducer } from './admin-store'

export const RootReducer = { 
	calendar: calendarReducer,
	clock: ClockReducer,
	request: RequestReducer,
	firestore: FirestoreReducer,
	router: routerReducer,
	admin: AdminReducer
}