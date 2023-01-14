
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { NzModalService } from 'ng-zorro-antd/modal';
import { AicsService } from 'src/core/services/aics/aics.service';
import { WccService } from 'src/core/services/wcc/wcc-registration/wcc.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-wcc-registration-list-print',
  templateUrl: './wcc-registration-list-print.component.html',
  styleUrls: ['./wcc-registration-list-print.component.scss']
})
export class WccRegistrationListPrintComponent implements OnInit {
  listOfData: any[] = [];
  isLoading = true;
  d = new Date();
  date : any;
  constructor(
    private router: Router,
    private modal: NzModalService,
    private wcccService: WccService
  ) { }

  ngOnInit() {
    this.wcccService.getList().subscribe(data => {
      this.listOfData = data[0];
      this.isLoading = false;
    })
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
