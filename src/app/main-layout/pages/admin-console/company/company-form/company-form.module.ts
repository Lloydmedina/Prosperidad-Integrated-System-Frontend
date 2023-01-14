import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyFormRoutingModule } from './company-form-routing.module';
import { CompanyFormComponent } from './company-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    CompanyFormComponent
  ],
  imports: [
    CommonModule,
    CompanyFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class CompanyFormModule { }
