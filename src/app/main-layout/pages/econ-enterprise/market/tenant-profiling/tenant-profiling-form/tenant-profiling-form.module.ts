import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TenantProfilingFormComponent } from './tenant-profiling-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { TenantProfilingFormRoutingModule } from './tenant-profiling-form-routing.module';
import { BusinessBrowseModule } from 'src/app/main-layout/template/business-browse/business-browse.module';
import { NgxMaskModule } from 'ngx-mask';
import { PropertyBrowserModule } from 'src/app/main-layout/template/property-browser/property-browser.module';
import { MatCurrencyFormatModule } from 'mat-currency-format';
import { RentalApplicationBrowseModule } from 'src/app/main-layout/template/rental-application-browse/rental-application-browse.module';

@NgModule({
  imports: [
    CommonModule,
    TenantProfilingFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    BusinessBrowseModule,
    PropertyBrowserModule,
    RentalApplicationBrowseModule,
    MatCurrencyFormatModule,
   NgxMaskModule.forRoot()
  ],
  declarations: [TenantProfilingFormComponent]
})
export class TenantProfilingFormModule { }
