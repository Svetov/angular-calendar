import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PrivateRoutingModule } from './private-side-routing.module';
import { PrivateSideComponent } from './private-side.component';
import { PrivateService } from './private.service'

@NgModule({
  imports: [
    CommonModule,
    PrivateRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
  	PrivateSideComponent
  ],
  providers: [
  	PrivateService
  ]
})
export class PrivateSideModule { }
