import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignatoryFormComponent } from './signatory-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { SignatoryFormRoutingModule } from './signatory-form-routing.module';

@NgModule({
  imports: [   
     CommonModule,
    SignatoryFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ],
  declarations: [SignatoryFormComponent]
})
export class SignatoryFormModule { }
