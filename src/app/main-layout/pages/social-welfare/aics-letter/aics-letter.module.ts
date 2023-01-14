import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AicsLetterRoutingModule } from './aics-letter-routing.module';
import { AicsLetterComponent } from './aics-letter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { ContentNavigationModule } from 'src/app/main-layout/template/content-navigation/content-navigation.module';


@NgModule({
  declarations: [
    AicsLetterComponent
  ],
  imports: [
    CommonModule,
    AicsLetterRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    ContentNavigationModule
  ]
})
export class AicsLetterModule { }
