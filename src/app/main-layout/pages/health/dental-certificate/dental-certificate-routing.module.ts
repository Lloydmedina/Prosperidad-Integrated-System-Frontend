import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DentalCertificateComponent } from './dental-certificate.component';

const routes: Routes = [
  {
    path: "",
    component: DentalCertificateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DentalCertificateRoutingModule { }
