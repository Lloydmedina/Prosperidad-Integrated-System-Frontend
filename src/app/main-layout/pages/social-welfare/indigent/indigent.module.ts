import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndigentRoutingModule } from './indigent-routing.module';
import { IndigentComponent } from './indigent.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    IndigentComponent
  ],
  imports: [
    CommonModule,
    IndigentRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class IndigentModule { }
