import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeesChargesListComponent } from './fees-charges-list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { FeesChargesListRoutingModule } from './fees-charges-list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FeesChargesListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ],
  declarations: [FeesChargesListComponent]
})
export class FeesChargesListModule { }
