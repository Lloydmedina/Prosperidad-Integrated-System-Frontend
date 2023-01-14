import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountTitleListComponent } from './account-title-list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { AccountTitleListRoutingModule } from './account-title-list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AccountTitleListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
  ],
  declarations: [AccountTitleListComponent]
})
export class AccountTitleListModule { }
