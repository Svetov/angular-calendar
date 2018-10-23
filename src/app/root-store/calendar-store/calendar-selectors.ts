import { State } from './calendar-state';

export const selectDay = (state: State): string => state.date;

export const selectMonth = (state: State): string => state.month;

export const selectYear = (state: State): string => state.year;

export const selectMonthYear = (state: State): object => { 
	return { month: state.month, year: state.year};
}; 