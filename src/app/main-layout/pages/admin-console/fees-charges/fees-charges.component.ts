import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fees-charges',
  templateUrl: './fees-charges.component.html',
  styleUrls: ['./fees-charges.component.css']
})
export class FeesChargesComponent implements OnInit {

  listURL = "/main/admin-console/fees-charges"
  addURL = "/main/admin-console/fees-charges/add-form"
  editURL = "/main/admin-console/fees-charges/edit-form"
  printListURL = "/main/admin-console/fees-charges/print-list"
  constructor() { }

  ngOnInit() {
  }

}
