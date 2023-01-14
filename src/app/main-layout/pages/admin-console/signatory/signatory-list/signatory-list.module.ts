import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignatoryListComponent } from './signatory-list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { SignatoryListRoutingModule } from './signatory-list-routing.module';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';

@NgModule({
  imports: [
    CommonModule,
    SignatoryListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    DateFilterModule
  ],
  declarations: [SignatoryListComponent]
})
export class SignatoryListModule { }
