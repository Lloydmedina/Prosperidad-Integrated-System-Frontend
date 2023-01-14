import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  listURL = "/main/human-resource/employee"
  addURL = "/main/human-resource/employee/add-form"
  editURL = "/main/human-resource/employee/edit-form"
  printListURL = "/main/human-resource/employee/print-list"
  constructor() { }

  ngOnInit() {
  }

}
