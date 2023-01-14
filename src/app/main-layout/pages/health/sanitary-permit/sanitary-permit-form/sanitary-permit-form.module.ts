import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SanitaryPermitFormRoutingModule } from './sanitary-permit-form-routing.module';
import { SanitaryPermitFormComponent } from './sanitary-permit-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';


@NgModule({
  declarations: [
    SanitaryPermitFormComponent
  ],
  imports: [
    CommonModule,
    SanitaryPermitFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    DateFilterModule
  ]
})
export class SanitaryPermitFormModule { }
