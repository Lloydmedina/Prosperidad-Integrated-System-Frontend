import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wcc-intervention-undertaken',
  templateUrl: './wcc-intervention-undertaken.component.html',
  styleUrls: ['./wcc-intervention-undertaken.component.scss']
})
export class WccInterventionUndertakenComponent implements OnInit {
  listURL = "/main/social-welfare/wcc-intervention-undertaken"
  addURL = "/main/social-welfare/wcc-intervention-undertaken/add-form"
  editURL = "/main/social-welfare/wcc-intervention-undertaken/edit-form"
  printListURL = "/main/social-welfare/wcc-intervention-undertaken/print-list"
  constructor() { }

  ngOnInit() {
  }

}
