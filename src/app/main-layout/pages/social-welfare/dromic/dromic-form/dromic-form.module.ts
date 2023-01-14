import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DromicFormRoutingModule } from './dromic-form-routing.module';
import { DromicFormComponent } from './dromic-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    DromicFormComponent
  ],
  imports: [
    CommonModule,
    DromicFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class DromicFormModule { }
