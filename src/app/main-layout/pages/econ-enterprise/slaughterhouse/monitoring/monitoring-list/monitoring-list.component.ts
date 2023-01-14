import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { MonitoringService } from 'src/core/services/monitoring/monitoring.service';
import { PathsegmentService } from 'src/core/services/pathsegment/pathsegment.service';

@Component({
  selector: 'app-monitoring-list',
  templateUrl: './monitoring-list.component.html',
  styleUrls: ['./monitoring-list.component.scss']
})
export class MonitoringListComponent implements OnInit {

  listOfData: any[] = [];
  listOfDataDetails: any[] = [];
  isLoading = true;
  expandSet = new Set<number>();
  expandSetDetails = new Set<number>();
  path: any;

  constructor(
    private router: Router,
    private modal: NzModalService,
    private monitoringService: MonitoringService,
    private notification: NzNotificationService,
    private pathService: PathsegmentService
  ) { }

  ngOnInit() {
    this.path = this.pathService.getPath()
    this.monitoringService.getMonitoring(0).subscribe(async data => {
      this.listOfData = data[0];
      this.isLoading = false;
      // console.log("asdasd", data)
    })
  }

  edit(id: any) {
    this.router.navigate(["/" + this.path[0] + "/" + this.path[1] + "/" + this.path[2] + "/" + this.path[3] + "/edit-form/" + id])
  }

}
