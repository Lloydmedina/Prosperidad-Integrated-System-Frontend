import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessSetupRoutingModule } from './business-setup-routing.module';
import { BusinessSetupComponent } from './business-setup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    BusinessSetupRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class BusinessSetupModule { }
