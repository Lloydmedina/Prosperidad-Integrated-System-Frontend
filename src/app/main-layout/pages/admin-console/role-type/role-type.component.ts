import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-role-type',
  templateUrl: './role-type.component.html',
  styleUrls: ['./role-type.component.scss']
})
export class RoleTypeComponent implements OnInit {

  listURL = "/main/admin-console/role-type"
  addURL = "/main/admin-console/role-type/add-form"

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

}
