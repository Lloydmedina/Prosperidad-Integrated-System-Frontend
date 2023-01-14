import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChildInfoRoutingModule } from './child-info-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { ChildInfoComponent } from './child-info.component';


@NgModule({
  declarations: [
    ChildInfoComponent
  ],
  imports: [
    CommonModule,
    ChildInfoRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class ChildInfoModule { }
