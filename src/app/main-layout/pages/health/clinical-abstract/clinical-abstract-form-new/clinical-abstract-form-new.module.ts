import { NgModule, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClinicalAbstractFormNewRoutingModule } from './clinical-abstract-form-new-routing.module';
import { ClinicalAbstractFormNewComponent } from './clinical-abstract-form-new.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    ClinicalAbstractFormNewComponent
  ],
  imports: [
    CommonModule,
    ClinicalAbstractFormNewRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class ClinicalAbstractFormNewModule { }
