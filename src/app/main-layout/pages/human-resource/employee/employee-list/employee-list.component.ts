import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { CheckPrivilegeService } from 'src/core/services/check-privilege/check-privilege.service';
import { EmployeeService } from 'src/core/services/employee/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  
  listOfData: any[] = [];
  fcList: any[] = [];
  filteredOptions: any = [];
  suggestions: any = []
  control = {
    edit: false,
    delete: false
  }
  isLoading = true  
  
  constructor(
    private router: Router,
    private modal: NzModalService,
    private empService: EmployeeService,
    private notification: NzNotificationService,
    private checkPriv: CheckPrivilegeService
  ) { }


  ngOnInit() {
    this.control = this.checkPriv.checkPrivilege("/main/human-resource/employee")
    
    console.log(this.control)
    this.empService.getList().subscribe(value => {
      this.listOfData = value[0]

      this.fcList = this.listOfData
      this.suggestions = value[2]
      this.isLoading =false
      console.log("bsuhet", this.suggestions)
    })
  }

  edit(data:any){
    this.router.navigate(["/main/human-resource/employee/edit-form/", data.employee_id])
  }
  print(data:any){
    this.router.navigate(["/main/human-resource/employee/print/", data.employee_id])
  }

  delete(data:any){
     this.modal.confirm({
      nzTitle: 'Do you want to delete this record?',
      nzOnOk: () => 
      {
        this.empService.delete(data.employee_id).subscribe(async x => {
          this.ngOnInit()
          await this.notification.create(
            "success",
            'Successfully Deleted',
            'Employee Record has successfully deleted.'
          );
        },
        async error => {
         await this.notification.create(
            "error",
            'Unsuccessfully Saved',
            'Employee has not been deleted.'
          );
        })
      }
    });
  }

  statusSwitch = false;
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
      this.empService.getList().subscribe(data => {
        this.isLoading = false
        this.listOfData = data[0]
        this.fcList = this.listOfData
      })
    } else {
      this.isLoading = true
      this.empService.getActiveList().subscribe(data => {
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
    
    if(value.tag == 'en'){
      this.listOfData = this.fcList.filter((obj:any) => obj.employee_name.toLowerCase() == value.val.toLowerCase());
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
    this.empService.getList().subscribe((value:any) => {
      this.isLoading = false
      this.listOfData = value[0]
      this.fcList = this.listOfData
      this.suggestions = value[2]
    })
  }
}
