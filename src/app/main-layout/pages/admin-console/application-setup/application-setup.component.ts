import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/core/services/user/user.service';

@Component({
  selector: 'app-application-setup',
  templateUrl: './application-setup.component.html',
  styleUrls: ['./application-setup.component.scss']
})
export class ApplicationSetupComponent implements OnInit {

  listURL = "/main/admin-console/form"
  addURL = "/main/admin-console/form/add-form"

  constructor(
    private router: Router
  ) { }
  ngOnInit() {

  }

}
