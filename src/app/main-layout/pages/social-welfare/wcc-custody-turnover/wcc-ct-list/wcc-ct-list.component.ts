import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AicsService } from 'src/core/services/aics/aics.service';
import { WccTurnover_ofcustodyService } from 'src/core/services/wcc/wcc-turnover_ofcustody/wcc-turnover_ofcustody.service';

@Component({
  selector: 'app-wcc-ct-list',
  templateUrl: './wcc-ct-list.component.html',
  styleUrls: ['./wcc-ct-list.component.scss']
})
export class WccCtListComponent implements OnInit {

  listOfData: any[] = [];
  ccData: any[] = [];
  siData: any[] = [];
  witnessData : any[] = [];
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
    private wccTOCServices : WccTurnover_ofcustodyService
  ) { }

  ngOnInit() {
    this.loadDatas()

  }

  loadDatas(){
    this.wccTOCServices.getList().subscribe(data => {
      console.log(data);
      this.listOfData = data[0];
      this.isLoading = false;
      this.witnessData = this.listOfData.map((a : any)=> a.witness_data);
    // this.ccData = this.listOfData.map((cc : any)=> cc.case_dlts);
     //this.siData = this.listOfData.map((si : any)=> si.wcc_si_dtl);
    })
  }
  edit(datas: any) {
    console.log(datas.applicant_pid)
   this.router.navigate(["/main/social-welfare/wcc-custody-turnover/edit-form/" + datas.client_pid +"/"+datas.main_pk_id])
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
    console.log(data.main_pk_id);
    this.router.navigate(["/main/social-welfare/wcc-custody-turnover/form-print/" + data.main_pk_id])
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
