import { CalendarActionTypes, CalendarActions } from './calendar-action';
import { State, initState } from './calendar-state';

export function calendarReducer(state = initState, action: CalendarActions): State {
	switch (action.type) {
		case CalendarActionTypes.SELECT_DAY:
			return {
				...state,
				date: action.payload.date
			};
		case CalendarActionTypes.SELECT_MONTH:
			return {
				...state,
				month: action.payload.month
			};
		case CalendarActionTypes.SELECT_YEAR:
			return {
				...state,
				year: action.payload.year
			}

		default:
			return state;
	}
}
