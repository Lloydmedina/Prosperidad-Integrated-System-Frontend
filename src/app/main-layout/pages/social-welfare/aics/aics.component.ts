import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aics',
  templateUrl: './aics.component.html',
  styleUrls: ['./aics.component.scss']
})
export class AicsComponent implements OnInit {

  listURL = "/main/social-welfare/aics-registration"
  addURL = "/main/social-welfare/aics-registration/add-form"
  editURL = "/main/social-welfare/aics-registration/edit-form"
  printListURL = "/main/social-welfare/aics-registration/print-list"

  constructor() { }

  ngOnInit() {
  }

}
