import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delinquent',
  templateUrl: './delinquent.component.html',
  styleUrls: ['./delinquent.component.css']
})
export class DelinquentComponent implements OnInit {

  listURL = "/main/economic-enterprises/market/delinquent"
  addURL = "/main/economic-enterprises/market/delinquent/add-form"
  editURL = "/main/economic-enterprises/market/delinquent/edit-form"
  printListURL = "/main/economic-enterprises/market/delinquent/print"
  constructor() { }

  ngOnInit() {
  }

}
