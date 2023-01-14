import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DomainRoutingModule } from './domain-routing.module';
import { DomainComponent } from './domain.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    DomainComponent
  ],
  imports: [
    CommonModule,
    DomainRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class DomainModule { }
