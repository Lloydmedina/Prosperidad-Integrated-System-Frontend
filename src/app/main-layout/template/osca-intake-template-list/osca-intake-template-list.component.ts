import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NzDrawerRef, NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { OscaIntakeService } from 'src/core/services/osca-intake/osca-intake.service';
import { PathsegmentService } from 'src/core/services/pathsegment/pathsegment.service';
import { WaitlistedReportService } from 'src/core/services/waitlisted-report/waitlisted-report.service';

@Component({
  selector: 'app-osca-intake-template-list',
  templateUrl: './osca-intake-template-list.component.html',
  styleUrls: ['./osca-intake-template-list.component.scss']
})
export class OscaIntakeTemplateListComponent implements OnInit {

  listOfFilter: any[] = [];
  listOfIntake: any[] = [];
  isLoading = true;
  expandSet = new Set<number>();
  searchData: any;
  path: any;

  constructor(
    private router: Router,
    private modal: NzModalService,
    private oscaIntakeService: OscaIntakeService,
    private waitlistedReportService: WaitlistedReportService,
    private notification: NzNotificationService,
    private pathService: PathsegmentService,
    private drawerService: NzDrawerService
  ) { }

  ngOnInit() {
    this.path = this.pathService.getPath()

    if (this.path[2] == 'waitlisted-report') {
      this.oscaIntakeService.getOscaIntake().subscribe(async data => {
        this.isLoading = false;
        this.listOfIntake = data[0];
      })
      this.waitlistedReportService.getWaitlistedReport().subscribe(async data => {
        this.isLoading = false;
        this.listOfFilter = data[0];
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

  showAlert = false;
  fullName: any;
  viewGUID: any;

  triggerSelect(person_guid: any, value: any) {
    if (this.path[2] == "waitlisted-report") {
      var familyHeadRecord = this.listOfFilter
      familyHeadRecord = this.listOfFilter.filter((data: any) => 
      data.osca_intake_guid == value.osca_intake_guid)
      if (!familyHeadRecord.length) {
        this.router.navigate(["/main/social-welfare/waitlisted-report/add-form/waitlisted-report-registration-form/" + value.osca_intake_guid])
      } else {
        this.showAlert = true;
        this.fullName = familyHeadRecord[0].first_name + ' ' + familyHeadRecord[0].middle_name + ' ' + familyHeadRecord[0].last_name
        this.viewGUID = familyHeadRecord[0].osca_intake_guid
        console.log("SURPRISE MADAFAKA", familyHeadRecord)
      }
    }
  }

  @ViewChild('drawerTemplate', { static: false }) drawerTemplate?: TemplateRef<{
    $implicit: { value: string };
    drawerRef: NzDrawerRef<string>;
  }>;

  value: any;
  panel: any;
  isLoadingHistory = true;
  viewBrowse() {
    const drawerRef = this.drawerService.create({
      nzTitle: 'History',
      nzContent: this.drawerTemplate,
      nzWidth: 500,
      nzContentParams: {
        value: this.fullName
      }
    });

    drawerRef.afterOpen.subscribe(() => {
      if (this.path[2] == "waitlisted-report") {
        this.waitlistedReportService.getHistoryLogs(this.viewGUID).subscribe(data => {
          this.panel = data;
          this.isLoadingHistory = false;
          console.log('Drawer(Template) open', data);
        })
      }
    });

    drawerRef.afterClose.subscribe(() => {
      // console.log('Drawer(Template) close');
    });
  }

}
