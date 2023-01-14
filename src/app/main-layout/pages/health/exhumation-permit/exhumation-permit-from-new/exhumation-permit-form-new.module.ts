import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExhumationPermitFormNewRoutingModule } from './exhumation-permit-form-new-routing.module';
import { ExhumationPermitFromNewComponent } from './exhumation-permit-from-new.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    ExhumationPermitFromNewComponent
  ],
  imports: [
    CommonModule,
    ExhumationPermitFormNewRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class ExhumationPermitFormNewModule { }
