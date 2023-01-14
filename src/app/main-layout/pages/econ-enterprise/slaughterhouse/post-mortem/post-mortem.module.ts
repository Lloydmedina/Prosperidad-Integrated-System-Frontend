import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostMortemRoutingModule } from './post-mortem-routing.module';
import { PostMortemComponent } from './post-mortem.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { ContentNavigationModule } from 'src/app/main-layout/template/content-navigation/content-navigation.module';


@NgModule({
  declarations: [
    PostMortemComponent
  ],
  imports: [
    CommonModule,
    PostMortemRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    ContentNavigationModule
  ]
})
export class PostMortemModule { }
