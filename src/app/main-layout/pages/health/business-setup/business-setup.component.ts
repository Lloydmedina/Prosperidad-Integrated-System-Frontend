import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-business-setup',
  templateUrl: './business-setup.component.html',
  styleUrls: ['./business-setup.component.scss']
})
export class BusinessSetupComponent implements OnInit {

  listURL = "/main/setup/business"
  addURL = "/main/setup/business/add-form"

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

}
