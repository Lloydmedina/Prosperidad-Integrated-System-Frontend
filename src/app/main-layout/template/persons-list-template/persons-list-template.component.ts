import { DatePipe } from '@angular/common';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NzDrawerRef, NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AicsService } from 'src/core/services/aics/aics.service';
import { CheckPrivilegeService } from 'src/core/services/check-privilege/check-privilege.service';
import { ChildInfoService } from 'src/core/services/child-info/child-info.service';
import { DafacService } from 'src/core/services/dafac/dafac.service';
import { DaycareCenterService } from 'src/core/services/daycare-center/daycare-center.service';
import { FamilyCompositionService } from 'src/core/services/family-composition/family-composition.service';
import { OscaRegistrationService } from 'src/core/services/osca-registration/osca-registration.service';
import { OscaService } from 'src/core/services/osca/osca.service';
import { PathsegmentService } from 'src/core/services/pathsegment/pathsegment.service';
import { PersonService } from 'src/core/services/person/person.service';
import { PwdService } from 'src/core/services/pwd/pwd.service';
import { SoloParentService } from 'src/core/services/solo-parent/solo-parent.service';

@Component({
  selector: 'app-persons-list-template',
  templateUrl: './persons-list-template.component.html',
  styleUrls: ['./persons-list-template.component.scss']
})
export class PersonsListTemplateComponent implements OnInit {

  listOfData: any[] = [];
  listOfFilter: any[] = [];
  isLoading = true;
  expandSet = new Set<number>();
  searchData: any;
  path: any;

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
    private familyService: FamilyCompositionService,
    private dafacService: DafacService,
    private aicsService: AicsService,
    private oscaService: OscaService,
    private pwdService: PwdService,
    private oscaRegistrationService: OscaRegistrationService,
    private soloParentService: SoloParentService,
    private childInfoService: ChildInfoService,
    private daycareCenterService: DaycareCenterService,
    private notification: NzNotificationService,
    private pathService: PathsegmentService,
    private drawerService: NzDrawerService,
    private checkPriv: CheckPrivilegeService
  ) { }

  ngOnInit() {
    this.control = this.checkPriv.checkPrivilege("/main/human-resource/employee")

    console.log("Control", this.control)
    this.path = this.pathService.getPath()
   
    
    // INTAKE PURPOSES FOR FILTERING FROM REGISTERED DATA
    if (this.path[2] == 'fc-registration') {
      this.personService.getPersonActiveOnly().subscribe(data => {
        this.listOfData = data[0];
  
        this.fcList = this.listOfData
        this.suggestions = data[2]
        this.isLoading = false;
        // console.log("bsuhet", this.suggestions)
      })
      this.familyService.getFamilyComposition().subscribe(async data => {
        this.listOfFilter = data[0];
        // console.log("FILTER", this.listOfFilter)
      })
    } else if (this.path[2] == 'dafac-registration') {
      this.personService.getPersonActiveOnly().subscribe(data => {
        this.listOfData = data[0];
  
        this.fcList = this.listOfData
        this.suggestions = data[2]
        this.isLoading = false;
        // console.log("bsuhet", this.suggestions)
      })
      this.dafacService.getDafac().subscribe(async data => {
        this.listOfFilter = data[0];
        console.log("FILTER", this.listOfFilter)
      })
    } else if (this.path[2] == 'aics-registration') {
      this.personService.getPersonActiveOnly().subscribe(data => {
        this.listOfData = data[0];
  
        this.fcList = this.listOfData
        this.suggestions = data[2]
        this.isLoading = false;
        // console.log("bsuhet", this.suggestions)
      })
      this.aicsService.getAics().subscribe(async data => {
        this.listOfFilter = data[0];
        console.log("FILTER", this.listOfFilter)
      })
    } else if (this.path[2] == 'osca-registration') {
      this.personService.getPersonActiveAboveSixty().subscribe(data => {
        this.listOfData = data[0];
  
        this.fcList = this.listOfData
        this.suggestions = data[2]
        this.isLoading = false;
        // console.log("bsuhet", this.listOfData)
      })
      this.oscaRegistrationService.getOscaRegistration().subscribe(async data => {
        this.listOfFilter = data[0];
        console.log("FILTER", this.listOfFilter)
      })
    } else if (this.path[2] == 'pwd-registration') {
      this.personService.getPersonActiveOnly().subscribe(data => {
        this.listOfData = data[0];
  
        this.fcList = this.listOfData
        this.suggestions = data[2]
        this.isLoading = false;
        // console.log("bsuhet", this.suggestions)
      })
      this.pwdService.getPwd().subscribe(async data => {
        this.listOfFilter = data[0];
        console.log("FILTER", this.listOfFilter)
      })
    } else if (this.path[2] == 'solo-parent-registration') {
      this.personService.getPersonActiveOnly().subscribe(data => {
        this.listOfData = data[0];
  
        this.fcList = this.listOfData
        this.suggestions = data[2]
        this.isLoading = false;
        // console.log("bsuhet", this.suggestions)
      })
      this.soloParentService.getSoloParent().subscribe(async data => {
        this.listOfFilter = data[0];
        console.log("FILTER", this.listOfFilter)
      })
    } else if (this.path[2] == 'child-info-registration') {
      this.personService.getPersonActiveOnly().subscribe(data => {
        this.listOfData = data[0];
  
        this.fcList = this.listOfData
        this.suggestions = data[2]
        this.isLoading = false;
        // console.log("bsuhet", this.suggestions)
      })
      this.childInfoService.getChildInfo().subscribe(async data => {
        this.listOfFilter = data[0];
        console.log("FILTER", this.listOfFilter)
      })
    } else if (this.path[2] == 'daycare-center') {
      this.personService.getPersonActiveOnly().subscribe(data => {
        this.listOfData = data[0];
  
        this.fcList = this.listOfData
        this.suggestions = data[2]
        this.isLoading = false;
        // console.log("bsuhet", this.suggestions)
      })
      this.childInfoService.getChildInfo().subscribe(async data => {
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
  //           if (this.path[2] == "fc-registration") {
  //             this.router.navigate(["/" + this.path[0] + "/" + this.path[1] + "/" + this.path[2] + "/add-form/persons-add"], { queryParams: { firstname: this.searchData.first_name, middlename: this.searchData.middle_name, lastname: this.searchData.last_name, suffix_name: this.searchData.suffix, birth_date: this.searchData.birth_date } })
  //           } else if (this.path[2] == "dafac-registration") {
  //             this.router.navigate(["/" + this.path[0] + "/" + this.path[1] + "/" + this.path[2] + "/add-form/persons-add"], { queryParams: { firstname: this.searchData.first_name, middlename: this.searchData.middle_name, lastname: this.searchData.last_name, suffix_name: this.searchData.suffix, birth_date: this.searchData.birth_date } })
  //           } else if (this.path[2] == "aics-registration") {
  //             this.router.navigate(["/" + this.path[0] + "/" + this.path[1] + "/" + this.path[2] + "/add-form/persons-add"], { queryParams: { firstname: this.searchData.first_name, middlename: this.searchData.middle_name, lastname: this.searchData.last_name, suffix_name: this.searchData.suffix, birth_date: this.searchData.birth_date } })
  //           } else if (this.path[2] == "osca-registration") {
  //             this.router.navigate(["/" + this.path[0] + "/" + this.path[1] + "/" + this.path[2] + "/add-form/persons-add"], { queryParams: { firstname: this.searchData.first_name, middlename: this.searchData.middle_name, lastname: this.searchData.last_name, suffix_name: this.searchData.suffix, birth_date: this.searchData.birth_date } })
  //           } else if (this.path[2] == "pwd-registration") {
  //             this.router.navigate(["/" + this.path[0] + "/" + this.path[1] + "/" + this.path[2] + "/add-form/persons-add"], { queryParams: { firstname: this.searchData.first_name, middlename: this.searchData.middle_name, lastname: this.searchData.last_name, suffix_name: this.searchData.suffix, birth_date: this.searchData.birth_date } })
  //           } else if (this.path[2] == "solo-parent-registration") {
  //             this.router.navigate(["/" + this.path[0] + "/" + this.path[1] + "/" + this.path[2] + "/add-form/persons-add"], { queryParams: { firstname: this.searchData.first_name, middlename: this.searchData.middle_name, lastname: this.searchData.last_name, suffix_name: this.searchData.suffix, birth_date: this.searchData.birth_date } })
  //           } else if (this.path[2] == "child-info-registration") {
  //             this.router.navigate(["/" + this.path[0] + "/" + this.path[1] + "/" + this.path[2] + "/add-form/persons-add"], { queryParams: { firstname: this.searchData.first_name, middlename: this.searchData.middle_name, lastname: this.searchData.last_name, suffix_name: this.searchData.suffix, birth_date: this.searchData.birth_date } })
  //           } else if (this.path[2] == "daycare-center") {
  //             this.router.navigate(["/" + this.path[0] + "/" + this.path[1] + "/" + this.path[2] + "/add-form/persons-add"], { queryParams: { firstname: this.searchData.first_name, middlename: this.searchData.middle_name, lastname: this.searchData.last_name, suffix_name: this.searchData.suffix, birth_date: this.searchData.birth_date } })
  //           }
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
  //               if (this.path[2] == "fc-registration") {
  //                 this.router.navigate(["/" + this.path[0] + "/" + this.path[1] + "/" + this.path[2] + "/add-form/family-composition-form/" + this.listOfData[0].person_guid])
  //               } else if (this.path[2] == "dafac-registration") {
  //                 this.router.navigate(["/" + this.path[0] + "/" + this.path[1] + "/" + this.path[2] + "/add-form/dafac-registration-form/" + this.listOfData[0].person_guid])
  //               } else if (this.path[2] == "aics-registration") {
  //                 this.router.navigate(["/" + this.path[0] + "/" + this.path[1] + "/" + this.path[2] + "/add-form/aics-registration-form/" + this.listOfData[0].person_guid])
  //               } else if (this.path[2] == "osca-registration") {
  //                 this.router.navigate(["/" + this.path[0] + "/" + this.path[1] + "/" + this.path[2] + "/add-form/osca-registration-form/" + this.listOfData[0].person_guid])
  //               } else if (this.path[2] == "pwd-registration") {
  //                 this.router.navigate(["/" + this.path[0] + "/" + this.path[1] + "/" + this.path[2] + "/add-form/pwd-registration-form/" + this.listOfData[0].person_guid])
  //               } else if (this.path[2] == "solo-parent-registration") {
  //                 this.router.navigate(["/" + this.path[0] + "/" + this.path[1] + "/" + this.path[2] + "/add-form/solo-parent-registration-form/" + this.listOfData[0].person_guid])
  //               } else if (this.path[2] == "child-info-registration") {
  //                 this.router.navigate(["/" + this.path[0] + "/" + this.path[1] + "/" + this.path[2] + "/add-form/solo-parent-registration-form/" + this.listOfData[0].person_guid])
  //               } else if (this.path[2] == "daycare-center") {
  //                 this.router.navigate(["/" + this.path[0] + "/" + this.path[1] + "/" + this.path[2] + "/add-form/daycare-center-form/" + this.listOfData[0].person_guid])
  //               }
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
  showAlert = false;
  fullName: any;
  viewGUID: any;
  triggerSelect(person_guid: any) {
    if (this.path[2] == "fc-registration") {
      var familyHeadRecord = this.listOfFilter
      familyHeadRecord = this.listOfFilter.filter((data: any) => 
      data.person_guid == person_guid)
      if (!familyHeadRecord.length) {
        this.router.navigate(["/" + this.path[0] + "/" + this.path[1] + "/" + this.path[2] + "/add-form/family-composition-form/" + person_guid])
      } else {
        this.showAlert = true;
        this.fullName = familyHeadRecord[0].first_name + ' ' + familyHeadRecord[0].middle_name + ' ' + familyHeadRecord[0].last_name
        this.viewGUID = familyHeadRecord[0].family_composition_guid
        console.log("SURPRISE MADAFAKA", familyHeadRecord)
      }
    } else if (this.path[2] == "dafac-registration") {
      var familyHeadRecord = this.listOfFilter
      familyHeadRecord = this.listOfFilter.filter((data: any) => 
      data.person_guid == person_guid)
      if (!familyHeadRecord.length) {
        this.router.navigate(["/" + this.path[0] + "/" + this.path[1] + "/" + this.path[2] + "/add-form/dafac-registration-form/" + person_guid])
      } else {
        this.showAlert = true;
        this.fullName = familyHeadRecord[0].first_name + ' ' + familyHeadRecord[0].middle_name + ' ' + familyHeadRecord[0].last_name
        this.viewGUID = familyHeadRecord[0].dafac_guid
        console.log("SURPRISE MADAFAKA", familyHeadRecord)
      }
    } else if (this.path[2] == "aics-registration") {
      var familyHeadRecord = this.listOfFilter
      familyHeadRecord = this.listOfFilter.filter((data: any) => 
      data.person_guid == person_guid)
      if (!familyHeadRecord.length) {
        this.router.navigate(["/" + this.path[0] + "/" + this.path[1] + "/" + this.path[2] + "/add-form/aics-registration-form/" + person_guid])
      } else {
        this.showAlert = true;
        this.fullName = familyHeadRecord[0].first_name + ' ' + familyHeadRecord[0].middle_name + ' ' + familyHeadRecord[0].last_name
        this.viewGUID = familyHeadRecord[0].aics_guid
        console.log("SURPRISE MADAFAKA", familyHeadRecord)
      }
    } else if (this.path[2] == "osca-registration") {
      var familyHeadRecord = this.listOfFilter
      familyHeadRecord = this.listOfFilter.filter((data: any) => 
      data.person_guid == person_guid)
      if (!familyHeadRecord.length) {
        this.router.navigate(["/" + this.path[0] + "/" + this.path[1] + "/" + this.path[2] + "/add-form/osca-registration-form/" + person_guid])
      } else {
        this.showAlert = true;
        this.fullName = familyHeadRecord[0].first_name + ' ' + familyHeadRecord[0].middle_name + ' ' + familyHeadRecord[0].last_name
        this.viewGUID = familyHeadRecord[0].osca_registration_guid
        console.log("SURPRISE MADAFAKA", familyHeadRecord)
      }
    } else if (this.path[2] == "pwd-registration") {
      var familyHeadRecord = this.listOfFilter
      familyHeadRecord = this.listOfFilter.filter((data: any) => 
      data.person_guid == person_guid)
      if (!familyHeadRecord.length) {
        this.router.navigate(["/" + this.path[0] + "/" + this.path[1] + "/" + this.path[2] + "/add-form/pwd-registration-form/" + person_guid])
      } else {
        this.showAlert = true;
        this.fullName = familyHeadRecord[0].first_name + ' ' + familyHeadRecord[0].middle_name + ' ' + familyHeadRecord[0].last_name
        this.viewGUID = familyHeadRecord[0].pwd_guid
        console.log("SURPRISE MADAFAKA", familyHeadRecord)
      }
    } else if (this.path[2] == "solo-parent-registration") {
      var familyHeadRecord = this.listOfFilter
      familyHeadRecord = this.listOfFilter.filter((data: any) => 
      data.person_guid == person_guid)
      if (!familyHeadRecord.length) {
        this.router.navigate(["/" + this.path[0] + "/" + this.path[1] + "/" + this.path[2] + "/add-form/solo-parent-registration-form/" + person_guid])
      } else {
        this.showAlert = true;
        this.fullName = familyHeadRecord[0].first_name + ' ' + familyHeadRecord[0].middle_name + ' ' + familyHeadRecord[0].last_name
        this.viewGUID = familyHeadRecord[0].solo_parent_guid
        console.log("SURPRISE MADAFAKA", familyHeadRecord)
      }
    } else if (this.path[2] == "child-info-registration") {
      var familyHeadRecord = this.listOfFilter
      familyHeadRecord = this.listOfFilter.filter((data: any) => 
      data.person_guid == person_guid)
      if (!familyHeadRecord.length) {
        this.router.navigate(["/" + this.path[0] + "/" + this.path[1] + "/" + this.path[2] + "/add-form/child-info-registration-form/" + person_guid])
      } else {
        this.showAlert = true;
        this.fullName = familyHeadRecord[0].first_name + ' ' + familyHeadRecord[0].middle_name + ' ' + familyHeadRecord[0].last_name
        this.viewGUID = familyHeadRecord[0].child_info_guid
        console.log("SURPRISE MADAFAKA", familyHeadRecord)
      }
    } else if (this.path[2] == "daycare-center") {
      var familyHeadRecord = this.listOfFilter
      familyHeadRecord = this.listOfFilter.filter((data: any) => 
      data.person_guid == person_guid)
      if (!familyHeadRecord.length) {
        this.router.navigate(["/" + this.path[0] + "/" + this.path[1] + "/" + this.path[2] + "/add-form/daycare-center-registration-form/" + person_guid])
      } else {
        this.showAlert = true;
        this.fullName = familyHeadRecord[0].first_name + ' ' + familyHeadRecord[0].middle_name + ' ' + familyHeadRecord[0].last_name
        this.viewGUID = familyHeadRecord[0].daycare_center_guid
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
      if (this.path[2] == "fc-registration") {
        this.familyService.getHistoryLogs(this.viewGUID).subscribe(data => {
          this.panel = data;
          this.isLoadingHistory = false;
          console.log('Drawer(Template) open', data);
        })
      } else if (this.path[2] == "dafac-registration") {
        this.dafacService.getHistoryLogs(this.viewGUID).subscribe(data => {
          this.panel = data;
          this.isLoadingHistory = false;
          console.log('Drawer(Template) open', data);
        })
      } else if (this.path[2] == "aics-registration") {
        this.aicsService.getHistoryLogs(this.viewGUID).subscribe(data => {
          this.panel = data;
          this.isLoadingHistory = false;
          console.log('Drawer(Template) open', this.viewGUID);
        })
      } else if (this.path[2] == "osca-registration") {
        this.oscaRegistrationService.getHistoryLogs(this.viewGUID).subscribe(data => {
          this.panel = data;
          this.isLoadingHistory = false;
          console.log('Drawer(Template) open', this.viewGUID);
        })
      } else if (this.path[2] == "pwd-registration") {
        this.pwdService.getHistoryLogs(this.viewGUID).subscribe(data => {
          this.panel = data;
          this.isLoadingHistory = false;
          console.log('Drawer(Template) open', this.viewGUID);
        })
      } else if (this.path[2] == "solo-parent-registration") {
        this.soloParentService.getHistoryLogs(this.viewGUID).subscribe(data => {
          this.panel = data;
          this.isLoadingHistory = false;
          console.log('Drawer(Template) open', this.viewGUID);
        })
      } else if (this.path[2] == "child-info-registration") {
        this.childInfoService.getHistoryLogs(this.viewGUID).subscribe(data => {
          this.panel = data;
          this.isLoadingHistory = false;
          console.log('Drawer(Template) open', this.viewGUID);
        })
      } else if (this.path[2] == "daycare-center") {
        this.childInfoService.getHistoryLogs(this.viewGUID).subscribe(data => {
          this.panel = data;
          this.isLoadingHistory = false;
          console.log('Drawer(Template) open', this.viewGUID);
        })
      }
    });

    drawerRef.afterClose.subscribe(() => {
      // console.log('Drawer(Template) close');
    });
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
