import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExhumationPermitFormRoutingModule } from './exhumation-permit-form-routing.module';
import { ExhumationPermitFormComponent } from './exhumation-permit-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';
import { PersonFilterModule } from 'src/app/main-layout/template/person-filter/person-filter.module';


@NgModule({
  declarations: [
    ExhumationPermitFormComponent
  ],
  imports: [
    CommonModule,
    ExhumationPermitFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    DateFilterModule,
    PersonFilterModule
  ]
})
export class ExhumationPermitFormModule { }
