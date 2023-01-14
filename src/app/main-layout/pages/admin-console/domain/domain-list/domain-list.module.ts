import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DomainListRoutingModule } from './domain-list-routing.module';
import { DomainListComponent } from './domain-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';


@NgModule({
  declarations: [
    DomainListComponent
  ],
  imports: [
    CommonModule,
    DomainListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    DateFilterModule
  ]
})
export class DomainListModule { }
