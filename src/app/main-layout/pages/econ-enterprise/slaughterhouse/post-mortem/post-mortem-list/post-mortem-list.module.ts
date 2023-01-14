import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostMortemListRoutingModule } from './post-mortem-list-routing.module';
import { PostMortemListComponent } from './post-mortem-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';


@NgModule({
  declarations: [
    PostMortemListComponent
  ],
  imports: [
    CommonModule,
    PostMortemListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    DateFilterModule
  ]
})
export class PostMortemListModule { }
