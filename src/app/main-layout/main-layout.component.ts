import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PathsegmentService } from 'src/core/services/pathsegment/pathsegment.service';
import { UserService } from 'src/core/services/user/user.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  toggle: boolean = false;
  biglogo: boolean = true
  smalllogo: boolean = false
  theme: any;
  isCollapsed = false;

  currentUser: any[] = [];
  listOfNav: any[] = [];

  userValue: any;
  title: any;
  subtitle: any;
  path: any;
  routerLinkData: any;

  constructor(
    private router: Router,
    private userService: UserService,
    private pathService: PathsegmentService
  ) { }

  ngOnInit() {
    this.path = this.pathService.getPath();
    this.theme = true
    this.currentUser = JSON.parse(localStorage.getItem('auth-user') || '{}');
    
    this.userValue = this.currentUser[0].users;

    this.listOfNav = new Array(this.currentUser[3].forms.length).fill(0).map((_, index) => {
        return {
          data: this.currentUser[3].forms[index],
          
        };
    });
    // console.log("list", this.path.length)
    this.title = "HOME"

    if (this.currentUser[0].users.domain_name == 'Social Welfare and Development') {
      this.routerLinkData = '/main/mswd-dashboard'
      if (this.path.length < 3) {
        this.router.navigate(['/main/mswd-dashboard'])
      }
    } else if (this.currentUser[0].users.domain_name == 'Admin Console') {
      this.routerLinkData = '/main/executive-dashboard'
      this.router.navigate(['/main/executive-dashboard'])
    }
  }

  getActiveNode(value: any) {
    this.title = value.data.form_name
  }

  switch(event: Event) {
    this.theme = event
  }

  toggleChange(event: boolean) {
    if(event == true) {
      this.smalllogo = true
      this.biglogo = false
      this.toggle = true
    } else {
      this.smalllogo = false
      this.biglogo = true
      this.toggle = false
    }
  }

  getTitle(title: any, subtitle: any) {
    this.title = title
    this.subtitle = subtitle
  }

  // openMap: { [name: string]: boolean } = {
  //   sub1: true,
  //   sub2: false,
  //   sub3: false
  // };

  // openHandler(value: string): void {
  //   for (const key in this.openMap) {
  //     if (key !== value) {
  //       this.openMap[key] = false;
  //     }
  //   }
  // }

}



