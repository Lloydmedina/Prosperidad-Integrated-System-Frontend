import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AicsIntakeTemplateRoutingModule } from './aics-intake-template-routing.module';
import { AicsIntakeTemplateComponent } from './aics-intake-template.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    AicsIntakeTemplateComponent
  ],
  imports: [
    CommonModule,
    AicsIntakeTemplateRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class AicsIntakeTemplateModule { }
