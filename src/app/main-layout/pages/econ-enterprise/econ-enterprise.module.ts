import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EconEnterpriseRoutingModule } from './econ-enterprise-routing.module';
import { EconEnterpriseComponent } from './econ-enterprise.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    EconEnterpriseComponent
  ],
  imports: [
    CommonModule,
    EconEnterpriseRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
  ]
})
export class EconEnterpriseModule { }
