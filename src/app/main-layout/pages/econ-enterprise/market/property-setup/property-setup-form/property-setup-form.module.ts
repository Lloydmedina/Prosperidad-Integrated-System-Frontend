import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertySetupFormComponent } from './property-setup-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { PropertySetupFormRoutingModule } from './property-setup-form-routing.module';
import { MatCurrencyFormatModule } from 'mat-currency-format';

@NgModule({
  imports: [
    CommonModule,
    PropertySetupFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    MatCurrencyFormatModule
  ],
  declarations: [PropertySetupFormComponent]
})
export class PropertySetupFormModule { }
