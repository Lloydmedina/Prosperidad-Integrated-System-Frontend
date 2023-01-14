import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarangayOfficialComponent } from './barangay-official.component';
import { BarangayOfficialRoutingModule } from './barangay-official-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';

@NgModule({
  imports: [
    CommonModule,
    BarangayOfficialRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ],
  declarations: [BarangayOfficialComponent]
})
export class BarangayOfficialModule { }
