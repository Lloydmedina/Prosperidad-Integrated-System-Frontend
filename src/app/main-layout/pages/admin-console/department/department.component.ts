import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  listURL = "/main/admin-console/department"
  addURL = "/main/admin-console/department/add-form"
  printListURL = "/main/admin-console/department/print-list"
  constructor() { }

  ngOnInit() {
    
  }

}
