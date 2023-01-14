import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadaver-transfer',
  templateUrl: './cadaver-transfer.component.html',
  styleUrls: ['./cadaver-transfer.component.scss']
})
export class CadaverTransferComponent implements OnInit {


  listURL = "/main/health/cadaver-transfer"
  addURL = "/main/health/cadaver-transfer/add-form"
  newURL = "/main/health/cadaver-transfer/add-form-new"
  printListURL = "/main/health/cadaver-transfer/cadaver-transfer-list-print"

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

}
