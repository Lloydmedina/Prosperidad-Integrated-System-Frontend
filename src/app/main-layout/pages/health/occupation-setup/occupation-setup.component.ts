import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-occupation-setup',
  templateUrl: './occupation-setup.component.html',
  styleUrls: ['./occupation-setup.component.scss']
})
export class OccupationSetupComponent implements OnInit {

  listURL = "/main/setup/occupation-setup"
  addURL = "/main/setup/occupation-setup/add-form"

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

}
