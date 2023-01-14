import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wcc-acknowledgement',
  templateUrl: './wcc-acknowledgement.component.html',
  styleUrls: ['./wcc-acknowledgement.component.scss']
})
export class WccAcknowledgementComponent implements OnInit {
  listURL = "/main/social-welfare/wcc-acknowledgement"
  addURL = "/main/social-welfare/wcc-acknowledgement/add-form"
  editURL = "/main/social-welfare/wcc-acknowledgement/edit-form"
  printListURL = "/main/social-welfare/wcc-acknowledgement/list-print"
  constructor() { }

  ngOnInit() {
  }

}
