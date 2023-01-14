import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DomainFormRoutingModule } from './domain-form-routing.module';
import { DomainFormComponent } from './domain-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    DomainFormComponent
  ],
  imports: [
    CommonModule,
    DomainFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class DomainFormModule { }
