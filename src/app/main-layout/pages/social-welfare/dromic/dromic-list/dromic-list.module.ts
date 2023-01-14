import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DromicListRoutingModule } from './dromic-list-routing.module';
import { DromicListComponent } from './dromic-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    DromicListComponent
  ],
  imports: [
    CommonModule,
    DromicListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class DromicListModule { }
