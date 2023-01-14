import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-examination-setup',
  templateUrl: './examination-setup.component.html',
  styleUrls: ['./examination-setup.component.scss']
})
export class ExaminationSetupComponent implements OnInit {

  listURL = "/main/setup/examination-setup"
  addURL = "/main/setup/examination-setup/add-form"

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

}
