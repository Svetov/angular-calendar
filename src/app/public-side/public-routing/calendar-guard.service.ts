import { Injectable } from '@angular/core';
import { 
	CanActivate,
	Resolve, 
	Router,
	CanDeactivate,
	ActivatedRouteSnapshot,
	RouterStateSnapshot,
	CanActivateChild,
	NavigationExtras
} from '@angular/router'
import { RootSelectors, RootState } from '../../root-store'
import { Store, select } from '@ngrx/store'
import { Observable, of } from 'rxjs'
import { PublicPaths } from '../public-side.path'
import { CalendarComponent } from '../calendar_element/calendar/calendar.component'

@Injectable({
  providedIn: 'root'
})
export class CalendarGuardService implements CanDeactivate<CalendarComponent> {
  url: string

  constructor(private store$: Store<RootState.State>,
  			  private router: Router) 
  {
  	this.store$.pipe(select(RootSelectors.selectUrl))
  		.subscribe(res => this.url = res)
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
  	console.log(next.url != PublicPaths.clockPath.path)
  	console.log(PublicPaths.clockPath.path)

  	const extra: NavigationExtras = {
  		queryParams: {
  			router_count: 1
  		}
  	}
  	//this.router.navigate([PublicPaths.requestPath.path], extra)
  	return false
  }
}


@Injectable({
  providedIn: 'root'
})
export class CalendarGuardServiceResolve implements Resolve<CalendarComponent> {
  url: string

  constructor(private store$: Store<RootState.State>) {
  	this.store$.pipe(select(RootSelectors.selectUrl))
  		.subscribe(res => this.url = res)
  }

  resolve(
  	route: ActivatedRouteSnapshot,
  	state: RouterStateSnapshot
  ): Observable<any> {
  	console.log('----')
  	console.log(route.url)
  	console.log(state.url)
  	console.log(this.url)
  	console.log('----')
  	return of(state.url === PublicPaths.clockPath.path)
  }
}








