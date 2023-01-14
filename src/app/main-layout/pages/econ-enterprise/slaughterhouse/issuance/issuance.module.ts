import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IssuanceRoutingModule } from './issuance-routing.module';
import { IssuanceComponent } from './issuance.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { ContentNavigationModule } from 'src/app/main-layout/template/content-navigation/content-navigation.module';


@NgModule({
  declarations: [
    IssuanceComponent
  ],
  imports: [
    CommonModule,
    IssuanceRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    ContentNavigationModule
  ]
})
export class IssuanceModule { }
