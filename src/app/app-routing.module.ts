import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrivateSideComponent } from './private-side/private-side.component';
import { PublicSideComponent } from './public-side/public-side.component';
import { CalendarComponent } from './public-side/calendar/calendar.component';

const appRoutes: Routes = [
	{path: 'login', component: PrivateSideComponent},
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule { }