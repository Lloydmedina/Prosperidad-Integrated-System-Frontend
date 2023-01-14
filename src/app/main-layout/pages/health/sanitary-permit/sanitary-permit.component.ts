import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sanitary-permit',
  templateUrl: './sanitary-permit.component.html',
  styleUrls: ['./sanitary-permit.component.scss']
})
export class SanitaryPermitComponent implements OnInit {

  listURL = "/main/health/sanitary-permit"
  addURL = "/main/health/sanitary-permit/add-form"
  printListURL = "/main/health/sanitary-permit/sanitary-permit-list-print"

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

}
