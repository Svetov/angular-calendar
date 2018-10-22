import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar/calendar.component';
import { DayComponent } from './day/day.component';
import { CalendarServiceService } from './calendar/calendar-service.service';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CalendarComponent, 
    DayComponent
  ],
  exports: [
    CalendarComponent
  ],
  providers: [
    CalendarServiceService
  ]
})
export class PublicSideModule { }