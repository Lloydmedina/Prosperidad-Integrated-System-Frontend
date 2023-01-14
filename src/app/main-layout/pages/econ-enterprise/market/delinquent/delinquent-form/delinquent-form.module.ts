import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DelinquentFormComponent } from './delinquent-form.component';
import { DelinquentFormRoutingModule } from './delinquent-form-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCurrencyFormatModule } from 'mat-currency-format';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';

@NgModule({
  imports: [
    CommonModule,
    DelinquentFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    MatCurrencyFormatModule
  ],
  declarations: [DelinquentFormComponent]
})
export class DelinquentFormModule { }
