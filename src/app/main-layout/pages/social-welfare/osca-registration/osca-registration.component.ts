import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-osca-registration',
  templateUrl: './osca-registration.component.html',
  styleUrls: ['./osca-registration.component.scss']
})
export class OscaRegistrationComponent implements OnInit {

  listURL = "/main/social-welfare/osca-registration"
  addURL = "/main/social-welfare/osca-registration/add-form"
  editURL = "/main/social-welfare/osca-registration/edit-form"
  printListURL = "/main/social-welfare/osca-registration/print-list"

  constructor() { }

  ngOnInit() {
  }

}
