import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AicsService } from 'src/core/services/aics/aics.service';
import { WccDischargeService } from 'src/core/services/wcc/wcc-discharge/wcc-discharge.service';



@Component({
  selector: 'app-wcc-df-list',
  templateUrl: './wcc-df-list.component.html',
  styleUrls: ['./wcc-df-list.component.scss']
})
export class WccDfListComponent implements OnInit {

  listOfData: any[] = [];
  ccData: any[] = [];
  siData: any[] = [];
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
    private dfServices : WccDischargeService
  ) { }

  ngOnInit() {
    this.loadDatas()

  }


  loadDatas(){
    this.dfServices.getList().subscribe(data => {
      this.listOfData = data[0];
      this.isLoading = false;
      console.log(this.listOfData);
    //  this.ccData = this.listOfData.map((cc : any)=> cc.case_dlts);
    //  this.siData = this.listOfData.map((si : any)=> si.wcc_si_dtl);
    })
  }
  edit(datas: any) {
    console.log(datas.applicant_pid)
   this.router.navigate(["/main/social-welfare/wcc-discharge-form/edit-form/" + datas.applicant_pid +"/"+datas.main_pk_id])
  }

  delete(id: any, data: any) {
    this.modal.confirm({
      nzTitle: 'Do you Want to delete these items?',
      nzContent: data.first_name + " " + data.middle_name + " " + data.last_name +  " will be deleted permanently!",
      nzOnOk: () =>
        this.aicsService.deleteAics(id).subscribe(data => {
          this.isLoading = true;
          if(data) {
            this.aicsService.getAics().subscribe(async data => {
              this.listOfData = data[0];
              this.isLoading = false;
            })
            this.notification.create(
              "success",
              'Successfully Deleted',
              'AICS Record has successfully deleted.'
            );
          } else {
            this.notification.create(
              "error",
              'Unsuccessfully Deleted',
              'AICS Record unsuccessfully deleted.'
            );
          }
        })
    });
  }

  print(data : any) {
    //console.log(data.main_pk_id);
    this.router.navigate(["/main/social-welfare/wcc-discharge-form/form-print/" + data.main_pk_id])
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
