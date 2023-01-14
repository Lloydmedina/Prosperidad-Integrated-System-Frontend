import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarangayOfficialFormComponent } from './barangay-official-form.component';


const routes: Routes = [
  {
    path: "",
    component: BarangayOfficialFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BarangayOfficialFormRoutingModule { }
