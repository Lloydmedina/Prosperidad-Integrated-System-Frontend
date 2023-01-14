import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserFormRoutingModule } from './user-form-routing.module';
import { UserFormComponent } from './user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    UserFormComponent
  ],
  imports: [
    CommonModule,
    UserFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class UserFormModule { }
