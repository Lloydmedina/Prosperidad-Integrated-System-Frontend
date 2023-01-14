import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wcc-incident-report',
  templateUrl: './wcc-incident-report.component.html',
  styleUrls: ['./wcc-incident-report.component.scss']
})
export class WccIncidentReportComponent implements OnInit {
  listURL = "/main/social-welfare/wcc-incident-report"
  addURL = "/main/social-welfare/wcc-incident-report/add-form"
  editURL = "/main/social-welfare/wcc-incident-report/edit-form"
  printListURL = "/main/social-welfare/wcc-incident-report/print-list"

  constructor() { }

  ngOnInit() {
  }

}
