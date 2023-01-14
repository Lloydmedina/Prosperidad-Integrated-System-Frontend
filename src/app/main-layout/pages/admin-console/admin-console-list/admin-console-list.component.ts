import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-console-list',
  templateUrl: './admin-console-list.component.html',
  styleUrls: ['./admin-console-list.component.scss']
})
export class AdminConsoleListComponent implements OnInit {

  currentUser: any[] = [];
  body: any = [];
  listOfNav: any[] = [];
  listOfNavContent: any[] = [];
  currentURL: any;

  constructor(
    private router: Router
  ) {
    this.currentURL = router.url
  }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('auth-user') || '{}');
    this.listOfNav = new Array(this.currentUser[3].forms.length).fill(0).map((_, index) => {
      return {
        data: this.currentUser[3].forms[index],
        
      };
  });
    const found = this.listOfNav.filter(element => element.data.domain_path === this.currentURL);
    this.listOfNavContent = found[0].data.child
    console.log("Found", this.listOfNavContent)
  }

}
