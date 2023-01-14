import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentListRoutingModule } from './department-list-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { DepartmentListComponent } from './department-list.component';

@NgModule({
  imports: [
    
    CommonModule,
    DepartmentListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    DateFilterModule
  ],
  declarations: [DepartmentListComponent],
})
export class DepartmentListModule { }
