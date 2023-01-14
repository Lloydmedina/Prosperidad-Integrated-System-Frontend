import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-general-intake',
  templateUrl: './general-intake.component.html',
  styleUrls: ['./general-intake.component.scss']
})
export class GeneralIntakeComponent implements OnInit {

  listURL = "/main/social-welfare/fc-intake"
  addURL = "/main/social-welfare/fc-intake/add-form"
  editURL = "/main/social-welfare/fc-intake/edit-form"
  printListURL = "/main/social-welfare/fc-intake/print-list"

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

}
