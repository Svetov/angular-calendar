import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store'
import { RootState, RootSelectors } from '../../../root-store'
import { mapTo, map, filter, tap, switchMap, first, catchError, reduce } from 'rxjs/operators'
import { Observable, Subject } from 'rxjs'
import { CLOCKS_RANGE } from '../../../app.parametrs'


@Injectable()
export class ClockService {
  private picked_date: string = ''
  private picked_clocks: Observable<any>
  private clocks_: Array<string> = CLOCKS_RANGE;
  get clocks(): Array<string> { 
    return this.clocks_ 
  }
  set clocks(_clocks) { 
    this.clocks_ = _clocks 
  }

  private click_count_: number = 0;
  get click_count(): number { 
    return this.click_count_ 
  }
  set click_count(_clock: number) { 
    this.click_count_ = _clock 
  }
  increment_clock_count(): void { 
    this.click_count++ 
  }

  private mem_clock_: string = "";
  get mem_clock(): string { 
    return this.mem_clock_ 
  }
  set mem_clock(_mem_clock: string) { 
    this.mem_clock_ = _mem_clock 
  }

  private select_error_: Subject<any> = new Subject()
  get select_error() {
    return this.select_error_
  }

  constructor(private store$: Store<RootState.State>) {
    this.store$.pipe(select(RootSelectors.selectDay)).subscribe(x => this.picked_date = x)
    this.picked_clocks = this.store$.pipe(select(RootSelectors.selectForClocksRow))
  }

  test_filter(date_, picked_date_) {
    console.log(5, date_, 6, picked_date_)
    return true
  }

  selectClock(_clock: string): Array<string> {
  	let result: Array<string> = [];
	  this.increment_clock_count();

  	if (this.click_count % 2 === 0 && _clock !== this.mem_clock) {
  		result.push(this.mem_clock)
  		result.push(_clock);
  	}
  	else {
	  	result.push(_clock);
  	}

  	let res = this.click_count % 2 === 0 && _clock !== this.mem_clock ? this.fillClock(result) : result;
  	this.mem_clock = _clock;
  	return res;
  }  

  fillClock(_clock: Array<string>): Array<string> {
  	let result = _clock.map(x => this.clocks_.indexOf(x));
  	result = result[0] < result[1] ? result : result.reverse();
  	return this.clocks_.slice(result[0], result[1] + 1);
  }

  checkSelection(_clock: string, _clocks: Array<string>): boolean {
    return _clocks.indexOf(_clock) != -1 ? true : false;
  }

  get getCurrentClocksByDate() {
    return this.picked_clocks
  }
}
