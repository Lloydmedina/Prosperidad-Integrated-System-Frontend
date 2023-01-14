import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-osca-intake',
  templateUrl: './osca-intake.component.html',
  styleUrls: ['./osca-intake.component.scss']
})
export class OscaIntakeComponent implements OnInit {

  listURL = "/main/social-welfare/osca-intake"
  addURL = "/main/social-welfare/osca-intake/add-form"
  editURL = "/main/social-welfare/osca-intake/edit-form"
  printListURL = "/main/social-welfare/osca-intake/print-list"

  constructor() { }

  ngOnInit() {
  }

}
