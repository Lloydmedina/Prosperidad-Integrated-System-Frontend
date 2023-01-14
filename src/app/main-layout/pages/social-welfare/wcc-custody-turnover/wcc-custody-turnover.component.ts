import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wcc-custody-turnover',
  templateUrl: './wcc-custody-turnover.component.html',
  styleUrls: ['./wcc-custody-turnover.component.scss']
})
export class WccCustodyTurnoverComponent implements OnInit {
  listURL = "/main/social-welfare/wcc-custody-turnover"
  addURL = "/main/social-welfare/wcc-custody-turnover/add-form"
  editURL = "/main/social-welfare/wcc-custody-turnover/edit-form"
  printListURL = "/main/social-welfare/wcc-custody-turnover/list-print"
  constructor() { }

  ngOnInit() {
  }

}
