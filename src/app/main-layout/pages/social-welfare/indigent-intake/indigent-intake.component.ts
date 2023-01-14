import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indigent-intake',
  templateUrl: './indigent-intake.component.html',
  styleUrls: ['./indigent-intake.component.scss']
})
export class IndigentIntakeComponent implements OnInit {

  listURL = "/main/social-welfare/indigent-intake"
  addURL = "/main/social-welfare/indigent-intake/add-form"
  editURL = "/main/social-welfare/indigent-intake/edit-form"
  printListURL = "/main/social-welfare/indigent-intake/print-list"

  constructor() { }

  ngOnInit() {
  }

}
