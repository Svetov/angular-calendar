import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable()
export class CalendarServiceService {
	private months: Array<string> = [ 'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
									  'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь' ];
    private years: Array<string> = ['2018', '2019', '2020'];
    private days: Array<string> = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

	private week_row_view: number = 6;

	constructor() { }

	getCurrentMonthDates(): Array<[string, number, boolean]> {
		let day_count = moment().daysInMonth();
		let result: Array<moment.Moment> = [];

		for(let i = 1; i <= day_count; i++) {
			result.push(moment().date(i));
		}

		let res: Array<[string, number, boolean]> = result.map((x: moment.Moment): [string, number, boolean] => [x.format('DD.MM.YYYY'), x.day(), false]);

		return res;
	}

	correctDates(month_dates: Array<[string, number, boolean]>): Array<[string, boolean]> {
		let start_count = 0;
		let end_count = 0;
		let start_dates: Array<[string, number, boolean]> = [];
		let end_dates: Array<[string, number, boolean]> = [];
		let gap_dates: Array<[string, number, boolean]> = [];
		let result: Array<[string, number, boolean]> = [];

		if (month_dates[0][1] === 0) { start_count = 6; }
		else { start_count = month_dates[0][1] - 1; }

		if (month_dates[month_dates.length - 1][1] === 0) { end_count = 0; }
		else { end_count = 7 - month_dates[month_dates.length - 1][1]; }

		for(let i = 0; i < start_count; i++) { start_dates.push(this.createNullDate()) }
		for(let i = 0; i < end_count; i++) { end_dates.push(this.createNullDate()) }
		for(let i = 0; i < (7 * this.week_row_view - (start_dates.length + month_dates.length + end_dates.length)); i++) { gap_dates.push(this.createNullDate()) }


		result = start_dates.concat(month_dates.concat(end_dates).concat(gap_dates));
		return result.map((x: [string, number, boolean]): [string, boolean] => [x[0], x[2]]);
	}

	createNullDate(): [string, number, boolean] {
		return ['null', -1, false];
	}

	splitByWeeks(month_dates: Array<[string, boolean]>): Array<Array<[string, boolean]>> {
		let result: Array<Array<[string, boolean]>> = [];
		for (let i = 0; i < this.week_row_view; i++) { result.push( month_dates.slice(i * 7, i * 7 + 7) ); }
		return result;
	}

	getCorrectCurentMonthDates(): Array<Array<[string, boolean]>> {
		let dates = this.getCurrentMonthDates();
		let dates_corect = this.correctDates(dates); 
		return this.splitByWeeks(dates_corect);
	}

	markDates(date: string, month_dates: Array<[string, number, boolean]>): Array<[string, number, boolean]>{
		for (let i = 0; i < month_dates.length; i++) {
			if(month_dates[i][0] === date) { month_dates[i][2] = true; }
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

  getSelectedMonthDates(month: string, year: string): Array<[string, number, boolean]> {
  		let date = {value: month + '.' + year, format: 'MM.YYYY'};
  		let day_count = moment(date.value, date.format).daysInMonth();
		let result: Array<moment.Moment> = [];

		for(let i = 1; i <= day_count; i++) { result.push(moment(date.value, date.format).date(i)); }

		let res: Array<[string, number, boolean]> = result.map((x: moment.Moment): [string, number, boolean] => [x.format('DD.MM.YYYY'), x.day(), false]);

		return res;
  }

  getCorrectSelectedMonthDates(month: string, year: string): Array<Array<[string, boolean]>> {
  	let dates = this.getSelectedMonthDates(month, year);
	let dates_corect = this.correctDates(dates); 
	return this.splitByWeeks(dates_corect);
  }

  timeOut(date: string): boolean {
  	if (date === 'null') { return true };
  	return moment() >= moment(date, 'DD.MM.YYYY');
  }

  getMonths(): Array<string> {
  	return this.months;
  }

  getDays(): Array<string> {
  	return this.days;
  }

  getYers(): Array<string> {
  	return this.years;
  }
}



















