import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { NzModalService } from 'ng-zorro-antd/modal';
import { WccIntervention_undertakenService } from 'src/core/services/wcc/wcc-intervention_undertaken/wcc-intervention_undertaken.service';
import { WccService } from 'src/core/services/wcc/wcc-registration/wcc.service';
import { WccSummary_intakeService } from 'src/core/services/wcc/wcc-summary_intake/wcc-summary_intake.service';

import * as XLSX from 'xlsx';

@Component({
  selector: 'app-wcciu-list-print',
  templateUrl: './wcciu-list-print.component.html',
  styleUrls: ['./wcciu-list-print.component.scss']
})
export class WcciuListPrintComponent implements OnInit {
  listOfData: any[] = [];
  isLoading = true;
  d = new Date();
  date : any;
  constructor(
    private router: Router,
    private modal: NzModalService,
    private wccServices : WccService,
    private iuServices : WccIntervention_undertakenService
  ) { }

  ngOnInit() {
    this.iuServices.getList().subscribe(data => {
     this.listOfData = data[0];
      this.isLoading = false;
      console.log(data[0])
      this.loadRegDtl(data[0].wcc_reg_id)
    })
  }

  loadRegDtl(id : any){
    this.wccServices.getRegistrationData(id).subscribe(res => {
      console.log("THIS IS THE",res)
    });
  }

  print(){
    window.print();
  }

  excel() {
    this.modal.confirm({
      nzTitle: 'Do you want to export this to excel?',
      nzOnOk: () => {
        this.date = moment(this.d).format("MMM  Do YY");
        // this.isExcel = true
        let element = document.getElementById('report-section');
        // console.log(element)
        const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
        /* generate workbook and add the worksheet */
        const wb: XLSX.WorkBook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
        /* save to file */
        let str = "wccc-registration-"+this.date+".xlsx";
        XLSX.writeFile(wb, str);
        // this.isExcel = false
      }
    });
  }

}
