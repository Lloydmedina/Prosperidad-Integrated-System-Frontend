import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AicsLetterFormRoutingModule } from './aics-letter-form-routing.module';
import { AicsLetterFormComponent } from './aics-letter-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    AicsLetterFormComponent
  ],
  imports: [
    CommonModule,
    AicsLetterFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class AicsLetterFormModule { }
