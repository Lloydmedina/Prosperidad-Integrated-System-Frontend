import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NzDrawerRef, NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { OscaIntakeService } from 'src/core/services/osca-intake/osca-intake.service';
import { OscaRegistrationService } from 'src/core/services/osca-registration/osca-registration.service';
import { OscaService } from 'src/core/services/osca/osca.service';
import { PathsegmentService } from 'src/core/services/pathsegment/pathsegment.service';

@Component({
  selector: 'app-sc-list-template',
  templateUrl: './sc-list-template.component.html',
  styleUrls: ['./sc-list-template.component.scss']
})
export class ScListTemplateComponent implements OnInit {

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
    private oscaService: OscaService,
    private oscaIntakeService: OscaIntakeService,
    private oscaRegistrationService: OscaRegistrationService,
    private notification: NzNotificationService,
    private pathService: PathsegmentService,
    private drawerService: NzDrawerService
  ) { }

  ngOnInit() {
    this.path = this.pathService.getPath()

    if (this.path[2] == 'osca-id') {
      this.oscaRegistrationService.getOscaRegistration().subscribe(data => {
        this.listOfData = data[0];
  
        this.fcList = this.listOfData
        this.suggestions = data[2]
        this.isLoading = false;
        // console.log("bsuhet", this.suggestions)
      })
      this.oscaService.getOsca().subscribe(async data => {
        this.listOfFilter = data[0];
        // console.log("FILTER", this.listOfFilter)
      })
    } else if (this.path[2] == 'osca-intake') {
      this.oscaRegistrationService.getOscaRegistration().subscribe(data => {
        this.listOfData = data[0];
  
        this.fcList = this.listOfData
        this.suggestions = data[2]
        this.isLoading = false;
        // console.log("bsuhet", this.suggestions)
      })
      this.oscaIntakeService.getOscaIntake().subscribe(async data => {
        this.listOfFilter = data[0];
        // console.log("FILTER", this.listOfFilter)
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

  select(value: boolean) {
    this.isLoading = true
    if (value == true) {
      this.oscaRegistrationService.getAllOscaRegistration().subscribe(data => {
        this.listOfData = data[0];
        this.isLoading = false;
      })
    } else {
      this.oscaRegistrationService.getOscaRegistration().subscribe(async data => {
        this.listOfData = data[0];
        this.isLoading = false;
      })
    }
  }

  showAlert = false;
  fullName: any;
  viewGUID: any;

  triggerSelect(person_guid: any, osca_registration_guid: any) {
    if (this.path[2] == "osca-id") {
      var familyHeadRecord = this.listOfFilter
      familyHeadRecord = this.listOfFilter.filter((data: any) => 
      data.osca_registration_guid == osca_registration_guid)
      if (!familyHeadRecord.length) {
        this.router.navigate(["/main/social-welfare/osca-id/add-form/osca-id-form/" + osca_registration_guid])
      } else {
        this.showAlert = true;
        this.fullName = familyHeadRecord[0].first_name + ' ' + familyHeadRecord[0].middle_name + ' ' + familyHeadRecord[0].last_name
        this.viewGUID = familyHeadRecord[0].osca_guid
        console.log("SURPRISE MADAFAKA", familyHeadRecord)
      }
    } else if (this.path[2] == "osca-intake") {
      var familyHeadRecord = this.listOfFilter
      familyHeadRecord = this.listOfFilter.filter((data: any) => 
      data.osca_registration_guid == osca_registration_guid)
      if (!familyHeadRecord.length) {
        this.router.navigate(["/main/social-welfare/osca-intake/add-form/osca-intake-form/" + osca_registration_guid])
      } else {
        this.showAlert = true;
        this.fullName = familyHeadRecord[0].first_name + ' ' + familyHeadRecord[0].middle_name + ' ' + familyHeadRecord[0].last_name
        this.viewGUID = familyHeadRecord[0].osca_intake_guid
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
      if (this.path[2] == "osca-id") {
        this.oscaService.getHistoryLogs(this.viewGUID).subscribe(data => {
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
      this.oscaRegistrationService.getAllOscaRegistration().subscribe(data => {
        this.isLoading = false
        this.listOfData = data[0]
        // this.fcList = this.listOfData
      })
    } else {
      this.isLoading = true
      this.oscaRegistrationService.getOscaRegistration().subscribe(data => {
        this.isLoading = false
        this.listOfData = data[0]
        // this.fcList = this.listOfData
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
    this.oscaRegistrationService.getOscaRegistration().subscribe((value:any) => {
      this.isLoading = false
      this.listOfData = value[0]
      this.fcList = this.listOfData
      this.suggestions = value[2]
    })
  }

}
