import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleTypeFormRoutingModule } from './role-type-form-routing.module';
import { RoleTypeFormComponent } from './role-type-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    RoleTypeFormComponent
  ],
  imports: [
    CommonModule,
    RoleTypeFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class RoleTypeFormModule { }
