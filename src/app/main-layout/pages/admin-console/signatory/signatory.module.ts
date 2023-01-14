import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignatoryComponent } from './signatory.component';
import { SignatoryRoutingModule } from './signatory-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';

@NgModule({
  imports: [
    CommonModule,
    SignatoryRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ],
  declarations: [SignatoryComponent]
})
export class SignatoryModule { }
