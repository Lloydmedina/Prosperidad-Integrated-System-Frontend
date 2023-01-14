import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReceivingFormComponent } from './receiving-form.component';
import { ReceivingFormRoutingModule } from './receiving-form-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';

@NgModule({
  imports: [
    CommonModule,
    ReceivingFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
  ],
  declarations: [ReceivingFormComponent]
})
export class ReceivingFormModule { }
