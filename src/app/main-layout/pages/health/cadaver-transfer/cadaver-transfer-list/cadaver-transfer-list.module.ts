import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadaverTransferListRoutingModule } from './cadaver-transfer-list-routing.module';

import { CadaverTransferListComponent } from './cadaver-transfer-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';
import { PersonFilterModule } from 'src/app/main-layout/template/person-filter/person-filter.module';
import { LocaleCurrencyInputModule } from 'locale-currency-input';


@NgModule({
  declarations: [
    CadaverTransferListComponent
  ],
  imports: [
    CommonModule,
    CadaverTransferListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    DateFilterModule,
    PersonFilterModule,
    LocaleCurrencyInputModule
  ]
})
export class CadaverTransferListModule { }
