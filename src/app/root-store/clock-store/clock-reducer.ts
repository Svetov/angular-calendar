import { ClockActions, ClockActionTypes } from './clock-action';
import { State, initState } from './clock-state';

export function ClockReducer (state = initState, action: ClockActions): State {
	switch (action.type) {
		case ClockActionTypes.SELECT_CLOCKS:
			return {
				...state,
				clocks: action.payload.clocks
			}
		
		default:
			return state;
	}
}

