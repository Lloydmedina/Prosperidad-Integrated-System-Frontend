import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReceivingBrowseComponent } from './receiving-browse.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCurrencyFormatModule } from 'mat-currency-format';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { NzTableModule } from 'ng-zorro-antd/table';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgZorroModule,
    FormsModule,
    MatCurrencyFormatModule
  ],
  exports: [ReceivingBrowseComponent],
  declarations: [ReceivingBrowseComponent]
})
export class ReceivingBrowseModule { }
