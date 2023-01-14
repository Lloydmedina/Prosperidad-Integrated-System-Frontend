import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { CheckPrivilegeService } from 'src/core/services/check-privilege/check-privilege.service';
import { FamilyCompositionService } from 'src/core/services/family-composition/family-composition.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-family-composition-list',
  templateUrl: './family-composition-list.component.html',
  styleUrls: ['./family-composition-list.component.scss']
})
export class FamilyCompositionListComponent implements OnInit {

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
    private familyCompositionService: FamilyCompositionService,
    private notification: NzNotificationService,
    private checkPriv: CheckPrivilegeService
  ) { }

  ngOnInit() {
    this.control = this.checkPriv.checkPrivilege("/main/social-welfare/fc-registration")
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
    this.familyCompositionService.getFamilyComposition().subscribe(async data => {
      this.listOfData = data[0];

      this.fcList = this.listOfData
      this.formOptions = data[1]
      this.suggestions = data[2]
      this.isLoading = false;
      // console.log("INFO", data)
    })

    console.log('Last release timestamp is set to:', environment.timeStamp);
  }

  edit(id: any) {
    this.router.navigate(["/main/social-welfare/fc-registration/edit-form/" + id])
  }

  delete(id: any, data: any) {
    this.modal.confirm({
      nzTitle: 'Do you Want to delete these items?',
      nzContent: data.first_name + " " + data.middle_name + " " + data.last_name +  " will be deleted permanently!",
      nzOnOk: () => 
        this.familyCompositionService.deleteFamilyComposition(id).subscribe(data => {
          this.isLoading = true;
          if(data) {
            this.familyCompositionService.getFamilyComposition().subscribe(async data => {
              this.listOfData = data[0];
              this.isLoading = false;
            })
            this.notification.create(
              "success",
              'Successfully Deleted',
              'Family Composition Record has successfully deleted.'
            );
          } else {
            this.notification.create(
              "error",
              'Unsuccessfully Deleted',
              'Family Composition Record unsuccessfully deleted.'
            );
          }
        })
    });
  }

  print(id: any) {
    this.router.navigate(["/main/social-welfare/fc-registration/print-form/" + id])
  }

  onExpandChange(id: number, checked: boolean, index: any): void {
    if (checked) {
      this.expandSet.add(id);
      this.familyCompositionService.getFamilyCompositionDetails(id).subscribe(async data => {
        this.listOfDataDetails[index] = data;
      })
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
        this.familyCompositionService.getAllFamilyComposition().subscribe(data => {
          this.isLoading = false
          this.listOfData = data[0]
          this.fcList = this.listOfData
        })
      } else {
        this.isLoading = true
        this.familyCompositionService.getFamilyComposition().subscribe(data => {
          this.isLoading = false
          this.listOfData = data[0]
          this.fcList = this.listOfData
        })
      }
    } else {
      this.isLoading = true
      this.familyCompositionService.getFamilyCompositionDeletedOnly().subscribe(data => {
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
        this.familyCompositionService.getAllFamilyComposition().subscribe((value:any) => {
          this.isLoading = false
          this.listOfData = value[0]
          this.fcList = this.listOfData
          this.suggestions = value[2]
        })
      } else {
        this.familyCompositionService.getFamilyComposition().subscribe((value:any) => {
          this.isLoading = false
          this.listOfData = value[0]
          this.fcList = this.listOfData
          this.suggestions = value[2]
        })
      }
    } else {
      this.isLoading = true
      this.familyCompositionService.getFamilyCompositionDeletedOnly().subscribe(data => {
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
    this.familyCompositionService.getFamilyCompositionGenerated(value.filter_type, this.localStatusGenerate, this.localStatusGenerateDeleted, value.thisMonth, value.thisYear, value.monthly, value.monthlyYear, value.yearQuarterly, value.quarter, value.yearly, value.from, value.to).subscribe(data => {
      // console.log("GENERATED", data)
      this.isLoading = false;
      this.listOfData = data[0]
      this.fcList = this.listOfData
      this.suggestions = data[2]
    })
    
  }

}
