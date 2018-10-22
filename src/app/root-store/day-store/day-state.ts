import * as moment from 'moment';

export interface State {
	day: string
}

export const initState: State = {
	day: moment().format('DD.MM.YYYY')
}