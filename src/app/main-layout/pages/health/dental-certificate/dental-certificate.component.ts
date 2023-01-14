import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dental-certificate',
  templateUrl: './dental-certificate.component.html',
  styleUrls: ['./dental-certificate.component.scss']
})
export class DentalCertificateComponent implements OnInit {

  listURL = "/main/health/dental-certificate"
  addURL = "/main/health/dental-certificate/add-form"
  newURL = "/main/health/dental-certificate/add-form-new"
  printListURL = "/main/health/dental-certificate/dental-certificate-list-print"

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

}
