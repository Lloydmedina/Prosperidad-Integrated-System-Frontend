import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NzDrawerRef, NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AicsIntakeService } from 'src/core/services/aics-intake/aics-intake.service';
import { AicsLetterService } from 'src/core/services/aics-letter/aics-letter.service';
import { AicsVoucherService } from 'src/core/services/aics-voucher/aics-voucher.service';
import { OscaIntakeService } from 'src/core/services/osca-intake/osca-intake.service';
import { PathsegmentService } from 'src/core/services/pathsegment/pathsegment.service';
import { WaitlistedReportService } from 'src/core/services/waitlisted-report/waitlisted-report.service';

@Component({
  selector: 'app-aics-intake-template',
  templateUrl: './aics-intake-template.component.html',
  styleUrls: ['./aics-intake-template.component.scss']
})
export class AicsIntakeTemplateComponent implements OnInit {

  listOfFilter: any[] = [];
  listOfIntake: any[] = [];
  isLoading = true;
  expandSet = new Set<number>();
  searchData: any;
  path: any;

  constructor(
    private router: Router,
    private modal: NzModalService,
    private aicsIntakeService: AicsIntakeService,
    private aicsLetterService: AicsLetterService,
    private aicsVoucherService: AicsVoucherService,
    private notification: NzNotificationService,
    private pathService: PathsegmentService,
    private drawerService: NzDrawerService
  ) { }

  ngOnInit() {
    this.path = this.pathService.getPath()

    if (this.path[2] == 'aics-letter') {
      this.aicsIntakeService.getAicsIntake().subscribe(async data => {
        this.isLoading = false;
        this.listOfIntake = data[0];
      })
      this.aicsLetterService.getAicsLetter().subscribe(async data => {
        this.isLoading = false;
        this.listOfFilter = data[0];
      })
    } else if (this.path[2] == 'aics-voucher') {
      this.aicsIntakeService.getAicsIntake().subscribe(async data => {
        this.isLoading = false;
        this.listOfIntake = data[0];
      })
      this.aicsVoucherService.getAicsVoucher().subscribe(async data => {
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

  // search(event: Event) {
  //   this.searchData = event
  // }

  // clear(value: any) {
  //   this.isLoading = true
  //   if (value) {
  //     this.isLoading = false
  //     this.listOfData = value
  //   }
  // }

  // select(value: boolean) {
  //   this.isLoading = true
  //   if (value == true) {
  //     // this.oscaRegistrationService.getAllOscaRegistration().subscribe(data => {
  //     //   this.listOfData = data[0];
  //     //   this.isLoading = false;
  //     // })
  //   } else {
  //     // this.oscaRegistrationService.getOscaRegistration().subscribe(async data => {
  //     //   this.listOfData = data[0];
  //     //   this.isLoading = false;
  //     // })
  //   }
  // }

  showAlert = false;
  fullName: any;
  viewGUID: any;

  triggerSelect(person_guid: any, value: any) {
    if (this.path[2] == "aics-letter") {
      var familyHeadRecord = this.listOfFilter
      familyHeadRecord = this.listOfFilter.filter((data: any) => 
      data.aics_intake_guid == value.aics_intake_guid)
      console.log("SURPRISE MADAFAKA", familyHeadRecord.length)
      if (!familyHeadRecord.length) {
        this.router.navigate(["/main/social-welfare/aics-letter/add-form/aics-letter-registration-form/" + value.aics_intake_guid])
      } else {
        this.showAlert = true;
        this.fullName = familyHeadRecord[0].first_name + ' ' + familyHeadRecord[0].middle_name + ' ' + familyHeadRecord[0].last_name
        this.viewGUID = familyHeadRecord[0].aics_intake_guid
        
      }
    } else if (this.path[2] == "aics-voucher") {
      var familyHeadRecord = this.listOfFilter
      familyHeadRecord = this.listOfFilter.filter((data: any) => 
      data.aics_intake_guid == value.aics_intake_guid)
      if (!familyHeadRecord.length) {
        this.router.navigate(["/main/social-welfare/aics-voucher/add-form/aics-voucher-registration-form/" + value.aics_intake_guid])
      } else {
        this.showAlert = true;
        this.fullName = familyHeadRecord[0].first_name + ' ' + familyHeadRecord[0].middle_name + ' ' + familyHeadRecord[0].last_name
        this.viewGUID = familyHeadRecord[0].aics_intake_guid
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
      if (this.path[2] == "aics-letter") {
        this.aicsLetterService.getHistoryLogs(this.viewGUID).subscribe(data => {
          this.panel = data;
          this.isLoadingHistory = false;
          console.log('Drawer(Template) open', data);
        })
      } else if (this.path[2] == "aics-voucher") {
        this.aicsVoucherService.getHistoryLogs(this.viewGUID).subscribe(data => {
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
