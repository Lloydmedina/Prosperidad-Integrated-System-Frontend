import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillingStatementRoutingModule } from './billing-statement-routing.module';
import { BillingStatementComponent } from './billing-statement.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { ContentNavigationModule } from 'src/app/main-layout/template/content-navigation/content-navigation.module';


@NgModule({
  declarations: [
    BillingStatementComponent
  ],
  imports: [
    CommonModule,
    BillingStatementRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    ContentNavigationModule
  ]
})
export class BillingStatementModule { }
