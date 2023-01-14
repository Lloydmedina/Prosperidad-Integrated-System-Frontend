import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyListRoutingModule } from './company-list-routing.module';
import { CompanyListComponent } from './company-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    CompanyListComponent
  ],
  imports: [
    CommonModule,
    CompanyListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class CompanyListModule { }
