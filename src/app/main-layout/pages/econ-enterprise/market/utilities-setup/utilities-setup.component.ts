import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-utilities-setup',
  templateUrl: './utilities-setup.component.html',
  styleUrls: ['./utilities-setup.component.scss']
})
export class UtilitiesSetupComponent implements OnInit {


  listURL = "/main/economic-enterprises/market/utilities-setup/"
  addURL = "/main/economic-enterprises/market/utilities-setup/add-form"
  editURL = "/main/economic-enterprises/market/utilities-setup/edit-form"
  printListURL = "/main/economic-enterprises/market/utilities-setup/print-list"
  formSettings = {
    allow_print: "zxcasd"
  }
  constructor() { }

  ngOnInit() {
  }

}
