import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AicsService } from 'src/core/services/aics/aics.service';
import { CheckPrivilegeService } from 'src/core/services/check-privilege/check-privilege.service';
import { FinancialAssistanceService } from 'src/core/services/financial-assistance/financial-assistance.service';

@Component({
  selector: 'app-financial-assistance-list',
  templateUrl: './financial-assistance-list.component.html',
  styleUrls: ['./financial-assistance-list.component.scss']
})
export class FinancialAssistanceListComponent implements OnInit {

  listOfData: any[] = [];
  listOfDataDetails: any[] = [];
  isLoading = true;
  expandSet = new Set<number>();
  expandSetDetails = new Set<number>();
  valueClick: boolean = false;
  valueClickDetails: boolean = false;
  listOfRecommendations: any;
  recDefaultValue: any = 1;

  fcList: any[] = [];
  filteredOptions: any = [];
  suggestions: any = [];
  formOptions: any = [];
  
  control: any;
  editCss = "actionEdit";
  deleteCss = "actionDelete";

  constructor(
    private router: Router,
    private modal: NzModalService,
    private financialAssistanceService: FinancialAssistanceService,
    private aicsService: AicsService,
    private notification: NzNotificationService,
    private checkPriv: CheckPrivilegeService
  ) { }

  ngOnInit() {
    // this.control = this.checkPriv.checkPrivilege("/main/social-welfare/aics-voucher")
    // if (this.control.edit == true) {
    //   this.editCss = "disbaled"
    // } else if (this.control.delete == true) {
    //   this.deleteCss = "disabled"
    // } else {
    //   this.editCss = "actionEdit"
    //   this.deleteCss = "actionDelete"
    // }
    this.aicsService.getRecommendations().subscribe(data => {
      this.listOfRecommendations = data;
      this.isLoading = false;
      // console.log("bushet", data)
    })
    localStorage.setItem("financialType", this.recDefaultValue.toString());
    this.financialAssistanceService.getFinancialAssistance(1,this.recDefaultValue, "", "", "","", "",0, "", "", "").subscribe(async data => {
      this.listOfData = data[0];
      
      this.fcList = this.listOfData
      this.formOptions = data[1]
      this.suggestions = data[2]
      this.isLoading = false;
    })
  }

  generate(value: any) {
    value.filter_type = Number(value.filter_type)
    localStorage.setItem('filterValue', JSON.stringify(value));
    localStorage.setItem("financialType", this.recDefaultValue.toString());
    this.isLoading = true;
    this.financialAssistanceService.getFinancialAssistance(value.filter_type, this.recDefaultValue, value.thisMonth, value.thisYear, value.monthly, value.monthlyYear, value.yearQuarterly, value.quarter, value.yearly, value.from, value.to).subscribe(data => {
      // console.log("GENERATED", data)
      this.isLoading = false;
      this.listOfData = data[0]
      this.fcList = this.listOfData
      this.suggestions = data[2]
    })
    
  }

  statusSwitch = true;
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
      // this.financialAssistanceService.getFinancialAssistance(0).subscribe(data => {
      //   this.isLoading = false
      //   this.listOfData = data[0]
      //   this.fcList = this.listOfData
      // })
    } else {
      this.isLoading = true
      // this.financialAssistanceService.getFinancialAssistance(0).subscribe(data => {
      //   this.isLoading = false
      //   this.listOfData = data[0]
      //   this.fcList = this.listOfData
      // })
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

  clearSearch(){
    this.searchModel = ""
    this.isLoading = true
    var data = JSON.parse(localStorage.getItem("filterValue") || '{}');
    console.log("sample", data)
    this.financialAssistanceService.getFinancialAssistance(data.filter_type, this.recDefaultValue, data.thisMonth, data.thisYear, data.monthly, data.monthlyYear, data.yearQuarterly, data.quarter, data.yearly, data.from, data.to).subscribe((value:any) => {
      this.isLoading = false
      this.listOfData = value[0]
      this.fcList = this.listOfData
      this.suggestions = value[2]
    })
  }

  selectRecommendation(value: any) {
    this.recDefaultValue = value;
    // console.log("aye", this.recDefaultValue)
    // this.financialAssistanceService.getFinancialAssistance(this.recDefaultValue).subscribe(async data => {
    //   this.listOfData = data[0];
      
    //   this.fcList = this.listOfData
    //   this.suggestions = data[2]
    //   this.isLoading = false;
    //   // console.log("dat2", data)
    // })
  }

}
