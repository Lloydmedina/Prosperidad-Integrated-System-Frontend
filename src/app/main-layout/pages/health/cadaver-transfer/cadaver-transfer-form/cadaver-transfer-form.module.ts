import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadaverTransferFormRoutingModule } from './cadaver-transfer-form-routing.module';
import { CadaverTransferFormComponent } from './cadaver-transfer-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';
import { PersonFilterModule } from 'src/app/main-layout/template/person-filter/person-filter.module';


@NgModule({
  declarations: [
    CadaverTransferFormComponent
  ],
  imports: [
    CommonModule,
    CadaverTransferFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    DateFilterModule,
    PersonFilterModule
  ]
})
export class CadaverTransferFormModule { }
