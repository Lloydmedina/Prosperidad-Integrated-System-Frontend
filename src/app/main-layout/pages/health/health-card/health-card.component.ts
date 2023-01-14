import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-health-card',
  templateUrl: './health-card.component.html',
  styleUrls: ['./health-card.component.scss']
})
export class HealthCardComponent implements OnInit {

  listURL = "/main/health/health-card-individual"
  addURL = "/main/health/health-card-individual/add-form"
  newURL = "/main/health/health-card-individual/add-form-new"
  printListURL = "/main/health/health-card-individual/health-card-list-print"

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

}
