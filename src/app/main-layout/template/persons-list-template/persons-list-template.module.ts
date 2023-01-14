import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonsListTemplateRoutingModule } from './persons-list-template-routing.module';
import { PersonsListTemplateComponent } from './persons-list-template.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { PersonFilterModule } from '../person-filter/person-filter.module';


@NgModule({
  declarations: [
    PersonsListTemplateComponent
  ],
  exports: [PersonsListTemplateComponent],
  imports: [
    CommonModule,
    PersonsListTemplateRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    PersonFilterModule
  ]
})
export class PersonsListTemplateModule { }
