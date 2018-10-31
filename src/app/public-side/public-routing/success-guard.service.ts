import { Injectable } from '@angular/core';
import { 
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

@Injectable({
  providedIn: 'root'
})
export class SuccessGuardService implements CanActivate {
  url: string

  constructor(private store$: Store<RootState.State>) {
  	this.store$.pipe(select(RootSelectors.selectUrl))
  		.subscribe(res => this.url = res)
  }

  canActivate(
  	route: ActivatedRouteSnapshot,
  	state: RouterStateSnapshot
  ): boolean {
  	return state.url != PublicPaths.calendarPath.path
  }
}
