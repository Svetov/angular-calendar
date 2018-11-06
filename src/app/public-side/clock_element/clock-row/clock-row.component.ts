import { Component, OnInit, Input } from '@angular/core';
import { ClockService } from '../clock/clock.service';
import { RootState, ClockActions, RootSelectors } from '../../../root-store';
import { Store, select } from '@ngrx/store'; 
import { Observable, Subject } from 'rxjs';
import { map, first } from 'rxjs/operators'

@Component({
  selector: 'app-clock-row',
  templateUrl: './clock-row.component.html',
  styleUrls: ['./clock-row.component.css']
})
export class ClockRowComponent implements OnInit {
  @Input() clock: string;
  selected: boolean = false;
  picked: boolean
  picked_list: Array<string>
  picked_listner: Observable<Array<string>>
  select_listner: Subject<boolean>
  select_error: boolean

  constructor(private clockService: ClockService, private store: Store<RootState.State>) {
  	this.store.pipe(select(RootSelectors.selectClocks)).subscribe((x: Array<string>) => this.isSelected(x));
    this.picked_listner = this.clockService.getCurrentClocksByDate
    this.select_listner = this.clockService.select_error
  }

  ngOnInit() {
    this.picked_listner.subscribe((clocks: Array<string>): void => this.updatePicked(clocks) )
    this.select_listner.subscribe(res => this.select_error = res)
  }

  updatePicked(clocks: Array<string>) {
    clocks.forEach((item, i) => {
      if(item.indexOf(this.clock) > -1) {
        this.picked = true
      }
    })
    this.picked_list = clocks
  }

  selectClock() { 
	  let selected_clocks: Array<string> = this.clockService.selectClock(this.clock);
    this.select_listner.next(false)

    if(this.picked_list.length !== 0) {
      this.picked_list.forEach(picked_list => {
    	  selected_clocks.forEach(item => {
          if (picked_list.indexOf(item) > -1) {
            this.select_listner.next(true)
          }
        })

        //console.log(1, picked_list)
        //console.log(2, this.clockService.select_error)
        //console.log(3, selected_clocks)
        if (!this.select_error) {
          this.store.dispatch( new ClockActions.selectClockAction({clocks: selected_clocks}) );  
        }
      })
    } 
    else {
      this.store.dispatch( new ClockActions.selectClockAction({clocks: selected_clocks}) );
    }
  }

  isSelected(_clocks: Array<string>) {
  	this.selected = this.clockService.checkSelection(this.clock, _clocks);
  }
}
