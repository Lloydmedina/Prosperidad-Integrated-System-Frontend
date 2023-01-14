import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicalCertificateFormNewComponent } from './medical-certificate-form-new.component';

const routes: Routes = [

  {
    path : "",
    component : MedicalCertificateFormNewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicalCertificateFormNewRoutingModule { }
