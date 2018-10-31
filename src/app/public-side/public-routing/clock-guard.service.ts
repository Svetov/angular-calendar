import { Injectable } from '@angular/core';
import { 
	CanDeactivate,
	CanActivate,
	Router,
	ActivatedRouteSnapshot,
	RouterStateSnapshot,
	CanActivateChild
} from '@angular/router'
import { RootSelectors, RootState } from '../../root-store'
import { Store, select } from '@ngrx/store'
import { Observable } from 'rxjs'
import { PublicPaths } from '../public-side.path'
import { ClockComponent } from '../clock_element/clock/clock.component'

@Injectable({
  providedIn: 'root'
})
export class ClockGuardService implements CanDeactivate<ClockComponent>, CanActivate {
  url: string

  constructor(private store$: Store<RootState.State>) {
  	this.store$.pipe(select(RootSelectors.selectUrl))
  		.subscribe(res => this.url = res)
  }

  canActivate(
  	route: ActivatedRouteSnapshot,
  	state: RouterStateSnapshot
  ): boolean {	
  	console.log(route.url)
  	console.log(state.url)  	
  	return true
  }
 
  canDeactivate(
  	component: ClockComponent,
  	route: ActivatedRouteSnapshot,
  	state: RouterStateSnapshot,
  	next: RouterStateSnapshot
  ): boolean {
  	console.log(route.url)
  	console.log(state.url)
  	console.log(next.url)
  	console.log(next.url != PublicPaths.requestPath.path)
  	console.log(next.url === PublicPaths.requestPath.path || next.url === PublicPaths.calendarPath.path)
  	return next.url === PublicPaths.requestPath.path || next.url === PublicPaths.calendarPath.path
  }
}