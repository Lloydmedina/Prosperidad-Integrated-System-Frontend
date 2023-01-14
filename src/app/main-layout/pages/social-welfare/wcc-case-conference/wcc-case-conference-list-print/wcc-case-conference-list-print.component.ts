import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { NzModalService } from 'ng-zorro-antd/modal';
import { WccCaseConferenceService } from 'src/core/services/wcc/wcc-case_conference/wcc-case-conference.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-wcc-case-conference-list-print',
  templateUrl: './wcc-case-conference-list-print.component.html',
  styleUrls: ['./wcc-case-conference-list-print.component.scss']
})
export class WccCaseConferenceListPrintComponent implements OnInit {

  listOfData: any[] = [];
  isLoading = true;
  d = new Date();
  date : any;
  constructor(
    private router: Router,
    private modal: NzModalService,
    private wccCCServices : WccCaseConferenceService
  ) { }

  ngOnInit() {
    this.wccCCServices.getList().subscribe(data => {
     this.listOfData = data[0];
      this.isLoading = false;
      console.log(this.listOfData)
    })
  }
  loadCaseDtl(ccid : any){
    console.log("THIS IS THE",ccid)
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
