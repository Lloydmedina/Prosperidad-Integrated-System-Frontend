import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { IndigentIntakeService } from 'src/core/services/indigent-intake/indigent-intake.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-indigent-intake-print-list',
  templateUrl: './indigent-intake-print-list.component.html',
  styleUrls: ['./indigent-intake-print-list.component.scss']
})
export class IndigentIntakePrintListComponent implements OnInit {

  listOfData: any[] = [];
  isLoading = true;

  constructor(
    private router: Router,
    private modal: NzModalService,
    private indigentIntakeService: IndigentIntakeService
  ) { }

  ngOnInit() {
    this.indigentIntakeService.getIndigentIntake().subscribe(data => {
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
        // this.isExcel = true
        let element = document.getElementById('report-section'); 
        // console.log(element)
        const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
        /* generate workbook and add the worksheet */
        const wb: XLSX.WorkBook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
        /* save to file */
        let str = "Indigent_Intake_List_Worksheet.xlsx";
        XLSX.writeFile(wb, str);
        // this.isExcel = false
      }
    });
  }

}
