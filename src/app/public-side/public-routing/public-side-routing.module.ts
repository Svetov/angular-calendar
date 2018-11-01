import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { PublicPaths } from './../public-side.path';
import { PublicSideComponent } from './../public-side.component';
import { CalendarComponent } from './../calendar_element/calendar/calendar.component';
import { ClockComponent } from './../clock_element/clock/clock.component'; 
import { RequestComponent } from './../request_element/request/request.component';
import { SuccessComponent } from './../success/success.component'
import { CalendarGuardService, CalendarGuardServiceResolve } from './calendar-guard.service'
import { ClockGuardService } from './clock-guard.service'
import { RequestGuardService } from './request-guard.service'
import { SuccessGuardService } from './success-guard.service'
import { PublicGuardService } from './public-guard.service'

const publicRoutes = [
	{
		path: PublicPaths.nullPath.name,
		redirectTo: PublicPaths.calendarPath.path, 
		pathMatch: 'full' 
	},
	{ 
		path: PublicPaths.selectPath.name, 	
		redirectTo: PublicPaths.calendarPath.path, 
		pathMatch: 'full' 
	},
	{ 
		path: PublicPaths.selectPath.name, 	
		component: PublicSideComponent, 
		//canActivate: [PublicGuardService],
		children: 
		[
			{ 
				path: PublicPaths.calendarPath.name, 	
				component: CalendarComponent,
				//resolve: [CalendarGuardServiceResolve],
				//canDeactivate: [CalendarGuardService]
				//canActivate: [CalendarGuardServiceCanActive]
			},
			{ 
				path: PublicPaths.clockPath.name, 	
				component: ClockComponent,
				//canActivate: [ClockGuardService]
				//canDeactivate: [ClockGuardService]
			},
			{ 
				path: PublicPaths.requestPath.name,	
				component: RequestComponent,
				//canDeactivate: [RequestGuardService]
			},
			{ 
				path: PublicPaths.successPath.name, 
				component: SuccessComponent,
				//canDeactivate: [SuccessGuardService]
			}
		]
	}
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