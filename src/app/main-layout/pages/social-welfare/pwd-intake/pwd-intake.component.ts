import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pwd-intake',
  templateUrl: './pwd-intake.component.html',
  styleUrls: ['./pwd-intake.component.scss']
})
export class PwdIntakeComponent implements OnInit {

  listURL = "/main/social-welfare/pwd-intake"
  addURL = "/main/social-welfare/pwd-intake/add-form"
  editURL = "/main/social-welfare/pwd-intake/edit-form"
  printListURL = "/main/social-welfare/pwd-intake/print-list"

  constructor() { }

  ngOnInit() {
  }

}
