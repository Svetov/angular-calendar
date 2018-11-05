import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PrivateRoutingModule } from './private-routing/private-side-routing.module';
import { PrivateSideComponent } from './private-side.component';
import { PrivateService } from './private.service';
import { TableService } from './admin/table/table.service'
import { AdminComponent } from './admin/admin/admin.component';
import { FilterComponent } from './admin/filter/filter.component';
import { TableComponent } from './admin/table/table.component';
import { PaginationComponent } from './admin/pagination/pagination.component';
import { PageButtonComponent } from './admin/page-button/page-button.component';
import { TableRowComponent } from './admin/table-row/table-row.component'


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
  	TableComponent,
  	PaginationComponent,
  	PageButtonComponent,
  	TableRowComponent
  ],
  providers: [
  	PrivateService,
    TableService
  ]
})
export class PrivateSideModule { }
