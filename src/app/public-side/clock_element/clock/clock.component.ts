import { Component, OnInit } from '@angular/core';
import { ClockService } from './clock.service';
import { PublicPaths } from '../../public-side.path';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
  herf_back: string;
  herf_forward: string;
  clocks_view: Array<string>;

  constructor(private clockService: ClockService) {
  	this.herf_back = PublicPaths.calendarPath.path;
  	this.herf_forward = PublicPaths.requestPath.path;
  }

  ngOnInit() {
  	this.clocks_view = this.clockService.clocks;
  }

}
