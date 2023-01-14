import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentalApplicationFormComponent } from './rental-application-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { RentalApplicationFormRoutingModule } from './rental-application-form-routing.module';
import { MatCurrencyFormatModule } from 'mat-currency-format';

@NgModule({
  imports: [
    CommonModule,
    RentalApplicationFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    MatCurrencyFormatModule
  ],
  declarations: [RentalApplicationFormComponent]
})
export class RentalApplicationFormModule { }
