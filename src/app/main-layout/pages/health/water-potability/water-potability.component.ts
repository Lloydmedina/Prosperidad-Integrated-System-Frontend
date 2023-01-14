import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-water-potability',
  templateUrl: './water-potability.component.html',
  styleUrls: ['./water-potability.component.scss']
})
export class WaterPotabilityComponent implements OnInit {


  listURL = "/main/health/water-potability"
  addURL = "/main/health/water-potability/add-form"
  newURL = "/main/health/water-potability/add-form-new"
  printListURL = "/main/health/water-potability/water-potability-list-print"

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

}
