import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostMortemFormRoutingModule } from './post-mortem-form-routing.module';
import { PostMortemFormComponent } from './post-mortem-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { LocaleCurrencyInputModule } from 'locale-currency-input';


@NgModule({
  declarations: [
    PostMortemFormComponent
  ],
  imports: [
    CommonModule,
    PostMortemFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    LocaleCurrencyInputModule
  ]
})
export class PostMortemFormModule { }
