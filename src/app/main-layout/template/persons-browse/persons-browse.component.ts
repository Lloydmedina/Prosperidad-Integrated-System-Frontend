import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { CheckPrivilegeService } from 'src/core/services/check-privilege/check-privilege.service';
import { PersonService } from 'src/core/services/person/person.service';

@Component({
  selector: 'app-persons-browse',
  templateUrl: './persons-browse.component.html',
  styleUrls: ['./persons-browse.component.scss']
})
export class PersonsBrowseComponent implements OnInit {

  listOfData: any[] = [];
  isLoading = true;
  expandSet = new Set<number>();
  searchData: any;

  fcList: any[] = [];
  filteredOptions: any = [];
  suggestions: any = []
  control = {
    edit: false,
    delete: false
  }

  constructor(
    private router: Router,
    private modal: NzModalService,
    private personService: PersonService,
    private notification: NzNotificationService,
    private drawerRef: NzDrawerRef<any>,
    private checkPriv: CheckPrivilegeService
  ) { }

  ngOnInit() {
    this.control = this.checkPriv.checkPrivilege("/main/human-resource/employee")

    console.log("Control", this.control)
    this.personService.getPerson().subscribe(data => {
      this.listOfData = data[0];

      this.fcList = this.listOfData
      this.suggestions = data[2]
      this.isLoading = false;
      // console.log("bsuhet", this.suggestions)
    })
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
  //   this.personService.getPerson().subscribe(async data => {
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
  //           this.router.navigate(["/main/social-welfare/fc-registration/add-form/persons-add"], { queryParams: { firstname: this.searchData.first_name, middlename: this.searchData.middle_name, lastname: this.searchData.last_name, suffix_name: this.searchData.suffix, birth_date: this.searchData.birth_date } })
  //         }
  //       });
  //     } else {
  //       if (this.listOfData[0].status == 'Deleted') {
  //         this.modal.confirm({
  //           nzTitle: 'Do you want to Activate this person?',
  //           nzContent: this.searchData.first_name + " " + this.searchData.middle_name + " " + this.searchData.last_name +  " has already been deleted.",
  //           nzOnCancel:() => {
  //             this.listOfData = data[0];
  //           },
  //           nzOnOk: () => {
  //             this.isLoading = true
  //             this.personService.activatePerson(this.listOfData[0].person_guid, this.listOfData[0]).subscribe(async data => {
  //               this.router.navigate(["/main/social-welfare/fc-registration/add-form/family-composition-form/" + this.listOfData[0].person_guid])
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

  triggerSelect(data: any) {
    this.drawerRef.close(data)
  }

  // 
  // 

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
  }

  searchModel: string = "";

  beginSearch(value:any){
    this.filteredOptions = this.suggestions.filter((option:any) => option.val.toLowerCase().indexOf(value.toLowerCase()) !== -1);
  }

  triggerSearch(value:any){
    console.log(value)
    
    if(value.tag == 'fn'){
      this.listOfData = this.fcList.filter((obj:any) => obj.full_name.toLowerCase() == value.val.toLowerCase());
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
    this.personService.getPerson().subscribe((value:any) => {
      this.isLoading = false
      this.listOfData = value[0]
      this.fcList = this.listOfData
      this.suggestions = value[2]
    })
  }

}
