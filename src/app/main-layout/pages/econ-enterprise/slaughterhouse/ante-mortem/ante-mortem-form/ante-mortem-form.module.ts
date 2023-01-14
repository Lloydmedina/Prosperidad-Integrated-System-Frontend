import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnteMortemFormRoutingModule } from './ante-mortem-form-routing.module';
import { AnteMortemFormComponent } from './ante-mortem-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { LocaleCurrencyInputModule } from 'locale-currency-input';


@NgModule({
  declarations: [
    AnteMortemFormComponent
  ],
  imports: [
    CommonModule,
    AnteMortemFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    LocaleCurrencyInputModule
  ]
})
export class AnteMortemFormModule { }
