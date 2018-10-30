import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { CalendarActions, RootState } from '../../../root-store';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css']
})
export class MonthComponent implements OnInit {
  @Input() month_view: string;
  months: Array<string> = [ 'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
    							    'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь' ];

  constructor(private store: Store<RootState.State>) { }

  ngOnInit() {
  }

  selectMonth() {
  	this.store.dispatch( new CalendarActions.selectMonthAction({ month: (this.months.lastIndexOf(this.month_view) + 1).toString() }) );
  }
}
