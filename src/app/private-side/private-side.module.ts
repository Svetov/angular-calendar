import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-side-routing.module';

import { PrivateSideComponent } from './private-side.component';


@NgModule({
  imports: [
    CommonModule,
    PrivateRoutingModule
  ],
  declarations: [
  	PrivateSideComponent
  ]
})
export class PrivateSideModule { }
