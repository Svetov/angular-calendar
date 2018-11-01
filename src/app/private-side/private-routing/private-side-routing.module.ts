import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateSideComponent } from './../private-side.component';
import { PrivatePaths } from './../private-side.path'
import { AdminComponent } from './../admin/admin/admin.component'
import { AdminGuarsService } from './admin-guars.service'
import { LoginGuarsService } from './login-guars.service'


const privateRoutes = [
	{
		path: PrivatePaths.loginPath.name, 
		component: PrivateSideComponent,
		canActivate: [LoginGuarsService]
	},
	{
		path: PrivatePaths.successPath.name,
		component: AdminComponent,
		canActivate: [AdminGuarsService]
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(privateRoutes)
	],
	exports: [
		RouterModule
	],
	providers: [
		AdminGuarsService,
		LoginGuarsService
	]
})
export class PrivateRoutingModule {}