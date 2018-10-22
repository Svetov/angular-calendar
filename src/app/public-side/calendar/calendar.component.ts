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
  day$: Observable<string>;

  constructor(private calendarService: CalendarServiceService, private store: Store<RootState.State>) {
  	this.day$ = this.store.pipe(select(RootSelectors.selectDay));
  }

  ngOnInit() {
  	//this.correct_month_dates = this.calendarService.getMarkedCorrectCurrentDates("10.10.2018");
  	this.day$.subscribe( date => this.updateDates(date));
  }

  updateDates(date: string) {
  	this.correct_month_dates = this.calendarService.getMarkedCorrectCurrentDates(date);
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngDoCheck() {
  }
}
