import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DelinquentListComponent } from './delinquent-list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { DelinquentListRoutingModule } from './delinquent-list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DelinquentListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    DateFilterModule
  ],
  declarations: [DelinquentListComponent]
})
export class DelinquentListModule { }
