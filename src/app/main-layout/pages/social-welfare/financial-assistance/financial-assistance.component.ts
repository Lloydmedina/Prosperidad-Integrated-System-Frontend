import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FinancialAssistanceService } from 'src/core/services/financial-assistance/financial-assistance.service';

@Component({
  selector: 'app-financial-assistance',
  templateUrl: './financial-assistance.component.html',
  styleUrls: ['./financial-assistance.component.scss']
})
export class FinancialAssistanceComponent implements OnInit {

  listURL = "/main/social-welfare/financial-assistance"
  addURL = "/main/social-welfare/financial-assistance/add-form"
  editURL = "/main/social-welfare/financial-assistance/edit-form"
  printListURL = "/main/social-welfare/financial-assistance/print-list"

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

}
