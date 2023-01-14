import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-lgu',
  templateUrl: './project-lgu.component.html',
  styleUrls: ['./project-lgu.component.css']
})
export class ProjectLguComponent implements OnInit {

  listURL = "/main/admin-console/project-lgu"
  addURL = "/main/admin-console/project-lgu/add-form"

  constructor() { }

  ngOnInit() {
  }

}
