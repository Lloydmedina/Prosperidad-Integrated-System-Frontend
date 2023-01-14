import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClinicalAbstractRoutingModule } from './clinical-abstract-routing.module';
import { ClinicalAbstractComponent } from './clinical-abstract.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    ClinicalAbstractRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class ClinicalAbstractModule { }
