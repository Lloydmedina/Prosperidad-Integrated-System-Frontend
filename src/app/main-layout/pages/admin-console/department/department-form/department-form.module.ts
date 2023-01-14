import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentFormComponent } from './department-form.component';
import { DepartmentFormRoutingModule } from './department-form-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';

@NgModule({
  imports: [
    
    CommonModule,
    DepartmentFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ],
  declarations: [DepartmentFormComponent]
})
export class DepartmentFormModule { }
