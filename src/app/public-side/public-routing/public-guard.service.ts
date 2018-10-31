import { Injectable } from '@angular/core';
import { 
	CanActivate, 
	Router,
	CanDeactivate,
	ActivatedRouteSnapshot,
	RouterStateSnapshot,
	CanActivateChild
} from '@angular/router'
import { RootSelectors, RootState } from '../../root-store'
import { Store, select } from '@ngrx/store'
import { Observable } from 'rxjs'
import { PublicPaths } from '../public-side.path'
import { CalendarComponent } from '../calendar_element/calendar/calendar.component'

@Injectable({
  providedIn: 'root'
})
export class PublicGuardService implements CanDeactivate<CalendarComponent> {//, CanActivate {
  url: string

  constructor(private store$: Store<RootState.State>) {
  	this.store$.pipe(select(RootSelectors.selectUrl))
  		.subscribe(res => this.url = res)
  }

  canActivate(
  	route: ActivatedRouteSnapshot,
  	state: RouterStateSnapshot
  ): boolean {	
  	return true
  }

  canDeactivate(
  	component: CalendarComponent,
  	route: ActivatedRouteSnapshot,
  	state: RouterStateSnapshot,
  	next: RouterStateSnapshot
  ): boolean {
  	console.log(route.url)
  	console.log(state.url)
  	console.log(next.url)
  	return state.url != PublicPaths.calendarPath.path
  }
}