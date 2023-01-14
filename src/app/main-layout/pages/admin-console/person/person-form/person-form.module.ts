import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonFormRoutingModule } from './person-form-routing.module';
import { PersonFormComponent } from './person-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { NgxMaskModule } from 'ngx-mask';


@NgModule({
  declarations: [
    PersonFormComponent
  ],
  imports: [
    CommonModule,
    PersonFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    NgxMaskModule.forRoot()
  ]
})
export class PersonFormModule { }
