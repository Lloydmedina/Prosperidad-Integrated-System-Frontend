import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OscaIntakeTemplateListRoutingModule } from './osca-intake-template-list-routing.module';
import { OscaIntakeTemplateListComponent } from './osca-intake-template-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    OscaIntakeTemplateListComponent
  ],
  imports: [
    CommonModule,
    OscaIntakeTemplateListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class OscaIntakeTemplateListModule { }
