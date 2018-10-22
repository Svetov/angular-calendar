import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';

import { RootReducer } from './root-reducer';


@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot( RootReducer ),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  declarations: []
})
export class RootStoreModule { }
