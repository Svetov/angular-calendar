import { Component, Output, OnInit, OnChanges, DoCheck, SimpleChanges } from '@angular/core';
import { CalendarServiceService } from './calendar-service.service';
import { Store, select } from '@ngrx/store';
import { RootState, RootSelectors } from '../../root-store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit, OnChanges, DoCheck {
  correct_month_dates: Array<Array<[string, boolean]>>;
  correct_years: Array<string>;
  correct_months: Array<string>;
  correct_days: Array<string>;
  month_year_listner: Observable<object>;
  year_listner: Observable<string>;

  constructor(private calendarService: CalendarServiceService, private store: Store<RootState.State>) {
  	this.month_year_listner = this.store.pipe(select(RootSelectors.selectMonthYear));
  	this.year_listner = this.store.pipe(select(RootSelectors.selectYear));
  }

  ngOnInit() {
	this.correct_month_dates = this.calendarService.getCorrectCurentMonthDates();
	this.correct_months = this.calendarService.getMonths();
	this.correct_days = this.calendarService.getDays();
	this.correct_years = this.calendarService.getYers();

	this.month_year_listner.subscribe(({month, year}: object) => this.updateMonth(month, year));
  }

  updateMonth(month: string, year: string): void {
  	this.correct_month_dates = this.calendarService.getCorrectSelectedMonthDates(month, year);
  }

  ngOnChanges(changes: SimpleChanges): void { }

  ngDoCheck() { }
}
