import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { IndigentIntakeService } from 'src/core/services/indigent-intake/indigent-intake.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-indigent-intake-print-form',
  templateUrl: './indigent-intake-print-form.component.html',
  styleUrls: ['./indigent-intake-print-form.component.scss']
})
export class IndigentIntakePrintFormComponent implements OnInit {

  listOfData: any[] = [];
  isLoading = true;
  data: any;
  param: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private modal: NzModalService,
    private indigentIntakeService: IndigentIntakeService
  ) {
    this.route.params.subscribe(params => {
      this.param = params['id'];
    });
   }

  ngOnInit() {
    this.isLoading = false;
    // this.indigentIntakeService.getIndigentIntakeEdit(this.param).subscribe(data => {
    //   this.data = data;
    //   this.isLoading = false;
    //   console.log("AHAK", data)
    // })
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
        let str = "IndigentIntake_Form_Worksheet.xlsx";
        XLSX.writeFile(wb, str);
        // this.isExcel = false
      }
    });
  }

}
