import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnauthorizedRoutingModule } from './unauthorized-routing.module';
import { UnauthorizedComponent } from './unauthorized.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    UnauthorizedComponent
  ],
  imports: [
    CommonModule,
    UnauthorizedRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class UnauthorizedModule { }
