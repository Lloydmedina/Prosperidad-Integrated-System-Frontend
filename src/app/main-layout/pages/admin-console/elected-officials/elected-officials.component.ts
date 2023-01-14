import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-elected-officials',
  templateUrl: './elected-officials.component.html',
  styleUrls: ['./elected-officials.component.scss']
})
export class ElectedOfficialsComponent implements OnInit {

  constructor(private router: Router) { }


  listURL = "/main/admin-console/elected-officials"
  addURL = "/main/admin-console/elected-officials/add-form"

  ngOnInit() {
  }

}