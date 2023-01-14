import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  listURL = "/main/setup/company-setup"
  addURL = "/main/setup/company-setup/add-form"

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

}
