import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { CheckPrivilegeService } from 'src/core/services/check-privilege/check-privilege.service';
import { PathsegmentService } from 'src/core/services/pathsegment/pathsegment.service';
import { RentalApplicationService } from 'src/core/services/rental-application/rental-application.service';

@Component({
  selector: 'app-rental-application-browse',
  templateUrl: './rental-application-browse.component.html',
  styleUrls: ['./rental-application-browse.component.scss']
})
export class RentalApplicationBrowseComponent implements OnInit {

  fcList: any[] = [];
  filteredOptions: any = [];
  suggestions: any = []
  control = {
    edit: false,
    delete: false
  }
  path: any = ""
  listOfData: any = [];

  constructor(
    private router: Router,
    private modal: NzModalService,
    private rentAppService: RentalApplicationService,
    private notification: NzNotificationService,
    private checkPriv: CheckPrivilegeService,
    private pathService: PathsegmentService,
    private drawerRef: NzDrawerRef<string>
  ) { }

  isLoading = true
  formSetting: any = []

  ngOnInit() {
    this.path = this.pathService.getPath();
    this.rentAppService.getList(0).subscribe(data => {
      this.listOfData = data[0]

      this.fcList = this.listOfData
      this.formSetting = data[1]
      this.suggestions = data[2]
      this.isLoading = false
      console.log("asd", this.listOfData)
    })
  }

  statusSwitch = false;
  status_id: any = 3;

  statusFilter(){
    localStorage.removeItem("rental_application_status")
    if(this.statusSwitch){
      this.status_id = 1
    }else{
      this.status_id = 0
    }
    localStorage.setItem("rental_application_status", this.status_id.toString());
    this.applyFilter();
  }

  localStorageStatus: any;
  applyFilter(){
    this.localStorageStatus = localStorage.getItem("rental_application_status")
    this.rentAppService.getList(this.status_id).subscribe(data => {
      this.listOfData = data[0]
      this.fcList = this.listOfData
    })
    // if (this.localStorageStatus == 0) {
    //   this.rentAppService.getList().subscribe(data => {
    //     this.listOfData = data[0]
    //     this.fcList = this.listOfData
    //   })
    // } else {
    //   this.empService.getActiveList().subscribe(data => {
    //     this.listOfData = data[0]
    //     this.fcList = this.listOfData
    //   })
    // }
  }

  
  beginSearch(value:any){
    this.filteredOptions = this.suggestions.filter((option:any) => option.val.toLowerCase().indexOf(value.toLowerCase()) !== -1);
  }
  triggerSearch(value:any){

    if(value.tag == 'an'){
      this.listOfData = this.fcList.filter((obj:any) => obj.applicant_name.toLowerCase() == value.val.toLowerCase());
    } else if (value.tag == 'nob') {
      this.listOfData = this.fcList.filter((obj:any) => obj.nature_of_business.toLowerCase() == value.val.toLowerCase());
    } else if (value.tag == 'ad') {
      this.listOfData = this.fcList.filter((obj:any) => obj.address.toLowerCase() == value.val.toLowerCase());
    } else if (value.tag == 'type') {
      this.listOfData = this.fcList.filter((obj:any) => obj.type.toLowerCase() == value.val.toLowerCase());
    }


    if(this.listOfData.length == 0){
      this.notification.create(
        "error",
        'No Record Found!',
        ''
      )
    }
  }
  searchModel: any = ""
  clearSearch(){
    this.searchModel = ""
    this.rentAppService.getList(this.status_id).subscribe((value:any) => {
      this.listOfData = value[0]
      this.fcList = this.listOfData
      this.suggestions = value[2]
    })
  }

  selectRental(data:any){
    this.drawerRef.close(data);
  }

}
