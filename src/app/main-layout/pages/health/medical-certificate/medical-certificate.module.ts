import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicalCertificateRoutingModule } from './medical-certificate-routing.module';
import { MedicalCertificateComponent } from './medical-certificate.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    MedicalCertificateRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class MedicalCertificateModule { }
