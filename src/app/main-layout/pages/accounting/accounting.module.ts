import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountingComponent } from './accounting.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { AccountingRoutingModule } from './accounting-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AccountingRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ],
  declarations: [AccountingComponent]
})
export class AccountingModule { }
