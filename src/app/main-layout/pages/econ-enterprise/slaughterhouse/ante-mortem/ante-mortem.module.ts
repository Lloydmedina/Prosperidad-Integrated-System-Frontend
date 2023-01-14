import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnteMortemRoutingModule } from './ante-mortem-routing.module';
import { AnteMortemComponent } from './ante-mortem.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { ContentNavigationModule } from 'src/app/main-layout/template/content-navigation/content-navigation.module';


@NgModule({
  declarations: [
    AnteMortemComponent
  ],
  imports: [
    CommonModule,
    AnteMortemRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    ContentNavigationModule
  ]
})
export class AnteMortemModule { }
