import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicalCertificateListComponent } from './medical-certificate-list.component';

const routes: Routes = [
  {
    path: "",
    component: MedicalCertificateListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicalCertificateListRoutingModule { }
