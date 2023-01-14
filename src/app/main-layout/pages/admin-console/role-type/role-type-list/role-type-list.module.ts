import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleTypeListRoutingModule } from './role-type-list-routing.module';
import { RoleTypeListComponent } from './role-type-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';


@NgModule({
  declarations: [
    RoleTypeListComponent
  ],
  imports: [
    CommonModule,
    RoleTypeListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    DateFilterModule
  ]
})
export class RoleTypeListModule { }
