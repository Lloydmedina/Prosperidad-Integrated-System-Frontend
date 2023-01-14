import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FcListTemplateRoutingModule } from './fc-list-template-routing.module';
import { FcListTemplateComponent } from './fc-list-template.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { PersonFilterModule } from '../person-filter/person-filter.module';


@NgModule({
  declarations: [
    FcListTemplateComponent
  ],
  exports: [FcListTemplateComponent],
  imports: [
    CommonModule,
    FcListTemplateRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    PersonFilterModule
  ]
})
export class FcListTemplateModule { }
