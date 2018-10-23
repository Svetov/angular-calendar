import { Injectable } from '@angular/core';

@Injectable()
export class ClockService {
  private clocks: Array<string> = [ '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00','17:00', '18:00',
			 	 					'19:00', '20:00', '21:00', '22:00' ];
  private click_count: number = 0;
  private mem_clock: string = "";

  constructor() { }

  getfClocks() {
  	return this.clocks;
  }

  selectClock(clock_: string): Array<string> {
  	let result: Array<string> = [];
	this.incrementClockCount();

  	if (this.click_count % 2 === 0 && clock_ != this.mem_clock) {
  		result.push(this.mem_clock)
  		result.push(clock_);
  	}
  	else {
	  	result.push(clock_);
	}

	let res = this.click_count % 2 === 0 && clock_ != this.mem_clock ? this.fillClock(result) : result;
	this.setMemClock(clock_);
	console.log(res);
	return res;
  }  

  setMemClock(clock_: string) {
  	this.mem_clock = clock_
  }

  incrementClockCount() {
  	this.click_count++;
  }

  fillClock(clock_: Array<string>): Array<string> {
  	let result = clock_.map(x => this.clocks.indexOf(x));
  	result = result[0] < result[1] ? result : result.reverse();
  	return this.clocks.slice(result[0], result[1] + 1);
  }
}
