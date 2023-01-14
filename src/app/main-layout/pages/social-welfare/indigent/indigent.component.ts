import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indigent',
  templateUrl: './indigent.component.html',
  styleUrls: ['./indigent.component.scss']
})
export class IndigentComponent implements OnInit {

  listURL = "/main/social-welfare/sc-indigent"
  addURL = ""
  editURL = "/main/social-welfare/sc-indigent/edit-form"
  printListURL = "/main/social-welfare/sc-indigent/print-list"

  constructor() { }

  ngOnInit() {
  }

}
