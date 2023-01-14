import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { CheckPrivilegeService } from 'src/core/services/check-privilege/check-privilege.service';
import { PathsegmentService } from 'src/core/services/pathsegment/pathsegment.service';
import { RentalApplicationService } from 'src/core/services/rental-application/rental-application.service';

@Component({
  selector: 'app-rental-application-list',
  templateUrl: './rental-application-list.component.html',
  styleUrls: ['./rental-application-list.component.scss']
})
export class RentalApplicationListComponent implements OnInit {

  fcList: any[] = [];
  filteredOptions: any = [];
  suggestions: any = []
  control = {
    edit: false,
    delete: false
  }
  path: any = ""
  listOfData: any = [];
  expandSet = new Set<number>();
  expandSetDetails = new Set<number>();

  constructor(
    private router: Router,
    private modal: NzModalService,
    private rentAppService: RentalApplicationService,
    private notification: NzNotificationService,
    private checkPriv: CheckPrivilegeService,
    private pathService: PathsegmentService
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

  edit(data:any){
    this.router.navigate(["/main/economic-enterprises/market/rental-application/edit-form/", data.rental_application_id])
  }
  print(data:any){
    this.router.navigate(["/main/economic-enterprises/market/rental-application/print/", data.rental_application_id])
  }

  
  remarks: any = ""
  deleteModal = false
  deleteData: any = {}
  delete(data:any){

    console.log("Dlete", data)
    this.deleteData = data
    this.deleteModal = true;
  }

  handleCancel(){
    this.remarks = ""
    this.deleteModal = false
  }

  handleOk(){
    this.rentAppService.delete(this.deleteData.rental_application_id, this.remarks).subscribe(async x => {
      this.deleteModal = false
      this.ngOnInit()
      await this.notification.create(
        "success",
        'Successfully Deleted',
        'Rental Application Record has successfully deleted.'
      );
    },
    async error => {
     await this.notification.create(
        "error",
        'Unsuccessfully Saved',
        'Rental Application Record has not been deleted.'
      );
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
    this.isLoading = true
    this.rentAppService.getList(this.status_id).subscribe(data => {
      this.isLoading = false
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
    this.isLoading = true
    this.rentAppService.getList(this.status_id).subscribe((value:any) => {
      this.isLoading = false
      this.listOfData = value[0]
      this.fcList = this.listOfData
      this.suggestions = value[2]
    })
  }

  listOfdetails: any = [];
  listOfdeatilsData: any = [];
  onExpandChange(id: any, checked: boolean, type: number, index: number): void {
    if (checked) {
      this.expandSet.add(id);
      this.rentAppService.getById(id).subscribe(data => {
        this.listOfdeatilsData[index] = data.reqs
        console.log(this.listOfdeatilsData[index])
        this.rentAppService.getReqs(data.application_type_id).subscribe(reqs => {
          this.listOfdetails[index] = reqs
        })
      })
    } else {
      this.expandSet.delete(id);
    }
  }
}
