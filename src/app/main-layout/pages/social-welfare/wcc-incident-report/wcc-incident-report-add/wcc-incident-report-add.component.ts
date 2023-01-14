import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AicsService } from 'src/core/services/aics/aics.service';
import { WccService } from 'src/core/services/wcc/wcc-registration/wcc.service';
@Component({
  selector: 'app-wcc-incident-report-add',
  templateUrl: './wcc-incident-report-add.component.html',
  styleUrls: ['./wcc-incident-report-add.component.scss']
})
export class WccIncidentReportAddComponent implements OnInit {


  listOfData: any[] = [];
  listOfDataDetails: any[] = [];
  isLoading : boolean = true;
  expandSet = new Set<number>();
  expandSetDetails = new Set<number>();

  constructor(
    private router: Router,
    private modal: NzModalService,
    private aicsService: AicsService,
    private notification: NzNotificationService,
    private wccServices : WccService
  ) { }

  ngOnInit() {

    this.loadDatas()

  }


  loadDatas(){
    this.wccServices.getList().subscribe(data => {
      this.listOfData = data[0];
      this.isLoading = false;
      console.log(data);
    })
  }

  proceedToForm(data : any){
    this.modal.confirm({
      nzTitle : 'Proceed to Incedent Report?',
      nzOnOk : () =>
      // console.log(data.main_pk_id)
      this.router.navigate(["/main/social-welfare/wcc-incident-report/add-form/" + data.main_pk_id])
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
