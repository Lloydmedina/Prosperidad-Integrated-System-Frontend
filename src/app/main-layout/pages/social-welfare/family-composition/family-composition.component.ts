import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-family-composition',
  templateUrl: './family-composition.component.html',
  styleUrls: ['./family-composition.component.scss']
})
export class FamilyCompositionComponent implements OnInit {

  listURL = "/main/social-welfare/fc-registration"
  addURL = "/main/social-welfare/fc-registration/add-form"
  editURL = "/main/social-welfare/fc-registration/edit-form"
  printListURL = "/main/social-welfare/fc-registration/print-list"

  constructor() { }

  ngOnInit() {
  }

}
