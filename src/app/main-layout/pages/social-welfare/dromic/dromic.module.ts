import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DromicRoutingModule } from './dromic-routing.module';
import { DromicComponent } from './dromic.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { ContentNavigationModule } from 'src/app/main-layout/template/content-navigation/content-navigation.module';


@NgModule({
  declarations: [
    DromicComponent
  ],
  imports: [
    CommonModule,
    DromicRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    ContentNavigationModule
  ]
})
export class DromicModule { }
