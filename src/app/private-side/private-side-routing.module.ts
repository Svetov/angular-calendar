import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrivateSideComponent } from './private-side.component';


const privateRoutes = [
	{path: 'login', component: PrivateSideComponent}
];

@NgModule({
	imports: [
		RouterModule.forChild(privateRoutes)
	],
	exports: [
		RouterModule
	]
})
export class PrivateRoutingModule {}