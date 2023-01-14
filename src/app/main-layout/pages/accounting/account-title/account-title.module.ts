import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountTitleComponent } from './account-title.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { AccountTitleRoutingModule } from './account-title-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AccountTitleRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ],
  declarations: [AccountTitleComponent]
})
export class AccountTitleModule { }
