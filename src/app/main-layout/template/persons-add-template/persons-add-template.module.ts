import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonsAddTemplateRoutingModule } from './persons-add-template-routing.module';
import { PersonsAddTemplateComponent } from './persons-add-template.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    PersonsAddTemplateComponent
  ],
  exports: [PersonsAddTemplateComponent],
  imports: [
    CommonModule,
    PersonsAddTemplateRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class PersonsAddTemplateModule { }
