import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ClockService } from './clock_element/clock/clock.service';
import { CalendarServiceService } from './calendar_element/calendar/calendar-service.service';

import { PublicRoutingModule } from './public-side-routing.module';
import { PublicSideComponent } from './public-side.component';
import { ButtonNavComponent } from './button-nav/button-nav.component';

import { CalendarComponent } from './calendar_element/calendar/calendar.component';
import { DayComponent } from './calendar_element/day/day.component';
import { MonthComponent } from './calendar_element/month/month.component';
import { YearComponent } from './calendar_element/year/year.component';

import { ClockComponent } from './clock_element/clock/clock.component';
import { DateInftoComponent } from './clock_element/date-infto/date-infto.component';
import { ClockRowComponent } from './clock_element/clock-row/clock-row.component';

import { RequestComponent } from './request_element/request/request.component';
import { RequestFormComponent } from './request_element/request-form/request-form.component';
import { RequestComfirmComponent } from './request_element/request-comfirm/request-comfirm.component'

@NgModule({
  imports: [
    CommonModule,
    PublicRoutingModule,
    ReactiveFormsModule
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
    ClockRowComponent, 
    RequestComponent, 
    RequestFormComponent,
    RequestComfirmComponent
  ],
  exports: [
  ],
  providers: [
    CalendarServiceService,
    ClockService
  ]
})
export class PublicSideModule { }
