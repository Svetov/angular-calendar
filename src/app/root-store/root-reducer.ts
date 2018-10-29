import { calendarReducer } from './calendar-store';
import { ClockReducer } from './clock-store';
import { RequestReducer } from './request-store'
import { FirestoreReducer } from './firestore'

export const RootReducer = { 
	calendar: calendarReducer,
	clock: ClockReducer,
	request: RequestReducer,
	firestore: FirestoreReducer
}