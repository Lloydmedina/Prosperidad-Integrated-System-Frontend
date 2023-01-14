import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medical-certificate',
  templateUrl: './medical-certificate.component.html',
  styleUrls: ['./medical-certificate.component.scss']
})
export class MedicalCertificateComponent implements OnInit {

  listURL = "/main/health/medical-certificate"
  addURL = "/main/health/medical-certificate/add-form"
  newURL = "/main/health/medical-certificate/add-form-new"
  printListURL = "/main/health/medical-certificate/medical-certificate-list-print"

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

}
