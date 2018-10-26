import { CalendarState } from './calendar-store';
import { ClockState } from './clock-store';
import { RequestState } from './request-store'

export interface State {
	calendar: CalendarState.State;
	clock: ClockState.State;
	request: RequestState.State;
}
