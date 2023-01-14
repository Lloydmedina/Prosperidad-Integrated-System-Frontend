import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertyManagementRoutingModule } from './property-management-routing.module';
import { PropertyManagementComponent } from './property-management.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    PropertyManagementComponent
  ],
  imports: [
    CommonModule,
    PropertyManagementRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class PropertyManagementModule { }
