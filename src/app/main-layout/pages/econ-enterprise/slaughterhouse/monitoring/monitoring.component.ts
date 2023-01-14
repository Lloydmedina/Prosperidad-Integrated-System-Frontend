import { Component, OnInit } from '@angular/core';
import { MonitoringService } from 'src/core/services/monitoring/monitoring.service';

@Component({
  selector: 'app-monitoring',
  templateUrl: './monitoring.component.html',
  styleUrls: ['./monitoring.component.scss']
})
export class MonitoringComponent implements OnInit {

  listURL = "/main/economic-enterprises/slaughterhouse/monitoring"
  addURL = "/main/economic-enterprises/slaughterhouse/monitoring/add-form"
  editURL = "/main/economic-enterprises/slaughterhouse/monitoring/edit-form"
  printListURL = "/main/economic-enterprises/slaughterhouse/monitoring/print-list"
  formSettings: any = []
  isLoaded = false
  constructor(private monitoringService: MonitoringService) { }

  ngOnInit() {
    this.monitoringService.getMonitoring(0).subscribe(data => {
      this.formSettings = data[1]
      this.isLoaded = true
    })
  }

}
