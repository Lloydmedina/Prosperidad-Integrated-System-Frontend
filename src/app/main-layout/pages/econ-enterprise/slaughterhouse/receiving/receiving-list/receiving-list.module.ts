import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReceivingListComponent } from './receiving-list.component';
import { ReceivingListRoutingModule } from './receiving-list-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';

@NgModule({
  imports: [
    CommonModule,
    ReceivingListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ],
  declarations: [ReceivingListComponent]
})
export class ReceivingListModule { }
