import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-executive-dashboard',
  templateUrl: './executive-dashboard.component.html',
  styleUrls: ['./executive-dashboard.component.scss']
})
export class ExecutiveDashboardComponent implements OnInit {

  deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;

  constructor(
    private router: Router
  ) { }

  ngOnInit(

  ) {
  }

}
