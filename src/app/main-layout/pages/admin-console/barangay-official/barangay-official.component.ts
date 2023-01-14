import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barangay-official',
  templateUrl: './barangay-official.component.html',
  styleUrls: ['./barangay-official.component.css']
})
export class BarangayOfficialComponent implements OnInit {


  listURL = "/main/admin-console/barangay-official"
  addURL = "/main/admin-console/barangay-official/add-form"
  printListURL = "/main/admin-console/barangay-official/print-list"
  constructor() { }

  ngOnInit() {
  }

}
