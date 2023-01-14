import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent implements OnInit {

  listURL = "/main/admin-console/business"
  addURL = "/main/admin-console/business/add-form"
  editURL = "/main/admin-console/business/edit-form"
  printListURL = "/main/admin-console/business/print-list"
  constructor() { }

  ngOnInit() {
  }

}
