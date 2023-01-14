import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EccdFormRoutingModule } from './eccd-form-routing.module';
import { EccdFormComponent } from './eccd-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    EccdFormComponent
  ],
  imports: [
    CommonModule,
    EccdFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class EccdFormModule { }
