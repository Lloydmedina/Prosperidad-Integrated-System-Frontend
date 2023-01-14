import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarangayOfficialComponent } from './barangay-official.component';

const routes: Routes = [
  {
    path: "",
    component: BarangayOfficialComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BarangayOfficialRoutingModule { }
