import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

import { PublicPaths } from './public-side.path';

import { PublicSideComponent } from './public-side.component';
import { CalendarComponent } from './calendar_element/calendar/calendar.component';
import { ClockComponent } from './clock_element/clock/clock.component'; 
import { RequestComponent } from './request_element/request/request.component';
import { SuccessComponent } from './success/success.component'



const publicRoutes = [
	{ path: PublicPaths.nullPath.path, 		redirectTo: PublicPaths.calendarPath.path, pathMatch: 'full' },
	{ path: PublicPaths.selectPath.name, 	redirectTo: PublicPaths.calendarPath.path, pathMatch: 'full' },
	{ path: PublicPaths.selectPath.name, 	component: PublicSideComponent, children: [
		{ path: 	PublicPaths.calendarPath.name, 	component: CalendarComponent },
		{ path: 	PublicPaths.clockPath.name, 	component: ClockComponent },
		{ path: 	PublicPaths.requestPath.name,	component: RequestComponent },
		{ path:		PublicPaths.successPath.name, 	component: SuccessComponent }
	]}
];

@NgModule({
	imports: [
		RouterModule.forChild(publicRoutes)
	],
	exports: [
		RouterModule
	]
})
export class PublicRoutingModule {}