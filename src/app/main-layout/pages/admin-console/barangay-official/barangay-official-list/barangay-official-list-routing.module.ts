import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarangayOfficialListComponent } from './barangay-official-list.component';


const routes: Routes = [
  {
    path: "",
    component: BarangayOfficialListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BarangayOfficialListRoutingModule { }
