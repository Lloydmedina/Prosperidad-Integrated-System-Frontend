import { DatePipe } from '@angular/common';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NzDrawerRef, NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AicsIntakeService } from 'src/core/services/aics-intake/aics-intake.service';
import { AicsService } from 'src/core/services/aics/aics.service';
import { ChildInfoService } from 'src/core/services/child-info/child-info.service';
import { ChildIntakeService } from 'src/core/services/child-intake/child-intake.service';
import { DafacIntakeService } from 'src/core/services/dafac-intake/dafac-intake.service';
import { DafacService } from 'src/core/services/dafac/dafac.service';
import { FamilyCompositionService } from 'src/core/services/family-composition/family-composition.service';
import { GeneralIntakeService } from 'src/core/services/general-intake/general-intake.service';
import { OscaIntakeService } from 'src/core/services/osca-intake/osca-intake.service';
import { OscaService } from 'src/core/services/osca/osca.service';
import { PathsegmentService } from 'src/core/services/pathsegment/pathsegment.service';
import { PwdIntakeService } from 'src/core/services/pwd-intake/pwd-intake.service';
import { PwdService } from 'src/core/services/pwd/pwd.service';
import { SoloParentIntakeService } from 'src/core/services/solo-parent-intake/solo-parent-intake.service';
import { SoloParentService } from 'src/core/services/solo-parent/solo-parent.service';

@Component({
  selector: 'app-fc-list-template',
  templateUrl: './fc-list-template.component.html',
  styleUrls: ['./fc-list-template.component.scss']
})
export class FcListTemplateComponent implements OnInit {

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
    private familyService: FamilyCompositionService,
    private dafacService: DafacService,
    private aicsService: AicsService,
    private oscaService: OscaService,
    private spService: SoloParentService,
    private pwdService: PwdService,
    private childInfoService: ChildInfoService,
    private generalIntakeService: GeneralIntakeService,
    private dafacIntakeService: DafacIntakeService,
    private aicsIntakeService: AicsIntakeService,
    private oscaIntakeService: OscaIntakeService,
    private spIntakeService: SoloParentIntakeService,
    private pwdIntakeService: PwdIntakeService,
    private childIntakeService: ChildIntakeService,
    private notification: NzNotificationService,
    private pathService: PathsegmentService,
    private drawerService: NzDrawerService
  ) { }

  ngOnInit() {
    this.path = this.pathService.getPath()

    if (this.path[2] == 'fc-intake') {
      this.familyService.getFamilyComposition().subscribe(data => {
        this.listOfData = data[0];

        this.fcList = this.listOfData
        this.suggestions = data[2]
        this.isLoading = false;
      })
      this.generalIntakeService.getGeneralIntake().subscribe(async data => {
        this.listOfFilter = data[0];

        this.fcList = this.listOfFilter
        this.suggestions = data[2]
        this.isLoading = false;
        console.log("FILTER", this.listOfFilter)
      })
    } else if (this.path[2] == 'dafac-intake') {
      this.dafacService.getDafac().subscribe(data => {
        this.listOfData = data[0];

        this.fcList = this.listOfData
        this.suggestions = data[2]
        this.isLoading = false;
      })
      this.dafacIntakeService.getDafacIntake().subscribe(async data => {
        this.listOfFilter = data[0];

        this.fcList = this.listOfFilter
        this.suggestions = data[2]
        this.isLoading = false;
        console.log("FILTER", this.listOfFilter)
      })
    } else if (this.path[2] == 'aics-intake') {
      this.aicsService.getAics().subscribe(data => {
        this.listOfData = data[0];

        this.fcList = this.listOfData
        this.suggestions = data[2]
        this.isLoading = false;
      })
      this.aicsIntakeService.getAicsIntake().subscribe(async data => {
        this.listOfFilter = data[0];

        this.fcList = this.listOfFilter
        this.suggestions = data[2]
        this.isLoading = false;
        console.log("FILTER", this.listOfFilter)
      })
    } else if (this.path[2] == 'osca-intake') {
      this.oscaService.getOsca().subscribe(data => {
        this.listOfData = data[0];

        this.fcList = this.listOfData
        this.suggestions = data[2]
        this.isLoading = false;
      })
      this.oscaIntakeService.getOscaIntake().subscribe(async data => {
        this.listOfFilter = data[0];

        this.fcList = this.listOfFilter
        this.suggestions = data[2]
        this.isLoading = false;
        console.log("FILTER", this.listOfFilter)
      })
    } else if (this.path[2] == 'solo-parent-intake') {
      this.spService.getSoloParent().subscribe(data => {
        this.listOfData = data[0];

        this.fcList = this.listOfData
        this.suggestions = data[2]
        this.isLoading = false;
      })
      this.spIntakeService.getSoloParentIntake().subscribe(async data => {
        this.listOfFilter = data[0];

        this.fcList = this.listOfFilter
        this.suggestions = data[2]
        this.isLoading = false;
        console.log("FILTER", this.listOfFilter)
      })
    } else if (this.path[2] == 'pwd-intake') {
      this.pwdService.getPwd().subscribe(data => {
        this.listOfData = data[0];

        this.fcList = this.listOfData
        this.suggestions = data[2]
        this.isLoading = false;
      })
      this.pwdIntakeService.getPwdIntake().subscribe(async data => {
        this.listOfFilter = data[0];

        this.fcList = this.listOfFilter
        this.suggestions = data[2]
        this.isLoading = false;
        console.log("FILTER", this.listOfFilter)
      })
    } else if (this.path[2] == 'child-info-intake') {
      this.childInfoService.getChildInfo().subscribe(data => {
        this.listOfData = data[0];

        this.fcList = this.listOfData
        this.suggestions = data[2]
        this.isLoading = false;
      })
      this.childIntakeService.getChildIntake().subscribe(async data => {
        this.listOfFilter = data[0];

        this.fcList = this.listOfFilter
        this.suggestions = data[2]
        this.isLoading = false;
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
    
  //   this.familyService.getAllFamilyComposition().subscribe(async data => {
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
  //         nzContent: this.searchData.first_name + " " + this.searchData.middle_name + " " + this.searchData.last_name +  " is not on the family composition list.",
  //         nzOnCancel:() => {
  //           if (this.path[2] == "fc-intake") { 
  //             this.familyService.getFamilyComposition().subscribe(data => {
  //               this.listOfData = data[0];
  //             })
  //           } else if (this.path[2] == "dafac-intake") {
  //             this.dafacService.getDafac().subscribe(data => {
  //               this.listOfData = data[0];
  //             })
  //           } else if (this.path[2] == "aics-intake") {
  //             this.aicsService.getAics().subscribe(data => {
  //               this.listOfData = data[0];
  //             })
  //           } else if (this.path[2] == "osca-intake") {
  //             this.oscaService.getOsca().subscribe(data => {
  //               this.listOfData = data[0];
  //             })
  //           } else if (this.path[2] == "solo-parent-intake") {
  //             this.spService.getSoloParent().subscribe(data => {
  //               this.listOfData = data[0];
  //             })
  //           } else if (this.path[2] == "pwd-intake") {
  //             this.pwdService.getPwd().subscribe(data => {
  //               this.listOfData = data[0];
  //             })
  //           } else if (this.path[2] == "child-info-intake") {
  //             this.childInfoService.getChildInfo().subscribe(data => {
  //               this.listOfData = data[0];
  //             })
  //           }
  //         },
  //         nzOnOk: () => {
  //           if (this.path[2] == "fc-intake") {
  //             this.router.navigate(["/" + this.path[0] + "/" + this.path[1] + "/" + this.path[2] + "/add-form/family-composition-add"], { queryParams: { firstname: this.searchData.first_name, middlename: this.searchData.middle_name, lastname: this.searchData.last_name, suffix_name: this.searchData.suffix, birth_date: this.searchData.birth_date } })
  //           } else if (this.path[2] == "dafac-intake") {
  //             this.router.navigate(["/" + this.path[0] + "/" + this.path[1] + "/" + this.path[2] + "/add-form/dafac-add"], { queryParams: { firstname: this.searchData.first_name, middlename: this.searchData.middle_name, lastname: this.searchData.last_name, suffix_name: this.searchData.suffix, birth_date: this.searchData.birth_date } })
  //           } else if (this.path[2] == "aics-intake") {
  //             this.router.navigate(["/" + this.path[0] + "/" + this.path[1] + "/" + this.path[2] + "/add-form/aics-add"], { queryParams: { firstname: this.searchData.first_name, middlename: this.searchData.middle_name, lastname: this.searchData.last_name, suffix_name: this.searchData.suffix, birth_date: this.searchData.birth_date } })
  //           } else if (this.path[2] == "osca-intake") {
  //             this.router.navigate(["/" + this.path[0] + "/" + this.path[1] + "/" + this.path[2] + "/add-form/osca-add"], { queryParams: { firstname: this.searchData.first_name, middlename: this.searchData.middle_name, lastname: this.searchData.last_name, suffix_name: this.searchData.suffix, birth_date: this.searchData.birth_date } })
  //           } else if (this.path[2] == "solo-parent-intake") {
  //             this.router.navigate(["/" + this.path[0] + "/" + this.path[1] + "/" + this.path[2] + "/add-form/solo-parent-add"], { queryParams: { firstname: this.searchData.first_name, middlename: this.searchData.middle_name, lastname: this.searchData.last_name, suffix_name: this.searchData.suffix, birth_date: this.searchData.birth_date } })
  //           } else if (this.path[2] == "pwd-intake") {
  //             this.router.navigate(["/" + this.path[0] + "/" + this.path[1] + "/" + this.path[2] + "/add-form/pwd-add"], { queryParams: { firstname: this.searchData.first_name, middlename: this.searchData.middle_name, lastname: this.searchData.last_name, suffix_name: this.searchData.suffix, birth_date: this.searchData.birth_date } })
  //           } else if (this.path[2] == "child-info-intake") {
  //             this.router.navigate(["/" + this.path[0] + "/" + this.path[1] + "/" + this.path[2] + "/add-form/child-add"], { queryParams: { firstname: this.searchData.first_name, middlename: this.searchData.middle_name, lastname: this.searchData.last_name, suffix_name: this.searchData.suffix, birth_date: this.searchData.birth_date } })
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
  //             // this.personService.activatePerson(this.listOfData[0].person_guid, this.listOfData[0]).subscribe(async data => {
  //             //   if (this.path[2] == "fc-registration") {
  //             //     this.router.navigate(["/main/social-welfare/fc-registration/add-form/family-composition-form/" + this.listOfData[0].person_guid])
  //             //   } else if (this.path[2] == "general-intake") {
  //             //     this.router.navigate(["/main/social-welfare/general-intake/add-form/general-intake-form/" + this.listOfData[0].person_guid])
  //             //   }
  //             //   this.notification.create(
  //             //     "success",
  //             //     'Successfully Activated',
  //             //     'Person Record has successfully activated.'
  //             //   );
  //             // })
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
    if (this.path[2] == "fc-intake") {
      if (value == true) {
        this.familyService.getAllFamilyComposition().subscribe(data => {
          this.listOfData = data[0];
          this.isLoading = false;
        })
      } else {
        this.familyService.getFamilyComposition().subscribe(async data => {
          this.listOfData = data[0];
          this.isLoading = false;
        })
      }
    } else if (this.path[2] == "dafac-intake") {
      if (value == true) {
        this.dafacService.getAllDafac().subscribe(data => {
          this.listOfData = data[0];
          this.isLoading = false;
        })
      } else {
        this.dafacService.getDafac().subscribe(async data => {
          this.listOfData = data[0];
          this.isLoading = false;
        })
      }
    } else if (this.path[2] == "aics-intake") {
      if (value == true) {
        this.aicsService.getAllAics().subscribe(data => {
          this.listOfData = data[0];
          this.isLoading = false;
        })
      } else {
        this.aicsService.getAics().subscribe(async data => {
          this.listOfData = data[0];
          this.isLoading = false;
        })
      }
    } else if (this.path[2] == "osca-intake") {
      if (value == true) {
        this.oscaService.getAllOsca().subscribe(data => {
          this.listOfData = data[0];
          this.isLoading = false;
        })
      } else {
        this.oscaService.getOsca().subscribe(async data => {
          this.listOfData = data[0];
          this.isLoading = false;
        })
      }
    } else if (this.path[2] == "solo-parent-intake") {
      if (value == true) {
        this.spService.getAllSoloParent().subscribe(data => {
          this.listOfData = data[0];
          this.isLoading = false;
        })
      } else {
        this.spService.getSoloParent().subscribe(async data => {
          this.listOfData = data[0];
          this.isLoading = false;
        })
      }
    } else if (this.path[2] == "pwd-intake") {
      if (value == true) {
        this.pwdService.getAllPwd().subscribe(data => {
          this.listOfData = data[0];
          this.isLoading = false;
        })
      } else {
        this.pwdService.getPwd().subscribe(async data => {
          this.listOfData = data[0];
          this.isLoading = false;
        })
      }
    } else if (this.path[2] == "child-info-intake") {
      if (value == true) {
        this.childInfoService.getAllChildInfo().subscribe(data => {
          this.listOfData = data[0];
          this.isLoading = false;
        })
      } else {
        this.childInfoService.getChildInfo().subscribe(async data => {
          this.listOfData = data[0];
          this.isLoading = false;
        })
      }
    } 
  }

  showAlert = false;
  fullName: any;
  viewGUID: any;
  triggerSelect(person_guid: any) {
    if (this.path[2] == "fc-intake") {
      var clientRecord = this.listOfFilter
      clientRecord = this.listOfFilter.filter((data: any) => 
      data.person_guid == person_guid)
      if (!clientRecord.length) {
        this.router.navigate(["/" + this.path[0] + "/" + this.path[1] + "/" + this.path[2] + "/add-form/fc-intake-form/" + person_guid])
      } else {
        this.showAlert = true;
        this.fullName = clientRecord[0].first_name + ' ' + clientRecord[0].middle_name + ' ' + clientRecord[0].last_name
        this.viewGUID = clientRecord[0].general_intake_guid
        console.log("SURPRISE MADAFAKA", clientRecord)
      }
    } else if (this.path[2] == "dafac-intake") {
      var clientRecord = this.listOfFilter
      clientRecord = this.listOfFilter.filter((data: any) => 
      data.person_guid == person_guid)
      if (!clientRecord.length) {
        this.router.navigate(["/" + this.path[0] + "/" + this.path[1] + "/" + this.path[2] + "/add-form/dafac-intake-form/" + person_guid])
      } else {
        this.showAlert = true;
        this.fullName = clientRecord[0].first_name + ' ' + clientRecord[0].middle_name + ' ' + clientRecord[0].last_name
        this.viewGUID = clientRecord[0].dafac_intake_guid
        console.log("SURPRISE MADAFAKA", clientRecord)
      }
    } else if (this.path[2] == "aics-intake") {
      var clientRecord = this.listOfFilter
      clientRecord = this.listOfFilter.filter((data: any) => 
      data.person_guid == person_guid)
      if (!clientRecord.length) {
        this.router.navigate(["/" + this.path[0] + "/" + this.path[1] + "/" + this.path[2] + "/add-form/aics-intake-form/" + person_guid])
      } else {
        this.showAlert = true;
        this.fullName = clientRecord[0].first_name + ' ' + clientRecord[0].middle_name + ' ' + clientRecord[0].last_name
        this.viewGUID = clientRecord[0].aics_intake_guid
        console.log("SURPRISE MADAFAKA", clientRecord)
      }
    } else if (this.path[2] == "osca-intake") {
      var clientRecord = this.listOfFilter
      clientRecord = this.listOfFilter.filter((data: any) => 
      data.person_guid == person_guid)
      if (!clientRecord.length) {
        this.router.navigate(["/" + this.path[0] + "/" + this.path[1] + "/" + this.path[2] + "/add-form/osca-intake-form/" + person_guid])
      } else {
        this.showAlert = true;
        this.fullName = clientRecord[0].first_name + ' ' + clientRecord[0].middle_name + ' ' + clientRecord[0].last_name
        this.viewGUID = clientRecord[0].osca_intake_guid
        console.log("SURPRISE MADAFAKA", clientRecord)
      }
    } else if (this.path[2] == "solo-parent-intake") {
      var clientRecord = this.listOfFilter
      clientRecord = this.listOfFilter.filter((data: any) => 
      data.person_guid == person_guid)
      if (!clientRecord.length) {
        this.router.navigate(["/" + this.path[0] + "/" + this.path[1] + "/" + this.path[2] + "/add-form/solo-parent-intake-form/" + person_guid])
      } else {
        this.showAlert = true;
        this.fullName = clientRecord[0].first_name + ' ' + clientRecord[0].middle_name + ' ' + clientRecord[0].last_name
        this.viewGUID = clientRecord[0].solo_parent_intake_guid
        console.log("SURPRISE MADAFAKA", clientRecord)
      }
    } else if (this.path[2] == "pwd-intake") {
      var clientRecord = this.listOfFilter
      clientRecord = this.listOfFilter.filter((data: any) => 
      data.person_guid == person_guid)
      if (!clientRecord.length) {
        this.router.navigate(["/" + this.path[0] + "/" + this.path[1] + "/" + this.path[2] + "/add-form/pwd-intake-form/" + person_guid])
      } else {
        this.showAlert = true;
        this.fullName = clientRecord[0].first_name + ' ' + clientRecord[0].middle_name + ' ' + clientRecord[0].last_name
        this.viewGUID = clientRecord[0].pwd_intake_guid
        console.log("SURPRISE MADAFAKA", clientRecord)
      }
    } else if (this.path[2] == "child-info-intake") {
      var clientRecord = this.listOfFilter
      clientRecord = this.listOfFilter.filter((data: any) => 
      data.person_guid == person_guid)
      if (!clientRecord.length) {
        this.router.navigate(["/" + this.path[0] + "/" + this.path[1] + "/" + this.path[2] + "/add-form/child-intake-form/" + person_guid])
      } else {
        this.showAlert = true;
        this.fullName = clientRecord[0].first_name + ' ' + clientRecord[0].middle_name + ' ' + clientRecord[0].last_name
        this.viewGUID = clientRecord[0].pwd_intake_guid
        console.log("SURPRISE MADAFAKA", clientRecord)
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
      if (this.path[2] == "fc-intake") {
        this.generalIntakeService.getHistoryLogs(this.viewGUID).subscribe(data => {
          this.panel = data;
          this.isLoadingHistory = false;
          console.log('Drawer(Template) open', data);
        })
      } else if (this.path[2] == "dafac-intake") {
        this.dafacIntakeService.getHistoryLogs(this.viewGUID).subscribe(data => {
          this.panel = data;
          this.isLoadingHistory = false;
          console.log('Drawer(Template) open', data);
        })
      } else if (this.path[2] == "aics-intake") {
        this.aicsIntakeService.getHistoryLogs(this.viewGUID).subscribe(data => {
          this.panel = data;
          this.isLoadingHistory = false;
          console.log('Drawer(Template) open', data);
        })
      } else if (this.path[2] == "osca-intake") {
        this.oscaIntakeService.getHistoryLogs(this.viewGUID).subscribe(data => {
          this.panel = data;
          this.isLoadingHistory = false;
          console.log('Drawer(Template) open', data);
        })
      } else if (this.path[2] == "solo-parent-intake") {
        this.spIntakeService.getHistoryLogs(this.viewGUID).subscribe(data => {
          this.panel = data;
          this.isLoadingHistory = false;
          console.log('Drawer(Template) open', data);
        })
      } else if (this.path[2] == "pwd-intake") {
        this.pwdIntakeService.getHistoryLogs(this.viewGUID).subscribe(data => {
          this.panel = data;
          this.isLoadingHistory = false;
          console.log('Drawer(Template) open', data);
        })
      } else if (this.path[2] == "child-info-intake") {
        this.childIntakeService.getHistoryLogs(this.viewGUID).subscribe(data => {
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
      // ALL
      if (this.path[2] == 'fc-intake') {
        this.generalIntakeService.getAllGeneralIntake().subscribe(async data => {
          this.listOfFilter = data[0];
  
          this.fcList = this.listOfFilter
          this.suggestions = data[2]
          this.isLoading = false;
          console.log("FILTER", this.listOfFilter)
        })
      } else if (this.path[2] == 'dafac-intake') {
        this.dafacIntakeService.getAllDafacIntake().subscribe(async data => {
          this.listOfFilter = data[0];
  
          this.fcList = this.listOfFilter
          this.suggestions = data[2]
          this.isLoading = false;
          console.log("FILTER", this.listOfFilter)
        })
      } else if (this.path[2] == 'aics-intake') {
        this.aicsIntakeService.getAllAicsIntake().subscribe(async data => {
          this.listOfFilter = data[0];
  
          this.fcList = this.listOfFilter
          this.suggestions = data[2]
          this.isLoading = false;
          console.log("FILTER", this.listOfFilter)
        })
      } else if (this.path[2] == 'osca-intake') {
        this.oscaIntakeService.getAllOscaIntake().subscribe(async data => {
          this.listOfFilter = data[0];
  
          this.fcList = this.listOfFilter
          this.suggestions = data[2]
          this.isLoading = false;
          console.log("FILTER", this.listOfFilter)
        })
      } else if (this.path[2] == 'solo-parent-intake') {
        this.spIntakeService.getAllSoloParentIntake().subscribe(async data => {
          this.listOfFilter = data[0];
  
          this.fcList = this.listOfFilter
          this.suggestions = data[2]
          this.isLoading = false;
          console.log("FILTER", this.listOfFilter)
        })
      } else if (this.path[2] == 'pwd-intake') {
        this.pwdIntakeService.getAllPwdIntake().subscribe(async data => {
          this.listOfFilter = data[0];
  
          this.fcList = this.listOfFilter
          this.suggestions = data[2]
          this.isLoading = false;
          console.log("FILTER", this.listOfFilter)
        })
      } else if (this.path[2] == 'child-info-intake') {
        this.childIntakeService.getAllChildIntake().subscribe(async data => {
          this.listOfFilter = data[0];
  
          this.fcList = this.listOfFilter
          this.suggestions = data[2]
          this.isLoading = false;
          console.log("FILTER", this.listOfFilter)
        })
      }
    } else {
      this.isLoading = true
      if (this.path[2] == 'fc-intake') {
        this.generalIntakeService.getGeneralIntake().subscribe(async data => {
          this.listOfFilter = data[0];
  
          this.fcList = this.listOfFilter
          this.suggestions = data[2]
          this.isLoading = false;
          console.log("FILTER", this.listOfFilter)
        })
      } else if (this.path[2] == 'dafac-intake') {
        this.dafacIntakeService.getDafacIntake().subscribe(async data => {
          this.listOfFilter = data[0];
  
          this.fcList = this.listOfFilter
          this.suggestions = data[2]
          this.isLoading = false;
          console.log("FILTER", this.listOfFilter)
        })
      } else if (this.path[2] == 'aics-intake') {
        this.aicsIntakeService.getAicsIntake().subscribe(async data => {
          this.listOfFilter = data[0];
  
          this.fcList = this.listOfFilter
          this.suggestions = data[2]
          this.isLoading = false;
          console.log("FILTER", this.listOfFilter)
        })
      } else if (this.path[2] == 'osca-intake') {
        this.oscaIntakeService.getOscaIntake().subscribe(async data => {
          this.listOfFilter = data[0];
  
          this.fcList = this.listOfFilter
          this.suggestions = data[2]
          this.isLoading = false;
          console.log("FILTER", this.listOfFilter)
        })
      } else if (this.path[2] == 'solo-parent-intake') {
        this.spIntakeService.getSoloParentIntake().subscribe(async data => {
          this.listOfFilter = data[0];
  
          this.fcList = this.listOfFilter
          this.suggestions = data[2]
          this.isLoading = false;
          console.log("FILTER", this.listOfFilter)
        })
      } else if (this.path[2] == 'pwd-intake') {
        this.pwdIntakeService.getPwdIntake().subscribe(async data => {
          this.listOfFilter = data[0];
  
          this.fcList = this.listOfFilter
          this.suggestions = data[2]
          this.isLoading = false;
          console.log("FILTER", this.listOfFilter)
        })
      } else if (this.path[2] == 'child-info-intake') {
        this.childIntakeService.getChildIntake().subscribe(async data => {
          this.listOfFilter = data[0];
  
          this.fcList = this.listOfFilter
          this.suggestions = data[2]
          this.isLoading = false;
          console.log("FILTER", this.listOfFilter)
        })
      }
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
    if (this.path[2] == 'fc-intake') {
      this.familyService.getFamilyComposition().subscribe(data => {
        this.listOfData = data[0];

        this.fcList = this.listOfData
        this.suggestions = data[2]
        this.isLoading = false;
      })
      this.generalIntakeService.getGeneralIntake().subscribe(async data => {
        this.listOfFilter = data[0];

        this.fcList = this.listOfFilter
        this.suggestions = data[2]
        this.isLoading = false;
        console.log("FILTER", this.listOfFilter)
      })
    } else if (this.path[2] == 'dafac-intake') {
      this.dafacService.getDafac().subscribe(data => {
        this.listOfData = data[0];

        this.fcList = this.listOfData
        this.suggestions = data[2]
        this.isLoading = false;
      })
      this.dafacIntakeService.getDafacIntake().subscribe(async data => {
        this.listOfFilter = data[0];

        this.fcList = this.listOfFilter
        this.suggestions = data[2]
        this.isLoading = false;
        console.log("FILTER", this.listOfFilter)
      })
    } else if (this.path[2] == 'aics-intake') {
      this.aicsService.getAics().subscribe(data => {
        this.listOfData = data[0];

        this.fcList = this.listOfData
        this.suggestions = data[2]
        this.isLoading = false;
      })
      this.aicsIntakeService.getAicsIntake().subscribe(async data => {
        this.listOfFilter = data[0];

        this.fcList = this.listOfFilter
        this.suggestions = data[2]
        this.isLoading = false;
        console.log("FILTER", this.listOfFilter)
      })
    } else if (this.path[2] == 'osca-intake') {
      this.oscaService.getOsca().subscribe(data => {
        this.listOfData = data[0];

        this.fcList = this.listOfData
        this.suggestions = data[2]
        this.isLoading = false;
      })
      this.oscaIntakeService.getOscaIntake().subscribe(async data => {
        this.listOfFilter = data[0];

        this.fcList = this.listOfFilter
        this.suggestions = data[2]
        this.isLoading = false;
        console.log("FILTER", this.listOfFilter)
      })
    } else if (this.path[2] == 'solo-parent-intake') {
      this.spService.getSoloParent().subscribe(data => {
        this.listOfData = data[0];

        this.fcList = this.listOfData
        this.suggestions = data[2]
        this.isLoading = false;
      })
      this.spIntakeService.getSoloParentIntake().subscribe(async data => {
        this.listOfFilter = data[0];

        this.fcList = this.listOfFilter
        this.suggestions = data[2]
        this.isLoading = false;
        console.log("FILTER", this.listOfFilter)
      })
    } else if (this.path[2] == 'pwd-intake') {
      this.pwdService.getPwd().subscribe(data => {
        this.listOfData = data[0];

        this.fcList = this.listOfData
        this.suggestions = data[2]
        this.isLoading = false;
      })
      this.pwdIntakeService.getPwdIntake().subscribe(async data => {
        this.listOfFilter = data[0];

        this.fcList = this.listOfFilter
        this.suggestions = data[2]
        this.isLoading = false;
        console.log("FILTER", this.listOfFilter)
      })
    } else if (this.path[2] == 'child-info-intake') {
      this.childInfoService.getChildInfo().subscribe(data => {
        this.listOfData = data[0];

        this.fcList = this.listOfData
        this.suggestions = data[2]
        this.isLoading = false;
      })
      this.childIntakeService.getChildIntake().subscribe(async data => {
        this.listOfFilter = data[0];

        this.fcList = this.listOfFilter
        this.suggestions = data[2]
        this.isLoading = false;
        console.log("FILTER", this.listOfFilter)
      })
    }
  }
}
