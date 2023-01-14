import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list.component';
import { EmployeeListRoutingModule } from './employee-list-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';

@NgModule({
  imports: [
    CommonModule,
    EmployeeListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ],
  declarations: [EmployeeListComponent]
})
export class EmployeeListModule { }
