import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectLguService } from 'src/core/services/project-lgu/project-lgu.service';

@Component({
  selector: 'app-footer-print',
  templateUrl: './footer-print.component.html',
  styleUrls: ['./footer-print.component.scss'],
  providers: [DatePipe]
})
export class FooterPrintComponent implements OnInit {
  printDate = new Date();
  currentUser: any[] = [];
  currentProjectGUID: any;
  printData: any;
  footer1: any;
  footer2: any;
  footer3: any;
  align: any;
  showLeft = false;
  showCenter = false;
  showRight = false;
  data: any;

  constructor(
    private router: Router,
    private projectLGUServices: ProjectLguService,
    private datePipe: DatePipe
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('auth-user') || '{}');
    this.currentProjectGUID = this.currentUser[1].project.project_title_guid
    
    this.projectLGUServices.getById(this.currentProjectGUID).subscribe(data => {
      this.data = data?.report_config
      this.align = data?.report_config.footer_align
      if (this.align == 'Left') {
        this.showLeft = true;
        this.showCenter = false;
        this.showRight = false;
      } else if (this.align == 'Center') {
        this.showLeft = false;
        this.showCenter = true;
        this.showRight = false;
      } else if (this.align == 'Right') {
        this.showLeft = false;
        this.showCenter = false;
        this.showRight = true;
      }
    })
   }

  ngOnInit() {
    
  }

}
