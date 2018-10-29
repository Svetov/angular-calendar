import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, AfterContentChecked } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, filter, reduce, tap } from 'rxjs/operators'
import { RootState, RootSelectors, CalendarActions } from '../../../root-store';
import { CalendarServiceService } from '../calendar/calendar-service.service';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit, OnChanges, DoCheck, AfterContentChecked {
  @Input() date_view: object;
  private date_selected: boolean;
  private date_listner: Observable<string>;
  private date_timeout: boolean;
  private pick_listner: Observable<Array<object>>
  private pick_selected: boolean

  constructor(private calendarService: CalendarServiceService, private store: Store<RootState.State>) {
  	this.date_listner = this.store.pipe(select(RootSelectors.selectDay));
    this.pick_listner = this.store.pipe(select(RootSelectors.selectFirestoreDocuments))
  }

  ngOnInit() {
    this.date_timeout = this.calendarService.timeOut(this.date_view[0]);
    this.date_listner.subscribe(x => { x === this.date_view[0] ? this.date_selected = true : this.date_selected = false; });
    this.pick_listner.subscribe( x => this.pick_selected = x.filter((y: RootState.FirestoreState) => y.date === this.date_view[0]).length > 0 )
  }

  ngOnChanges(changes: SimpleChanges) {}

  selectDate() {
  	this.store.dispatch(new CalendarActions.selectDayAction( {date: this.date_view[0]} ));
  }

  ngDoCheck() { }

  ngAfterContentChecked() { }
}