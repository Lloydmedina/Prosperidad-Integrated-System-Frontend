import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evacuation-center',
  templateUrl: './evacuation-center.component.html',
  styleUrls: ['./evacuation-center.component.scss']
})
export class EvacuationCenterComponent implements OnInit {

  listURL = "/main/social-welfare/evacuation-setup"
  addURL = "/main/social-welfare/evacuation-setup/add-form"
  editURL = "/main/social-welfare/evacuation-setup/edit-form"
  printListURL = "/main/social-welfare/evacuation-setup/print-list"

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

}
