import { Component, OnInit } from '@angular/core';
import { ScheduleOfFeesService } from 'src/core/services/schedule-of-fees/schedule-of-fees.service';

@Component({
  selector: 'app-schedule-of-fees',
  templateUrl: './schedule-of-fees.component.html',
  styleUrls: ['./schedule-of-fees.component.scss']
})
export class ScheduleOfFeesComponent implements OnInit {

  listURL = "/main/economic-enterprises/slaughterhouse/schedule-of-fees"
  addURL = "/main/economic-enterprises/slaughterhouse/schedule-of-fees/add-form"
  editURL = "/main/economic-enterprises/slaughterhouse/schedule-of-fees/edit-form"
  printListURL = "/main/economic-enterprises/slaughterhouse/schedule-of-fees/print-list"
  formSettings: any = []
  isLoaded = false
  constructor(private sofService: ScheduleOfFeesService) { }

  ngOnInit() {
    this.sofService.getScheduleOfFees(0).subscribe(data => {
      // this.formSettings = data[1]
      this.formSettings = false
      this.isLoaded = true
    })
  }

}
