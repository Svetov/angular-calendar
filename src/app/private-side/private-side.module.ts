import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PrivateRoutingModule } from './private-routing/private-side-routing.module';
import { PrivateSideComponent } from './private-side.component';
import { PrivateService } from './private.service';
import { AdminComponent } from './admin/admin/admin.component';
import { FilterComponent } from './admin/filter/filter.component';
import { TableComponent } from './admin/table/table.component'

@NgModule({
  imports: [
    CommonModule,
    PrivateRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
  	PrivateSideComponent,
  	AdminComponent,
  	FilterComponent,
  	TableComponent
  ],
  providers: [
  	PrivateService
  ]
})
export class PrivateSideModule { }
