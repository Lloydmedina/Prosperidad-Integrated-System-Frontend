import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TenantProfilingListComponent } from './tenant-profiling-list.component';
import { TenantProfilingListRoutingModule } from './tenant-profiling-list-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';

@NgModule({
  imports: [
    CommonModule,
    TenantProfilingListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ],
  declarations: [TenantProfilingListComponent]
})
export class TenantProfilingListModule { }
