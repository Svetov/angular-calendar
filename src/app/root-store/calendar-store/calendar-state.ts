import * as moment from 'moment';

export interface State {
	date: string,
	month:string,
	year: string
}

const initValue: State = {
	date: moment().add(1, 'd').format('DD.MM.YYYY'),
	month: moment().format('MM'),
	year: moment().format('YYYY')
}

export const name = 'calendar'

export const initState: Statte = localStorage.getItem(name) != undefined ? JSON.parse(localStorage.getItem(name)) : initValue