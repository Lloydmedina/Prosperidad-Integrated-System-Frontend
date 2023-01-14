import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signatory',
  templateUrl: './signatory.component.html',
  styleUrls: ['./signatory.component.css']
})
export class SignatoryComponent implements OnInit {

  constructor(private router: Router) { }


  listURL = "/main/admin-console/signatory"
  addURL = "/main/admin-console/signatory/add-form"

  ngOnInit() {
  }

}
