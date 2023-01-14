import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-healthcard-business',
  templateUrl: './healthcard-business.component.html',
  styleUrls: ['./healthcard-business.component.scss']
})
export class HealthcardBusinessComponent implements OnInit {

  listURL = "/main/health/healthcard-business"
  addURL = "/main/health/healthcard-business/add-form"
  newURL = "/main/health/healthcard-business/add-form-new"
  printListURL = "/main/health/healthcard-business/healthcard-business-list-print"

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

}
