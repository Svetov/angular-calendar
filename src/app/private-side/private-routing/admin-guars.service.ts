import { Injectable } from '@angular/core';
import { CanActivate,
		 ActivatedRouteSnapshot,
		 RouterStateSnapshot } from '@angular/router'
import { Store, select } from '@ngrx/store'
import { RootState, RootSelectors } from '../../root-store'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { LOGIN_STATUS } from '../../app.parametrs'


@Injectable()
export class AdminGuarsService implements CanActivate {

	constructor(private store$: Store<RootState.State>) { }

	canActivate(state: ActivatedRouteSnapshot,
				route: RouterStateSnapshot): Observable<boolean>
	{
		return this.store$.pipe(
			select(RootSelectors.selectAdminStatus),
			map(status => status === LOGIN_STATUS.SUCCESS)
		)
	}
}
