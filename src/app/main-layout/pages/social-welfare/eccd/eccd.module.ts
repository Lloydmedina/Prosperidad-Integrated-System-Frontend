import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EccdRoutingModule } from './eccd-routing.module';
import { EccdComponent } from './eccd.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { ContentNavigationModule } from 'src/app/main-layout/template/content-navigation/content-navigation.module';


@NgModule({
  declarations: [
    EccdComponent
  ],
  imports: [
    CommonModule,
    EccdRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    ContentNavigationModule
  ]
})
export class EccdModule { }
