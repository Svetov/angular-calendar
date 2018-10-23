import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { RootSelectors, RootState, CalendarActions } from '../../../root-store';

@Component({
  selector: 'app-date-infto',
  templateUrl: './date-infto.component.html',
  styleUrls: ['./date-infto.component.css']
})
export class DateInftoComponent implements OnInit {
  date_listner: Observable<string>;

  constructor(private store: Store<RootState.State>) {
  	this.date_listner = this.store.pipe(select(RootSelectors.selectDay));
  }

  ngOnInit() {
  }

}
