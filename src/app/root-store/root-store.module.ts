import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { RootReducer } from './root-reducer';
import { RootEffects } from './root-effects'
import { StoreRouterConnectingModule } from '@ngrx/router-store'

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forRoot( RootEffects ),
    StoreModule.forRoot( RootReducer ),
    StoreRouterConnectingModule.forRoot(),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [...RootEffects],
  declarations: []
})
export class RootStoreModule { }
