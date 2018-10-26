import { Injectable } from '@angular/core';

@Injectable()
export class ClockService {
  private clocks_: Array<string> = [ '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00','17:00', '18:00',
			 	 					                   '19:00', '20:00', '21:00', '22:00' ];
  get clocks(): Array<string> { return this.clocks_ }
  set clocks(_clocks) { this.clocks_ = _clocks }

  private click_count_: number = 0;
  get click_count(): number { return this.click_count_ }
  set click_count(_clock: number) { this.click_count_ = _clock }
  increment_clock_count(): void { this.click_count++ }

  private mem_clock_: string = "";
  get mem_clock(): string { return this.mem_clock_ }
  set mem_clock(_mem_clock: string) { this.mem_clock_ = _mem_clock }

  constructor() { }

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
}
