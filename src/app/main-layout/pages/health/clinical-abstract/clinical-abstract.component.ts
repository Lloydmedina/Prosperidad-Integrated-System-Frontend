import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clinical-abstract',
  templateUrl: './clinical-abstract.component.html',
  styleUrls: ['./clinical-abstract.component.scss']
})
export class ClinicalAbstractComponent implements OnInit {

  listURL = "/main/health/medical-abstract"
  addURL = "/main/health/medical-abstract/add-form"
  newURL = "/main/health/medical-abstract/add-form-new"
  printListURL = "/main/health/medical-abstract/medical-abstract-list-print"

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

}
