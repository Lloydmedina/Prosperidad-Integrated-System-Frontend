import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClinicalAbstractFormRoutingModule } from './clinical-abstract-form-routing.module';
import { ClinicalAbstractFormComponent } from './clinical-abstract-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';
import { PersonFilterModule } from 'src/app/main-layout/template/person-filter/person-filter.module';


@NgModule({
  declarations: [
    ClinicalAbstractFormComponent
  ],
  imports: [
    CommonModule,
    ClinicalAbstractFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    DateFilterModule,
    PersonFilterModule
  ]
})
export class ClinicalAbstractFormModule { }
