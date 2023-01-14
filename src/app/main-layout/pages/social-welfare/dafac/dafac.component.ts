import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dafac',
  templateUrl: './dafac.component.html',
  styleUrls: ['./dafac.component.scss']
})
export class DafacComponent implements OnInit {

  listURL = "/main/social-welfare/dafac-registration"
  addURL = "/main/social-welfare/dafac-registration/add-form"
  editURL = "/main/social-welfare/dafac-registration/edit-form"
  printListURL = "/main/social-welfare/dafac-registration/print-list"

  constructor() { }

  ngOnInit() {
  }

}
