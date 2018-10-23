import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, AfterContentChecked } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RootState, RootSelectors, CalendarActions } from '../../root-store';
import { CalendarServiceService } from '../calendar/calendar-service.service';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit, OnChanges, DoCheck, AfterContentChecked {
  @Input() date_view: object;
  date_selected: boolean;
  date_listner: Observable<string>;
  date_timeout: boolean;

  constructor(private calendarService: CalendarServiceService, private store: Store<RootState.State>) {
  	this.date_listner = this.store.pipe(select(RootSelectors.selectDay));
  }

  ngOnInit() {
  	this.date_listner.subscribe(x => { x === this.date_view[0] ? this.date_selected = true : this.date_selected = false; });
  	this.date_timeout = this.calendarService.timeOut(this.date_view[0]);
  }

  ngOnChanges(changes: SimpleChanges) {
  	console.log('day_changed');
  }

  selectDate() {
  	this.store.dispatch(new CalendarActions.selectDayAction( {date: this.date_view[0]} ));
  }

  ngDoCheck() {
  }

  ngAfterContentChecked() {
  }
}
