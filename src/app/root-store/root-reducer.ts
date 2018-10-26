import { calendarReducer } from './calendar-store';
import { ClockReducer } from './clock-store';
import { RequestReducer } from './request-store'

export const RootReducer = { 
	calendar: calendarReducer,
	clock: ClockReducer,
	request: RequestReducer
}