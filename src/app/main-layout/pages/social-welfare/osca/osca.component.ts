import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-osca',
  templateUrl: './osca.component.html',
  styleUrls: ['./osca.component.scss']
})
export class OscaComponent implements OnInit {

  listURL = "/main/social-welfare/osca-id"
  addURL = "/main/social-welfare/osca-id/add-form"
  editURL = "/main/social-welfare/osca-id/edit-form"
  printListURL = "/main/social-welfare/osca-id/print-list"

  constructor() { }

  ngOnInit() {
  }

}
