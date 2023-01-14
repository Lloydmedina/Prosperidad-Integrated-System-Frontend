import { Component, OnInit } from '@angular/core';
import { WaitlistedReportService } from 'src/core/services/waitlisted-report/waitlisted-report.service';

@Component({
  selector: 'app-waitlisted-report',
  templateUrl: './waitlisted-report.component.html',
  styleUrls: ['./waitlisted-report.component.scss']
})
export class WaitlistedReportComponent implements OnInit {

  isLoaded = false

  listURL = "/main/social-welfare/waitlisted-report"
  addURL = "/main/social-welfare/waitlisted-report/add-form"
  editURL = "/main/social-welfare/waitlisted-report/edit-form"
  printListURL = "/main/social-welfare/waitlisted-report/print-list"

  formSettings: any = []

  constructor(
    private waitlistedReportService: WaitlistedReportService
  ) { }

  ngOnInit() {
    this.waitlistedReportService.getWaitlistedReport().subscribe(data => {
      this.formSettings = data[1]

      this.isLoaded = true
    })
  }

}
