import { Component, OnInit } from '@angular/core';
import { Slaughterhouse_recordsService } from 'src/core/services/slaughterhouse_records/slaughterhouse_records.service';

@Component({
  selector: 'app-slaughterhouse-records',
  templateUrl: './slaughterhouse-records.component.html',
  styleUrls: ['./slaughterhouse-records.component.scss']
})
export class SlaughterhouseRecordsComponent implements OnInit {

  listURL = "/main/economic-enterprises/slaughterhouse/slaughterhouse-records"
  addURL = "/main/economic-enterprises/slaughterhouse/slaughterhouse-records/add-form"
  editURL = "/main/economic-enterprises/slaughterhouse/slaughterhouse-records/edit-form"
  printListURL = "/main/economic-enterprises/slaughterhouse/slaughterhouse-records/print-list"
  formSettings: any = []
  isLoaded = false
  constructor(private srService: Slaughterhouse_recordsService) { }

  ngOnInit() {
    this.srService.getList(0).subscribe(data => {
      // this.formSettings = data[1]
      this.formSettings = false;
      this.isLoaded = true
    })
  }

}
