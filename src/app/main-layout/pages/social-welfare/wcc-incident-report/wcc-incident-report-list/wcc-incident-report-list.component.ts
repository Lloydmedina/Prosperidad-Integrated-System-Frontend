import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AicsService } from 'src/core/services/aics/aics.service';
import { WccIncident_reportService } from 'src/core/services/wcc/wcc-incident_report/wcc-incident_report.service';
import { WccService } from 'src/core/services/wcc/wcc-registration/wcc.service';

@Component({
  selector: 'app-wcc-incident-report-list',
  templateUrl: './wcc-incident-report-list.component.html',
  styleUrls: ['./wcc-incident-report-list.component.scss']
})
export class WccIncidentReportListComponent implements OnInit {


  listOfData: any[] = [];
  listOfDataDetails: any[] = [];
  isLoading = true;
  expandSet = new Set<number>();
  expandSetDetails = new Set<number>();
  valueClick: boolean = false;
  valueClickDetails: boolean = false;

  constructor(
    private router: Router,
    private modal: NzModalService,
    private aicsService: AicsService,
    private notification: NzNotificationService,
    private wccIRServices : WccIncident_reportService
  ) { }

  ngOnInit() {
    this.loadDatas()

  }


  loadDatas(){
    this.wccIRServices.getList().subscribe(data => {
      this.listOfData = data[0];
      this.isLoading = false;
    //  console.log(data);
    })
  }
  edit(datas: any) {
   // console.log(datas)
   this.router.navigate(["/main/social-welfare/wcc-incident-report/edit-form/" + datas.wcc_reg_id +"/"+datas.main_pk_id])
  }

  delete(id: any, data: any) {
  }

  print(data: any) {
   //console.log(data) 
    this.router.navigate(["/main/social-welfare/wcc-incident-report/form-print/" + data.main_pk_id])
  }

  onExpandChange(id: number, checked: boolean, index: any): void {
    if (checked) {
      this.expandSet.add(index);
    } else {
      this.expandSet.delete(index);
    }
  }

  onExpandChangeDetails(id: number, checked: boolean, index: any): void {
    if (checked) {
      this.expandSetDetails.add(index);
    } else {
      this.expandSetDetails.delete(index);
    }
  }

  rowClick(id: any, checked: boolean, index: any) {
    this.onExpandChange(id, checked, index);
  }

  rowClickDetails(id: any, checked: boolean, index: any) {
    this.onExpandChangeDetails(id, checked, index);
  }

}
