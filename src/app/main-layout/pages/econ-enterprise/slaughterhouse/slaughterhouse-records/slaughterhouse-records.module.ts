import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SlaughterhouseRecordsRoutingModule } from './slaughterhouse-records-routing.module';
import { SlaughterhouseRecordsComponent } from './slaughterhouse-records.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { ContentNavigationModule } from 'src/app/main-layout/template/content-navigation/content-navigation.module';


@NgModule({
  declarations: [
    SlaughterhouseRecordsComponent
  ],
  imports: [
    CommonModule,
    SlaughterhouseRecordsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    ContentNavigationModule
  ]
})
export class SlaughterhouseRecordsModule { }
