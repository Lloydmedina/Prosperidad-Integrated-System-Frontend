import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wcc-registration',
  templateUrl: './wcc-registration.component.html',
  styleUrls: ['./wcc-registration.component.scss']
})
export class WccRegistrationComponent implements OnInit {
  listURL = "/main/social-welfare/wcc-registration"
  addURL = "/main/social-welfare/wcc-registration/add-form"
  editURL = "/main/social-welfare/wcc-registration/edit-form"
  printListURL = "/main/social-welfare/wcc-registration/print-list"

  constructor() { }

  ngOnInit() {
  }

}
