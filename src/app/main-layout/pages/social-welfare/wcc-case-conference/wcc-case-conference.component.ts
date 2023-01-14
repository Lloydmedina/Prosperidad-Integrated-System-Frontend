import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wcc-case-conference',
  templateUrl: './wcc-case-conference.component.html',
  styleUrls: ['./wcc-case-conference.component.scss']
})
export class WccCaseConferenceComponent implements OnInit {
  listURL = "/main/social-welfare/wcc-case-conference"
  addURL = "/main/social-welfare/wcc-case-conference/add-form"
  editURL = "/main/social-welfare/wcc-case-conference/edit-form"
  printListURL = "/main/social-welfare/wcc-case-conference/print-list"

  constructor() { }

  ngOnInit() {
  }

}
