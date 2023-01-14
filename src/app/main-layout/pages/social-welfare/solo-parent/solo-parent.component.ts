import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solo-parent',
  templateUrl: './solo-parent.component.html',
  styleUrls: ['./solo-parent.component.scss']
})
export class SoloParentComponent implements OnInit {

  listURL = "/main/social-welfare/solo-parent-registration"
  addURL = "/main/social-welfare/solo-parent-registration/add-form"
  editURL = "/main/social-welfare/solo-parent-registration/edit-form"
  printListURL = "/main/social-welfare/solo-parent-registration/print-list"

  constructor() { }

  ngOnInit() {
  }

}
