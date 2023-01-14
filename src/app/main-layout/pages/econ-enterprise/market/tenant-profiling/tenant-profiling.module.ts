import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TenantProfilingComponent } from './tenant-profiling.component';
import { TenantProfilingRoutingModule } from './tenant-profiling-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ContentNavigationModule } from 'src/app/main-layout/template/content-navigation/content-navigation.module';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { MatCurrencyFormatModule } from 'mat-currency-format/lib/mat-currency-format.module';

@NgModule({
  imports: [
    CommonModule,
    TenantProfilingRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    ContentNavigationModule,
  ],
  declarations: [TenantProfilingComponent]
})
export class TenantProfilingModule { }
