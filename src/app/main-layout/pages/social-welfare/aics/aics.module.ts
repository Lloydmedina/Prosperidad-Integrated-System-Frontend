import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AicsRoutingModule } from './aics-routing.module';
import { AicsComponent } from './aics.component';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AicsComponent
  ],
  imports: [
    CommonModule,
    AicsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class AicsModule { }
