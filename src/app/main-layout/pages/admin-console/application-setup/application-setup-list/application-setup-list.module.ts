import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationSetupListRoutingModule } from './application-setup-list-routing.module';
import { ApplicationSetupListComponent } from './application-setup-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';


@NgModule({
  declarations: [
    ApplicationSetupListComponent
  ],
  imports: [
    CommonModule,
    ApplicationSetupListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    DateFilterModule
  ]
})
export class ApplicationSetupListModule { }
