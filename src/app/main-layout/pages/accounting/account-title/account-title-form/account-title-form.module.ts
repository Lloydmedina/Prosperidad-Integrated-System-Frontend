import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { AccountTitleFormComponent } from './account-title-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { AccountTitleFormRoutingModule } from './account-title-form-routing.module';
import { MatCurrencyFormatModule } from 'mat-currency-format';

@NgModule({
  providers:[CurrencyPipe],
  imports: [
    CommonModule,
    AccountTitleFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    MatCurrencyFormatModule
  ],
  declarations: [AccountTitleFormComponent]
  
})
export class AccountTitleFormModule { }
