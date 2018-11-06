import { Component, OnInit } from '@angular/core';
import { ClockService } from './clock.service';
import { PublicPaths } from '../../public-side.path';
import { Observable, Subject } from 'rxjs'


@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
  herf_back: string;
  herf_forward: string;
  clocks_view: Array<string>;
  select_listner: Subject<boolean>
  select_error: boolean

  constructor(private clockService: ClockService) {
  	this.herf_back = PublicPaths.calendarPath.path;
  	this.herf_forward = PublicPaths.requestPath.path;
    this.select_listner = this.clockService.select_error
  }

  ngOnInit() {
  	this.clocks_view = this.clockService.clocks;
    this.select_listner.subscribe(res => this.select_error = res)
  }

}
