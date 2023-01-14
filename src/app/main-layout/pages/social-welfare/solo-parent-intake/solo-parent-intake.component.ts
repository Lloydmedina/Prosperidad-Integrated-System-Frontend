import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solo-parent-intake',
  templateUrl: './solo-parent-intake.component.html',
  styleUrls: ['./solo-parent-intake.component.scss']
})
export class SoloParentIntakeComponent implements OnInit {

  listURL = "/main/social-welfare/solo-parent-intake"
  addURL = "/main/social-welfare/solo-parent-intake/add-form"
  editURL = "/main/social-welfare/solo-parent-intake/edit-form"
  printListURL = "/main/social-welfare/solo-parent-intake/print-list"

  constructor() { }

  ngOnInit() {
  }

}
