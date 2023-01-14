import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { CheckPrivilegeService } from 'src/core/services/check-privilege/check-privilege.service';
import { PathsegmentService } from 'src/core/services/pathsegment/pathsegment.service';
import { UtilitiesSetupService } from 'src/core/services/utilities-setup/utilities-setup.service';

@Component({
  selector: 'app-utilities-setup-list',
  templateUrl: './utilities-setup-list.component.html',
  styleUrls: ['./utilities-setup-list.component.scss']
})
export class UtilitiesSetupListComponent implements OnInit {

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
    private utilitiesService: UtilitiesSetupService,
    private notification: NzNotificationService,
    private checkPriv: CheckPrivilegeService,
    private pathService: PathsegmentService
  ) { }

  isLoading = true
  ngOnInit() {
    this.path = this.pathService.getPath();
    localStorage.setItem("utility-type", this.path[4])
    if(this.path[4].includes("water")){

      this.control = this.checkPriv.checkPrivilege("/main/economic-enterprises/market/utilities-setup");
      this.utilitiesService.getListWater().subscribe(value => {
        this.listOfData = value[0]

        this.fcList = this.listOfData
        this.suggestions = value[1]
        this.isLoading = false
        console.log("bsuhet", this.suggestions)
      })
    }else{
      this.control = this.checkPriv.checkPrivilege("/main/economic-enterprises/market/utilities-setup");
      this.utilitiesService.getListElectricity().subscribe(value => {
        this.listOfData = value[0]

        this.fcList = this.listOfData
        this.suggestions = value[1]
        this.isLoading = false
        console.log("bsuhet", this.suggestions)
      })
    }
    
  }

  edit(data:any){
    console.log(data)
    this.router.navigate(["/main/economic-enterprises/market/utilities-setup/edit-form/", data.utility_id])
  }
  print(data:any){
    this.router.navigate(["/main/economic-enterprises/market/utilities-setup/print/", data.utility_id])
  }

  
  remarks: any = ""
  deleteModal = false
  deleteData: any = {}
  delete(data:any){

    
    this.deleteData = data
    this.deleteModal = true;
  }

  handleCancel(){
    this.remarks = ""
    this.deleteModal = false
  }

  handleOk(){
    this.utilitiesService.delete(this.deleteData.utility_id, this.remarks).subscribe(async x => {
      this.deleteModal = false
      this.ngOnInit()
      await this.notification.create(
        "success",
        'Successfully Deleted',
        'Utility Record has successfully deleted.'
      );
    },
    async error => {
     await this.notification.create(
        "error",
        'Unsuccessfully Saved',
        'Utility Record has not been deleted.'
      );
    })
  }

  statusSwitch = false;
  status_id: any;

  statusFilter(){
    localStorage.removeItem("property_status")
    if(this.statusSwitch){
      this.status_id = 1
    }else{
      this.status_id = 0
    }
    localStorage.setItem("property_status", this.status_id.toString());
    this.applyFilter();
  }
  localStorageStatus: any;
  applyFilter(){
    if(this.path[4].includes("water")){
      this.localStorageStatus = localStorage.getItem("property_status")
      if (this.localStorageStatus == 0) {
        this.isLoading = true
        this.utilitiesService.getListWater().subscribe(data => {
          this.isLoading = false
          this.listOfData = data[0]
          this.fcList = this.listOfData
        })
      } else {
        this.isLoading = true
        this.utilitiesService.getActiveListWater().subscribe(data => {
          this.isLoading = false
          this.listOfData = data[0]
          this.fcList = this.listOfData
        })
      }
    } else if (this.path[4].includes("electricity")) {
      this.localStorageStatus = localStorage.getItem("property_status")
      if (this.localStorageStatus == 0) {
        this.isLoading = true
        this.utilitiesService.getListElectricity().subscribe(data => {
          this.isLoading = false
          this.listOfData = data[0]
          this.fcList = this.listOfData
        })
      } else {
        this.isLoading = true
        this.utilitiesService.getActiveListElectricity().subscribe(data => {
          this.isLoading = false
          this.listOfData = data[0]
          this.fcList = this.listOfData
        })
      }
    }
    
  }

  
  beginSearch(value:any){
    if(this.path[4].includes("water")){
      this.filteredOptions = this.suggestions.filter((option:any) => option.val.toLowerCase().indexOf(value.toLowerCase()) !== -1);
    } else if (this.path[4].includes("electricity")) {
      this.filteredOptions = this.suggestions.filter((option:any) => option.val.toLowerCase().indexOf(value.toLowerCase()) !== -1);
    }
  }

  triggerSearch(value:any){
    console.log(value)

    if(this.path[4].includes("water")){
      if(value.tag == 'pn'){
        this.listOfData = this.fcList.filter((obj:any) => obj.property_name == value.val);
      } else if (value.tag == 'ad') {
        this.listOfData = this.fcList.filter((obj:any) => obj.brgy == value.val);
      }
    } else if (this.path[4].includes("electricity")) {
      if(value.tag == 'pn'){
        this.listOfData = this.fcList.filter((obj:any) => obj.property_name == value.val);
      } else if (value.tag == 'ad') {
        this.listOfData = this.fcList.filter((obj:any) => obj.brgy == value.val);
      }
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
    if(this.path[4].includes("water")){
      this.searchModel = ""
      this.isLoading = true
      this.utilitiesService.getListWater().subscribe((value:any) => {
        this.isLoading = false
        this.listOfData = value[0]
        this.fcList = this.listOfData
        // this.suggestions = this.listOfData.map((x:any) => x.fees_name)
      })
    } else {
      this.searchModel = ""
      this.isLoading = true
      this.utilitiesService.getListElectricity().subscribe((value:any) => {
        this.isLoading = false
        this.listOfData = value[0]
        this.fcList = this.listOfData
        // this.suggestions = this.listOfData.map((x:any) => x.fees_name)
      })
    }
  }


}
