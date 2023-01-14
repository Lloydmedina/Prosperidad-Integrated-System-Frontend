import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeFormComponent } from './employee-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { EmployeeFormRoutingModule } from './employee-form-routing.module';

@NgModule({
  imports: [
    CommonModule,
    EmployeeFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ],
  declarations: [EmployeeFormComponent]
})
export class EmployeeFormModule { }
