import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlaughterhouseComponent } from './slaughterhouse.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { SlaughterhouseRoutingModule } from './slaughterhouse-routing.module';
import { SlaughteringModule } from './slaughtering/slaughtering.module';
import { ReceivingModule } from './receiving/receiving.module';
import { MonitoringModule } from './monitoring/monitoring.module';
import { BillingModule } from './billing/billing.module';
import { PaymentModule } from './payment/payment.module';
import { IssuanceModule } from './issuance/issuance.module';
import { DispatchingModule } from './dispatching/dispatching.module';
import { ScheduleOfFeesModule } from './schedule-of-fees/schedule-of-fees.module';
import { SlaughterhouseRecordsModule } from './slaughterhouse-records/slaughterhouse-records.module';
import { AnteMortemModule } from './ante-mortem/ante-mortem.module';
import { PostMortemModule } from './post-mortem/post-mortem.module';
import { BillingStatementModule } from './billing-statement/billing-statement.module';

@NgModule({
  imports: [
    CommonModule,
    SlaughterhouseRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    SlaughteringModule,
    ReceivingModule,
    MonitoringModule,
    BillingModule,
    PaymentModule,
    IssuanceModule,
    DispatchingModule,
    ScheduleOfFeesModule,
    SlaughterhouseRecordsModule,
    AnteMortemModule,
    PostMortemModule,
    BillingStatementModule
  ],
  declarations: [SlaughterhouseComponent]
})
export class SlaughterhouseModule { }
