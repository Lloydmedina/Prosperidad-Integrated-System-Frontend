import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wcc-discharge-form',
  templateUrl: './wcc-discharge-form.component.html',
  styleUrls: ['./wcc-discharge-form.component.scss']
})
export class WccDischargeFormComponent implements OnInit {
  listURL = "/main/social-welfare/wcc-discharge-form"
  addURL = "/main/social-welfare/wcc-discharge-form/add-form"
  editURL = "/main/social-welfare/wcc-discharge-form/edit-form"
  printListURL = "/main/social-welfare/wcc-discharge-form/list-print"

  constructor() { }

  ngOnInit() {
  }

}
