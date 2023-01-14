import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-intake',
  templateUrl: './child-intake.component.html',
  styleUrls: ['./child-intake.component.scss']
})
export class ChildIntakeComponent implements OnInit {

  listURL = "/main/social-welfare/child-info-intake"
  addURL = "/main/social-welfare/child-info-intake/add-form"
  editURL = "/main/social-welfare/child-info-intake/edit-form"
  printListURL = "/main/social-welfare/child-info-intake/print-list"

  constructor() { }

  ngOnInit() {
  }

}
