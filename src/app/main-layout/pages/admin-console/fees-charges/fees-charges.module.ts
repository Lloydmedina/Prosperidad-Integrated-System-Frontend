import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeesChargesComponent } from './fees-charges.component';
import { FeesChargesRoutingModule } from './fees-charges-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';

@NgModule({
  imports: [
    CommonModule,
    FeesChargesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ],
  declarations: [FeesChargesComponent]
})
export class FeesChargesModule { }
