import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { CheckPrivilegeService } from 'src/core/services/check-privilege/check-privilege.service';
import { WaitlistedReportService } from 'src/core/services/waitlisted-report/waitlisted-report.service';

@Component({
  selector: 'app-waitlisted-report-list',
  templateUrl: './waitlisted-report-list.component.html',
  styleUrls: ['./waitlisted-report-list.component.scss']
})
export class WaitlistedReportListComponent implements OnInit {

  listOfData: any[] = [];
  listOfDataDetails: any[] = [];
  isLoading = true;
  expandSet = new Set<number>();
  expandSetDetails = new Set<number>();
  valueClick: boolean = false;
  valueClickDetails: boolean = false;

  fcList: any[] = [];
  filteredOptions: any = [];
  suggestions: any = []
  
  control: any;
  editCss = "actionEdit";
  deleteCss = "actionDelete";

  constructor(
    private router: Router,
    private modal: NzModalService,
    private waitlistedReportService: WaitlistedReportService,
    private notification: NzNotificationService,
    private checkPriv: CheckPrivilegeService
  ) { }

  ngOnInit() {
    this.control = this.checkPriv.checkPrivilege("/main/social-welfare/waitlisted-report")
    if (this.control.edit == true) {
      this.editCss = "disbaled"
    } else if (this.control.delete == true) {
      this.deleteCss = "disabled"
    } else {
      this.editCss = "actionEdit"
      this.deleteCss = "actionDelete"
    }

    this.waitlistedReportService.getWaitlistedReport().subscribe(async data => {
      this.listOfData = data[0];
      
      this.fcList = this.listOfData
      this.suggestions = data[2]
      this.isLoading = false;
      // console.log("asdasd", data)
    })
  }

  edit(id: any) {
    this.router.navigate(["/main/social-welfare/waitlisted-report/edit-form/" + id])
  }

  delete(id: any, data: any) {
    this.modal.confirm({
      nzTitle: 'Do you Want to delete these items?',
      nzContent: data.first_name + " " + data.middle_name + " " + data.last_name +  " will be deleted permanently!",
      nzOnOk: () => 
        this.waitlistedReportService.deleteWaitlistedReport(id).subscribe(data => {
          this.isLoading = true;
          if(data) {
            this.waitlistedReportService.getAllWaitlistedReport().subscribe(async data => {
              this.listOfData = data[0];
              this.isLoading = false;
            })
            this.notification.create(
              "success",
              'Successfully Deleted',
              'Waitlisted Report has successfully deleted.'
            );
          } else {
            this.notification.create(
              "error",
              'Unsuccessfully Deleted',
              'Waitlisted Report unsuccessfully deleted.'
            );
          }
        })
    });
  }

  print(id: any) {
    this.router.navigate(["/main/social-welfare/waitlisted-report/print-form/" + id])
  }

  onExpandChange(id: number, checked: boolean, index: any): void {
    if (checked) {
      this.expandSet.add(id);
    } else {
      this.expandSet.delete(id);
    }
  }

  onExpandChangeDetails(id: number, checked: boolean, index: any): void {
    if (checked) {
      this.expandSetDetails.add(id);
    } else {
      this.expandSetDetails.delete(id);
    }
  }

  rowClick(id: any, checked: boolean, index: any) {
    this.onExpandChange(id, checked, index);
  }

  rowClickDetails(id: any, checked: boolean, index: any) {
    this.onExpandChangeDetails(id, checked, index);
  }

  statusSwitch = true;
  status_id: any;

  statusFilter(){
    localStorage.removeItem("fc_status")
    if(this.statusSwitch){
      this.status_id = 1
    }else{
      this.status_id = 0
    }
    localStorage.setItem("fc_status", this.status_id.toString());
    this.applyFilter();
  }
  localStorageStatus: any;
  applyFilter(){
    this.localStorageStatus = localStorage.getItem("fc_status")
    if (this.localStorageStatus == 0) {
      this.isLoading = true
      this.waitlistedReportService.getAllWaitlistedReport().subscribe(data => {
        this.isLoading = false
        this.listOfData = data[0]
        this.fcList = this.listOfData
      })
    } else {
      this.isLoading = true
      this.waitlistedReportService.getWaitlistedReport().subscribe(data => {
        this.isLoading = false
        this.listOfData = data[0]
        this.fcList = this.listOfData
      })
    }
  }

  searchModel: string = "";

  beginSearch(value:any){
    this.filteredOptions = this.suggestions.filter((option:any) => option.val.toLowerCase().indexOf(value.toLowerCase()) !== -1);
  }

  triggerSearch(value:any){
    console.log(value)
    
    if(value.tag == 'fn'){
      this.listOfData = this.fcList.filter((obj:any) => obj.full_name.toLowerCase() == value.val.toLowerCase());
    } else if (value.tag == 'brgy') {
      this.listOfData = this.fcList.filter((obj:any) => obj.brgy_name.toLowerCase() == value.val.toLowerCase());
    }
    // else if(value.tag =='d'){
    //   this.listOfData = this.fcList.filter((obj:any) => obj.short_desc.toLowerCase() == value.val.toLowerCase());
    // }else{
      
    // }
    

    if(this.listOfData.length == 0){
      this.notification.create(
        "error",
        'No Record Found!',
        ''
      )
    }
  }

  clearSearch(){
    this.searchModel = ""
    this.isLoading = true
    this.waitlistedReportService.getWaitlistedReport().subscribe((value:any) => {
      this.isLoading = false
      this.listOfData = value[0]
      this.fcList = this.listOfData
      this.suggestions = value[2]
    })
  }

}
