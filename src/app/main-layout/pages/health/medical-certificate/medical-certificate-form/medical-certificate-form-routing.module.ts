import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicalCertificateFormComponent } from './medical-certificate-form.component';

const routes: Routes = [
  {
    path: "",
    component: MedicalCertificateFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicalCertificateFormRoutingModule { }
