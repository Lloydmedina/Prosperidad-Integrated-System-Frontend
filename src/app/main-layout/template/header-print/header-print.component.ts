import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectLguService } from 'src/core/services/project-lgu/project-lgu.service';

@Component({
  selector: 'app-header-print',
  templateUrl: './header-print.component.html',
  styleUrls: ['./header-print.component.scss']
})
export class HeaderPrintComponent implements OnInit {

  currentUser: any[] = [];
  currentProjectGUID: any;
  printData: any;
  firstlogo: any;
  secondlogo: any;
  data: any;

  constructor(
    private router: Router,
    private projectLGUServices: ProjectLguService
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('auth-user') || '{}');
    this.currentProjectGUID = this.currentUser[1].project.project_title_guid
    this.projectLGUServices.getById(this.currentProjectGUID).subscribe(data => {
      this.data = data?.report_config
      this.firstlogo = "data:image/png;base64," + data?.report_config.header_logo1
      this.secondlogo = "data:image/png;base64," + data?.report_config.header_logo2

      console.log(this.secondlogo)
    })
   }

  ngOnInit() {
  }

}
