import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PwdRoutingModule } from './pwd-routing.module';
import { PwdComponent } from './pwd.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    PwdComponent
  ],
  imports: [
    CommonModule,
    PwdRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class PwdModule { }
