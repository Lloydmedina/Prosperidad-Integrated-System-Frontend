import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndigentListTemplateRoutingModule } from './indigent-list-template-routing.module';
import { IndigentListTemplateComponent } from './indigent-list-template.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    IndigentListTemplateComponent
  ],
  imports: [
    CommonModule,
    IndigentListTemplateRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class IndigentListTemplateModule { }
