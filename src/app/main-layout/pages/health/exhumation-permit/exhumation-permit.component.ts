import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exhumation-permit',
  templateUrl: './exhumation-permit.component.html',
  styleUrls: ['./exhumation-permit.component.scss']
})
export class ExhumationPermitComponent implements OnInit {

  listURL = "/main/health/exhumation-permit"
  addURL = "/main/health/exhumation-permit/add-form"
  newURL = "/main/health/exhumation-permit/add-form"
  printListURL = "/main/health/exhumation-permit/exhumation-permit-list-print"

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
}
