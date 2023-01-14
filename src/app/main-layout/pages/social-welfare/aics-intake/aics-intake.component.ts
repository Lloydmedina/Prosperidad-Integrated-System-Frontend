import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aics-intake',
  templateUrl: './aics-intake.component.html',
  styleUrls: ['./aics-intake.component.scss']
})
export class AicsIntakeComponent implements OnInit {

  listURL = "/main/social-welfare/aics-intake"
  addURL = "/main/social-welfare/aics-intake/add-form"
  editURL = "/main/social-welfare/aics-intake/edit-form"
  printListURL = "/main/social-welfare/aics-intake/print-list"

  constructor() { }

  ngOnInit() {
  }

}
