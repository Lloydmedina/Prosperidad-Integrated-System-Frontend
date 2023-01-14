import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostMortemPrintFormRoutingModule } from './post-mortem-print-form-routing.module';
import { PostMortemPrintFormComponent } from './post-mortem-print-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    PostMortemPrintFormComponent
  ],
  imports: [
    CommonModule,
    PostMortemPrintFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class PostMortemPrintFormModule { }
