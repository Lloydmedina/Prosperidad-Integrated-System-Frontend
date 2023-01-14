import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DafacRoutingModule } from './dafac-routing.module';
import { DafacComponent } from './dafac.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    DafacComponent
  ],
  imports: [
    CommonModule,
    DafacRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class DafacModule { }
