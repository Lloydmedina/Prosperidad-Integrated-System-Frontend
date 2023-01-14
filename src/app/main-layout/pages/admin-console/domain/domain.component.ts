import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-domain',
  templateUrl: './domain.component.html',
  styleUrls: ['./domain.component.scss']
})
export class DomainComponent implements OnInit {

  listURL = "/main/admin-console/domain"
  addURL = "/main/admin-console/domain/add-form"

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

}
