import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { OscaRegistrationService } from 'src/core/services/osca-registration/osca-registration.service';
import { PathsegmentService } from 'src/core/services/pathsegment/pathsegment.service';

@Component({
  selector: 'app-indigent-list-template',
  templateUrl: './indigent-list-template.component.html',
  styleUrls: ['./indigent-list-template.component.scss']
})
export class IndigentListTemplateComponent implements OnInit {

  listOfData: any[] = [];
  listOfFilter: any[] = [];
  isLoading = true;
  expandSet = new Set<number>();
  searchData: any;
  path: any;

  constructor(
    private router: Router,
    private modal: NzModalService,
    private oscaRegistrationService: OscaRegistrationService,
    private notification: NzNotificationService,
    private pathService: PathsegmentService,
    private drawerService: NzDrawerService
  ) { }

  ngOnInit() {
    this.path = this.pathService.getPath()

    if (this.path[2] == 'indigent-registration') {
      this.oscaRegistrationService.getOscaRegistration().subscribe(async data => {
        this.listOfFilter = data[0];
        console.log("FILTER", this.listOfFilter)
      })
    }
  }

  onExpandChange(id: number, checked: boolean): void {
    if (checked) {
      this.expandSet.add(id);
    } else {
      this.expandSet.delete(id);
    }
  }

  clear(value: any) {
    this.isLoading = true
    if (value) {
      this.isLoading = false
      this.listOfData = value
    }
  }

  select(value: boolean) {
    this.isLoading = true
    if (value == true) {
      this.oscaRegistrationService.getOscaRegistration().subscribe(data => {
        this.listOfData = data[0];
        this.isLoading = false;
      })
    } else {
      this.oscaRegistrationService.getAllOscaRegistration().subscribe(async data => {
        this.listOfData = data[0];
        this.isLoading = false;
      })
    }
  }
  showAlert = false;
  fullName: any;
  viewGUID: any;

}
