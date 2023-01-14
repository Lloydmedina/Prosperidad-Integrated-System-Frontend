import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AicsLetterListRoutingModule } from './aics-letter-list-routing.module';
import { AicsLetterListComponent } from './aics-letter-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';


@NgModule({
  declarations: [
    AicsLetterListComponent
  ],
  imports: [
    CommonModule,
    AicsLetterListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    DateFilterModule
  ]
})
export class AicsLetterListModule { }
