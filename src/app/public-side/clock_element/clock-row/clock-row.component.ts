import { Component, OnInit, Input } from '@angular/core';
import { ClockService } from '../clock/clock.service';

@Component({
  selector: 'app-clock-row',
  templateUrl: './clock-row.component.html',
  styleUrls: ['./clock-row.component.css']
})
export class ClockRowComponent implements OnInit {
  @Input() clock: string;

  constructor(private clockService: ClockService) { }

  ngOnInit() { }

  selectClock() { this.clockService.selectClock(this.clock); }
}
