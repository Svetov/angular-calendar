import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { RootState, DayActions } from '../../root-store';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {
  @Input() date: object;

  constructor(private store: Store<RootState.State>) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
  	console.log(12);
  }

  selectDate() {
  	this.store.dispatch(new DayActions.selectDayAction( {day: this.date[0]} ));
  }
}
