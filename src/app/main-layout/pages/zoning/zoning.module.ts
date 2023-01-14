import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZoningRoutingModule } from './zoning-routing.module';
import { ZoningComponent } from './zoning.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    ZoningComponent
  ],
  imports: [
    CommonModule,
    ZoningRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class ZoningModule { }
