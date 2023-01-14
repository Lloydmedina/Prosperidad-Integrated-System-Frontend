import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilitiesSetupFormComponent } from './utilities-setup-form.component';
import { UtilitiesSetupFormRoutingModule } from './utilities-setup-form-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCurrencyFormatModule } from 'mat-currency-format';
import { NgxMaskModule } from 'ngx-mask';
import { PropertyBrowserModule } from 'src/app/main-layout/template/property-browser/property-browser.module';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';

@NgModule({
  imports: [
    CommonModule,
    UtilitiesSetupFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    PropertyBrowserModule,
    MatCurrencyFormatModule,
   NgxMaskModule.forRoot()
  ],
  declarations: [UtilitiesSetupFormComponent]
})
export class UtilitiesSetupFormModule { }
