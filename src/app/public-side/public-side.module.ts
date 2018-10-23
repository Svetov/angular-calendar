import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClockService } from './clock_element/clock/clock.service';
import { CalendarServiceService } from './calendar_element/calendar/calendar-service.service';
import { PublicRoutingModule } from './public-side-routing.module';

import { CalendarComponent } from './calendar_element/calendar/calendar.component';
import { DayComponent } from './calendar_element/day/day.component';
import { MonthComponent } from './calendar_element/month/month.component';
import { YearComponent } from './calendar_element/year/year.component';
import { ClockComponent } from './clock_element/clock/clock.component';
import { PublicSideComponent } from './public-side.component';
import { DateInftoComponent } from './clock_element/date-infto/date-infto.component';
import { ButtonNavComponent } from './button-nav/button-nav.component';
import { ClockRowComponent } from './clock_element/clock-row/clock-row.component';


@NgModule({
  imports: [
    CommonModule,
    PublicRoutingModule
  ],
  declarations: [
    CalendarComponent, 
    DayComponent, 
    MonthComponent, 
    YearComponent, 
    ClockComponent, 
    PublicSideComponent, 
    DateInftoComponent, 
    ButtonNavComponent, 
    ClockRowComponent
  ],
  exports: [
  ],
  providers: [
    CalendarServiceService,
    ClockService
  ]
})
export class PublicSideModule { }
