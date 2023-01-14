import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleTypeRoutingModule } from './role-type-routing.module';
import { RoleTypeComponent } from './role-type.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    RoleTypeComponent
  ],
  imports: [
    CommonModule,
    RoleTypeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class RoleTypeModule { }
