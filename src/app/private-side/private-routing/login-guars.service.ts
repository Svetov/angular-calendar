import { Injectable } from '@angular/core';
import { CanActivate,
		 ActivatedRouteSnapshot,
		 RouterStateSnapshot } from '@angular/router'
import { Observable } from 'rxjs'
import { map, tap } from 'rxjs/operators'
import { Store, select } from '@ngrx/store'
import { RootState, RootSelectors } from '../../root-store'
import { loginStatus } from '../../app.parametrs'


@Injectable()
export class LoginGuarsService implements CanActivate {

	constructor(private store$: Store<RootState.State>) { }

	canActivate(state: ActivatedRouteSnapshot,
 				route: RouterStateSnapshot): Observable<boolean>
	{
		return this.store$.pipe(
			select(RootSelectors.selectAdminStatus),
			tap(x => console.log(123, x)),
			map(status => status !== loginStatus.success)
		)
	}
}
