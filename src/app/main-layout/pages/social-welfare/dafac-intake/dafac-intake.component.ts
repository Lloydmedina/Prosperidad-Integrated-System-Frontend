import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dafac-intake',
  templateUrl: './dafac-intake.component.html',
  styleUrls: ['./dafac-intake.component.scss']
})
export class DafacIntakeComponent implements OnInit {

  listURL = "/main/social-welfare/dafac-intake"
  addURL = "/main/social-welfare/dafac-intake/add-form"
  editURL = "/main/social-welfare/dafac-intake/edit-form"
  printListURL = "/main/social-welfare/dafac-intake/print-list"
  
  constructor() { }

  ngOnInit() {
  }

}
