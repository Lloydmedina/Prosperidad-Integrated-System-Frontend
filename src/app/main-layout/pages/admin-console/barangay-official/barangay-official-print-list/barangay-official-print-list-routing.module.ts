import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarangayOfficialPrintListComponent } from './barangay-official-print-list.component';


const routes: Routes = [
  {
    path: "",
    component: BarangayOfficialPrintListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BarangayOfficialPrintListRoutingModule { }
