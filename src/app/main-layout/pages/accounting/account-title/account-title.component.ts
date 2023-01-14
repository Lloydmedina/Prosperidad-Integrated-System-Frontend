import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-title',
  templateUrl: './account-title.component.html',
  styleUrls: ['./account-title.component.scss']
})
export class AccountTitleComponent implements OnInit {

  listURL = "/main/accounting/account-title"
  addURL = "/main/accounting/account-title/add-form"
  editURL = "/main/accounting/account-title/edit-form"
  printListURL = "/main/accounting/account-title/print-list"
  constructor() { }

  ngOnInit() {
  }

}
