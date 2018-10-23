import * as moment from 'moment';

export interface State {
	date: string,
	month:string,
	year: string
}

export const initState: State = {
	date: moment().format('DD.MM.YYYY'),
	month: moment().format('MM'),
	year: moment().format('YYYY')
}