import { State } from './request-state'


export const selectRequestStatus = (state: State) => state.request_status;

export const selectRequestAll = (state: State) => state;