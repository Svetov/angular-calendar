import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { RootState, RootSelectors, CalendarActions } from '../../../root-store';

@Component({
  selector: 'app-year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.css']
})
export class YearComponent implements OnInit {
  @Input() years: Array<string>;
  year_listner: Observable<string>;

  constructor(private store: Store<RootState.State>) { 
  	this.year_listner = this.store.pipe(select(RootSelectors.selectYear));
  }

  ngOnInit() {
  }

  selectYear(value) {
	this.store.dispatch(new CalendarActions.selectYearAction({ year: value }));
  }
}
