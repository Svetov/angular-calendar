import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar/calendar.component';
import { DayComponent } from './day/day.component';
import { CalendarServiceService } from './calendar/calendar-service.service';
import { MonthComponent } from './month/month.component';
import { YearComponent } from './year/year.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CalendarComponent, 
    DayComponent, 
    MonthComponent, 
    YearComponent
  ],
  exports: [
    CalendarComponent
  ],
  providers: [
    CalendarServiceService
  ]
})
export class PublicSideModule { }
