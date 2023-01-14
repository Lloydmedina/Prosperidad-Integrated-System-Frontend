import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndigentFormRoutingModule } from './indigent-form-routing.module';
import { IndigentFormComponent } from './indigent-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    IndigentFormComponent
  ],
  imports: [
    CommonModule,
    IndigentFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class IndigentFormModule { }
