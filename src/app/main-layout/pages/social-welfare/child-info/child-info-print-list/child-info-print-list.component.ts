import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ChildInfoService } from 'src/core/services/child-info/child-info.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-child-info-print-list',
  templateUrl: './child-info-print-list.component.html',
  styleUrls: ['./child-info-print-list.component.scss']
})
export class ChildInfoPrintListComponent implements OnInit {

  listOfData: any[] = [];
  isLoading = true;

  constructor(
    private router: Router,
    private modal: NzModalService,
    private childInfoService: ChildInfoService
  ) { }

  ngOnInit() {
    this.childInfoService.getChildInfo().subscribe(data => {
      this.listOfData = data[0];
      this.isLoading = false;
    })
  }

  excel() {
    this.modal.confirm({
      nzTitle: 'Do you want to export this to excel?',
      nzOnOk: () => {
        // this.isExcel = true
        let element = document.getElementById('report-section'); 
        // console.log(element)
        const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
        /* generate workbook and add the worksheet */
        const wb: XLSX.WorkBook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
        /* save to file */
        let str = "Child_List_Worksheet.xlsx";
        XLSX.writeFile(wb, str);
        // this.isExcel = false
      }
    });
  }

}
