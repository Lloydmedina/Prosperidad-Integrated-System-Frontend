import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OscaRoutingModule } from './osca-routing.module';
import { OscaComponent } from './osca.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    OscaComponent
  ],
  imports: [
    CommonModule,
    OscaRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class OscaModule { }
