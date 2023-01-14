import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyBrowserComponent } from './property-browser.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { MatCurrencyFormatModule } from 'mat-currency-format';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    MatCurrencyFormatModule
  ],
  exports: [PropertyBrowserComponent],
  declarations: [PropertyBrowserComponent]
})
export class PropertyBrowserModule { }
