import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonListRoutingModule } from './person-list-routing.module';
import { PersonListComponent } from './person-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';
import { PersonFilterModule } from 'src/app/main-layout/template/person-filter/person-filter.module';

@NgModule({
  declarations: [
    PersonListComponent
  ],
  imports: [
    CommonModule,
    PersonListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    DateFilterModule,
    PersonFilterModule
  ]
})
export class PersonListModule { }
