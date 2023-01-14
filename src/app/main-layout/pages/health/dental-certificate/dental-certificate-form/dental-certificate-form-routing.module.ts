import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DentalCertificateFormComponent } from './dental-certificate-form.component';

const routes: Routes = [
  {
    path: "",
    component: DentalCertificateFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DentalCertificateFormRoutingModule { }
