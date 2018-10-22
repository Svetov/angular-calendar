import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable()
export class CalendarServiceService {

	constructor() { }

	getCurrentMonthDates(): Array<[string, number, boolean]> {
		let day_count = moment().daysInMonth();
		let result: Array<[string, number, boolean]> = [];

		for(let i = 1; i <= day_count; i++) {
			result.push(moment().date(i));
		}

		result = result.map(x => [x.format('DD.MM.YYYY'), x.day(), false]);

		return result;
	}

	correctDates(month_dates: Array<[string, number, boolean]>): Array<[string, boolean]> {
		let start_count = 0;
		let end_count = 0;
		let start_dates: Array<[string, number, boolean]> = [];
		let end_dates: Array<[string, number, boolean]> = [];
		let result: Array<[string, number, boolean]> = [];

		if (month_dates[0][1] === 0) { start_count = 6; }
		else { start_count = month_dates[0][1] - 1; }

		if (month_dates[month_dates.length - 1][1] === 0) { end_count = 0; }
		else { end_count = 7 - month_dates[month_dates.length - 1][1]; }

		for(let i = 0; i < start_count; i++) { start_dates.push(this.createNullDate()) }
		for(let i = 0; i < end_count; i++) { end_dates.push(this.createNullDate()) }

		result = start_dates.concat(month_dates.concat(end_dates));
		return result.map((x: [string, number, boolean]): [string, boolean] => [x[0], x[2]]);
		//return result;
	}

	createNullDate(): [string, number, boolean] {
		return ['null', -1, false];
	}

	splitByWeeks(month_dates: Array<[string, boolean]>): Array<Array<[string, boolean]>> {
		let result: Array<Array<[string, boolean]>> = [];
		for (let i = 0; i < 5; i++) { result.push( month_dates.slice(i * 7, i * 7 + 7) ); }
		return result;
	}

	getCorrectCurentMonthDates(): Array<Array<[string, boolean]>> {
		let dates = this.getCurrentMonthDates();
		let dates_corect = this.correctDates(dates); 
		return this.splitByWeeks(dates_corect);
	}

	markDates(date: string, month_dates: Array<[string, number, boolean]>): Array<[string, number, boolean]>{
		for (let i = 0; i < month_dates.length; i++) {
			if(month_dates[i][0] === date) {
				month_dates[i][2] = true;
			}
		}
		return month_dates;
	}

  getMarkedCorrectCurrentDates(date: string): Array<Array<[string, boolean]>> {
    let dates = this.getCurrentMonthDates();
    let dates_marked = this.markDates(date, dates);
    let dates_corect = this.correctDates(dates_marked);
    let res = this.splitByWeeks(dates_corect);
    return res;
  }
}



















