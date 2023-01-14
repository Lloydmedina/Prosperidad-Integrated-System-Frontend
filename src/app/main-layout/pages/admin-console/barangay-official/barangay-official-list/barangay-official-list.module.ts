import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarangayOfficialListComponent } from './barangay-official-list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { BarangayOfficialListRoutingModule } from './barangay-official-list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    BarangayOfficialListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    DateFilterModule
  ],
  declarations: [BarangayOfficialListComponent],
  exports: [BarangayOfficialListComponent]
})
export class BarangayOfficialListModule { }
