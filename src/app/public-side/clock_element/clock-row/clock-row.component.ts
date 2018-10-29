import { Component, OnInit, Input } from '@angular/core';
import { ClockService } from '../clock/clock.service';
import { RootState, ClockActions, RootSelectors } from '../../../root-store';
import { Store, select } from '@ngrx/store'; 
import { Observable } from 'rxjs';

@Component({
  selector: 'app-clock-row',
  templateUrl: './clock-row.component.html',
  styleUrls: ['./clock-row.component.css']
})
export class ClockRowComponent implements OnInit {
  @Input() clock: string;
  private selected: boolean = false;
  private picked: boolean
  private picked_listner: Observable<Array<string>>

  constructor(private clockService: ClockService, private store: Store<RootState.State>) {
  	this.store.pipe(select(RootSelectors.selectClocks)).subscribe((x: Array<string>) => this.isSelected(x));
    this.picked_listner = this.clockService.getCurrentClocksByDate
  }

  ngOnInit() {
    this.picked_listner.subscribe(x => this.updatePicked(x))
  }

  updatePicked(clocks: Array<string>) {
    console.log(clocks, this.clock)
    if (clocks.indexOf(this.clock) > -1) { this.picked = true }
    else { this.picked = false }
    console.log(this.picked)
  }

  selectClock() { 
	  let selected_clocks: Array<string> = this.clockService.selectClock(this.clock);
  	this.store.dispatch( new ClockActions.selectClockAction({clocks: selected_clocks}) );
  }

  isSelected(_clocks: Array<string>) {
  	this.selected = this.clockService.checkSelection(this.clock, _clocks);
  }
}
