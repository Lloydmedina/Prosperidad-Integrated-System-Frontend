import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { CheckPrivilegeService } from 'src/core/services/check-privilege/check-privilege.service';
import { PersonService } from 'src/core/services/person/person.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit {

  listOfData: any[] = [];
  isLoading = true;
  expandSet = new Set<number>();
  searchData: any;
  valueClick: boolean = false;
  valueClickDetails: boolean = false;

  fcList: any[] = [];
  filteredOptions: any = [];
  suggestions: any = [];
  formOptions: any = [];
  // control = {
  //   edit: false,
  //   delete: false
  // }
  control: any;
  editCss = "actionEdit";
  deleteCss = "actionDelete";
  constructor(
    private router: Router,
    private modal: NzModalService,
    private personService: PersonService,
    private notification: NzNotificationService,
    private checkPriv: CheckPrivilegeService
  ) { }

  ngOnInit() {
    this.control = this.checkPriv.checkPrivilege("/main/admin-console/person")
    if (this.control.edit == true) {
      this.editCss = "disbaled"
    } else if (this.control.delete == true) {
      this.deleteCss = "disabled"
    } else {
      this.editCss = "actionEdit"
      this.deleteCss = "actionDelete"
    }

    localStorage.setItem("fc_status", "1");
    localStorage.setItem("fc_status_deleted", "0");
    this.personService.getPersonActiveOnly().subscribe(data => {
      this.listOfData = data[0];
      this.fcList = this.listOfData
      this.formOptions = data[1]
      this.suggestions = data[2]
      this.isLoading = false;
      console.log("DATA", data[0])
    })
  }

  edit(id: any) {
    this.router.navigate(["/main/admin-console/person/edit-form/" + id])
  }

  delete(id: any, data: any) {
    this.modal.confirm({
      nzTitle: 'Do you Want to delete these items?',
      nzContent: data.first_name + " " + data.middle_name + " " + data.last_name +  " will be deleted permanently!",
      nzOkDanger: true,
      nzOnOk: () =>
        this.personService.deletePerson(id).subscribe(data => {
          this.isLoading = true;
          if(data) {
            this.personService.getPerson().subscribe(async data => {
              this.listOfData = data[0];
              this.isLoading = false;
            })
            this.notification.create(
              "success",
              'Successfully Deleted',
              'Person Record has successfully deleted.'
            );
          } else {
            this.notification.create(
              "error",
              'Unsuccessfully Deleted',
              'Person Record unsuccessfully deleted.'
            );
          }
        })
    });
  }

  onExpandChange(id: number, checked: boolean, index: any): void {
    if (checked) {
      this.expandSet.add(id);
    } else {
      this.expandSet.delete(id);
    }
  }

  // search(event: Event) {
  //   this.searchData = event
  //   // console.log("search data", this.searchData)
  //   this.personService.getPerson().subscribe(data => {
  //     this.listOfData = data[0];
  //     this.isLoading = false;
  //     this.searchData.birth_date = new DatePipe('en-Us').transform(this.searchData.birth_date, 'yyyy-MM-dd' + 'T' +'00:00:00', 'GMT+0800');

  //     if (this.searchData.birth_date != null) {
  //       this.listOfData = this.listOfData.filter((data:any) =>
  //       data.first_name.toLowerCase() == this.searchData.first_name.trim().toLowerCase()
  //       && data.middle_name.toLowerCase() == this.searchData.middle_name.trim().toLowerCase()
  //       && data.last_name.toLowerCase() == this.searchData.last_name.trim().toLowerCase()
  //       && data.suffix.toLowerCase() == this.searchData.suffix.toLowerCase()
  //       && data.birth_date == this.searchData.birth_date)
  //     } else {
  //       this.listOfData = this.listOfData.filter((data:any) =>
  //       data.first_name.toLowerCase() == this.searchData.first_name.trim().toLowerCase()
  //       && data.middle_name.toLowerCase() == this.searchData.middle_name.trim().toLowerCase()
  //       && data.last_name.toLowerCase() == this.searchData.last_name.trim().toLowerCase()
  //       && data.suffix.toLowerCase() == this.searchData.suffix.toLowerCase())
  //     }

  //     if (!this.listOfData.length) {
  //       this.modal.confirm({
  //         nzTitle: 'Do you want to add this person?',
  //         nzContent: this.searchData.first_name + " " + this.searchData.middle_name + " " + this.searchData.last_name +  " is not on the persons list.",
  //         nzOnCancel:() => {
  //           this.listOfData = data[0];
  //         },
  //         nzOnOk: () => {
  //           this.router.navigate(["/main/admin-console/person/add-form"], { queryParams: { firstname: this.searchData.first_name, middlename: this.searchData.middle_name, lastname: this.searchData.last_name, suffix_name: this.searchData.suffix, birth_date: this.searchData.birth_date } })
  //         }
  //       });
  //     } else {
  //       if (this.listOfData[0].status == 'Deleted') {
  //         this.modal.confirm({
  //           nzTitle: 'Do you want to Activate this person?',
  //           nzContent: this.searchData.first_name + " " + this.searchData.middle_name + " " + this.searchData.last_name +  " has already been deleted.",
  //           nzOnCancel:() => {
  //               this.listOfData = data[0];
  //           },
  //           nzOnOk: () => {
  //             this.isLoading = true
  //             this.personService.activatePerson(this.listOfData[0].person_guid, this.listOfData[0]).subscribe(async data => {
  //               this.router.navigate(["/main/admin-console/person/edit-form/" + this.listOfData[0].person_guid])
  //               this.notification.create(
  //                 "success",
  //                 'Successfully Activated',
  //                 'Person Record has successfully activated.'
  //               );
  //             })
  //           }
  //         });
  //       }
  //     }
  //   })

  // }

  // clear(value: any) {
  //   this.isLoading = true
  //   if (value) {
  //     this.isLoading = false
  //     this.listOfData = value
  //   }
  // }

  select(value: boolean) {
    this.isLoading = true
    if (value == true) {
      this.personService.getPerson().subscribe(data => {
        this.listOfData = data[0];
        this.isLoading = false;
      })
    } else {
      this.personService.getPersonActiveOnly().subscribe(async data => {
        this.listOfData = data[0];
        this.isLoading = false;
      })
    }
  }

  rowClick(id: any, checked: boolean, index: any) {
    this.onExpandChange(id, checked, index);
  }

  // 
  // 

  statusSwitch = true;
  status_id: any;

  statusFilter(){
    localStorage.removeItem("fc_status")
    if(this.statusSwitch){
      this.status_id = 1
      this.statusSwitchDeleted = false
      this.status_id_deleted = 0
      localStorage.setItem("fc_status_deleted", this.status_id_deleted.toString());
    }else{
      this.status_id = 0
    }
    localStorage.setItem("fc_status", this.status_id.toString());
    this.applyFilter();
  }
  localStorageStatus: any;
  localStorageDeletedStatus: any;
  applyFilter(){
    this.localStorageStatus = localStorage.getItem("fc_status")
    this.localStorageDeletedStatus = localStorage.getItem("fc_status_deleted")
    if (this.localStorageDeletedStatus == 0) {
      if (this.localStorageStatus == 0) {
        this.isLoading = true
        this.personService.getPerson().subscribe(data => {
          this.isLoading = false
          this.listOfData = data[0]
          this.fcList = this.listOfData
        })
      } else {
        this.isLoading = true
        this.personService.getPersonActiveOnly().subscribe(data => {
          this.isLoading = false
          this.listOfData = data[0]
          this.fcList = this.listOfData
        })
      }
    } else {
      this.isLoading = true
      this.personService.getPersonDeletedOnly().subscribe(data => {
        this.isLoading = false
        this.listOfData = data[0]
        this.fcList = this.listOfData
        console.log("BULLSHEEET", this.listOfData)
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

  localStatusClear: any;
  localStatusClearDeleted: any;
  clearSearch(){
    this.searchModel = ""
    this.isLoading = true
    this.localStatusClear = localStorage.getItem("fc_status")
    this.localStatusClearDeleted = localStorage.getItem("fc_status_deleted")
    if (this.localStatusClearDeleted == 0) {
      if (this.localStatusClear == 0) {
        this.personService.getPerson().subscribe((value:any) => {
          this.isLoading = false
          this.listOfData = value[0]
          this.fcList = this.listOfData
          this.suggestions = value[2]
        })
      } else {
        this.personService.getPersonActiveOnly().subscribe((value:any) => {
          this.isLoading = false
          this.listOfData = value[0]
          this.fcList = this.listOfData
          this.suggestions = value[2]
        })
      }
    } else {
      this.isLoading = true
      this.personService.getPersonDeletedOnly().subscribe(data => {
        this.isLoading = false
        this.listOfData = data[0]
        this.fcList = this.listOfData
      })
    }
  }

  statusSwitchDeleted = false
  status_id_deleted: any;
  statusFilterDeleted() {
    localStorage.removeItem("fc_status_deleted")
    if(this.statusSwitchDeleted){
      this.status_id_deleted = 1
      this.statusSwitch = false
      this.status_id = 0
      localStorage.setItem("fc_status", this.status_id.toString());
    }else{
      this.status_id_deleted = 0
      this.status_id = 1
      this.statusSwitch = true
      localStorage.setItem("fc_status", this.status_id.toString());
    }
    localStorage.setItem("fc_status_deleted", this.status_id_deleted.toString());
    this.applyFilter();
  }

  localStatusGenerate: any;
  localStatusGenerateDeleted: any;
  generate(value: any) {
    value.filter_type = Number(value.filter_type)
    this.localStatusGenerate = localStorage.getItem("fc_status")
    this.localStatusGenerateDeleted = localStorage.getItem("fc_status_deleted")
    localStorage.setItem('filterValue', JSON.stringify(value));
    this.isLoading = true;
    this.personService.getPersonGenerated(value.filter_type, this.localStatusGenerate, this.localStatusGenerateDeleted, value.thisMonth, value.thisYear, value.monthly, value.monthlyYear, value.yearQuarterly, value.quarter, value.yearly, value.from, value.to).subscribe(data => {
      console.log("GENERATED", data)
      this.isLoading = false;
      this.listOfData = data[0]
      this.fcList = this.listOfData
      this.suggestions = data[2]
    })
    
  }

}
