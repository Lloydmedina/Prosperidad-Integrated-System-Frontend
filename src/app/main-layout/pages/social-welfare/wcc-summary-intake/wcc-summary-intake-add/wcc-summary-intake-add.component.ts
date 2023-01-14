import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AicsService } from 'src/core/services/aics/aics.service';
import { WccCaseConferenceService } from 'src/core/services/wcc/wcc-case_conference/wcc-case-conference.service';

@Component({
  selector: 'app-wcc-summary-intake-add',
  templateUrl: './wcc-summary-intake-add.component.html',
  styleUrls: ['./wcc-summary-intake-add.component.scss']
})
export class WccSummaryIntakeAddComponent implements OnInit {

  listOfData: any[] = [];
  listOfDataDetails: any[] = [];
  isLoading = true;
  expandSet = new Set<number>();
  expandSetDetails = new Set<number>();

  constructor(
    private router: Router,
    private modal: NzModalService,
    private aicsService: AicsService,
    private notification: NzNotificationService,
    private wccCCServices : WccCaseConferenceService
  ) { }

  ngOnInit() {
    this.loadDatas()

  }


  loadDatas(){
    this.wccCCServices.getList().subscribe(data => {
      this.listOfData = data[0];
      this.isLoading = false;
      console.log(data);
    })
  }


  proceedToForm(data : any){
    this.modal.confirm({
      nzTitle : 'Proceed to Summary Intake Form?',
      nzOnOk : () =>
      // console.log(data.main_pk_id)
      this.router.navigate(["/main/social-welfare/wcc-summary-intake/add-form/" + data.main_pk_id])
    })
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

}
