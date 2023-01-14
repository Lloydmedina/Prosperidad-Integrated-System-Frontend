import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarangayOfficialFormComponent } from './barangay-official-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { BarangayOfficialFormRoutingModule } from './barangay-official-form-routing.module';
import { BarangayOfficialListModule } from '../barangay-official-list/barangay-official-list.module';

@NgModule({
  imports: [
    CommonModule,
    BarangayOfficialFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    BarangayOfficialListModule,
  ],
  declarations: [BarangayOfficialFormComponent]
})
export class BarangayOfficialFormModule { }
