import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AicsService } from 'src/core/services/aics/aics.service';
import { WccSummary_intakeService } from 'src/core/services/wcc/wcc-summary_intake/wcc-summary_intake.service';


@Component({
  selector: 'app-wcc-ct-add',
  templateUrl: './wcc-ct-add.component.html',
  styleUrls: ['./wcc-ct-add.component.scss']
})
export class WccCtAddComponent implements OnInit {

  listOfData: any[] = [];
  ccData: any[] = [];
  siData: any[] = [];
  listOfDataDetails: any[] = [];
  isLoading = true;
  expandSet = new Set<number>();
  expandSetDetails = new Set<number>();

  constructor(
    private router: Router,
    private modal: NzModalService,
    private aicsService: AicsService,
    private notification: NzNotificationService,
    private wccSIServices : WccSummary_intakeService
  ) { }

  ngOnInit() {
    this.loadDatas()

  }


  loadDatas(){
    this.wccSIServices.getList().subscribe(data => {
      this.listOfData = data[0];
      this.isLoading = false;
      console.log(this.listOfData);
     this.ccData = this.listOfData.map((cc : any)=> cc.case_dlts);
     this.siData = this.listOfData.map((si : any)=> si.wcc_si_dtl);
    })
  }



  proceedToForm(data: any){
    console.log(data);
    this.router.navigate(["/main/social-welfare/wcc-custody-turnover/add-form/" + data.main_pk_id])
  }

}
