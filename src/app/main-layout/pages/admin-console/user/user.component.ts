import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  listURL = "/main/admin-console/user"
  addURL = "/main/admin-console/user/add-form"
  editURL = "/main/admin-console/user/edit-form"

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

}
