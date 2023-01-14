import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wcc-summary-intake',
  templateUrl: './wcc-summary-intake.component.html',
  styleUrls: ['./wcc-summary-intake.component.scss']
})
export class WccSummaryIntakeComponent implements OnInit {

  listURL = "/main/social-welfare/wcc-summary-intake"
  addURL = "/main/social-welfare/wcc-summary-intake/add-form"
  editURL = "/main/social-welfare/wcc-summary-intake/edit-form"
  printListURL = "/main/social-welfare/wcc-summary-intake/print-list"

  constructor() { }

  ngOnInit() {
  }

}
