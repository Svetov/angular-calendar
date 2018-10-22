import { DayActionActionTypes, DayActions } from './day-action';
import { State, initState } from './day-state';

export function dayReducer(state = initState, action: DayActions): State {
	switch (action.type) {
		case DayActionActionTypes.SELECT_DAY:
			return {
				...state,
				day: action.payload.day
			};
		
		default:
			return state;
	}
}
