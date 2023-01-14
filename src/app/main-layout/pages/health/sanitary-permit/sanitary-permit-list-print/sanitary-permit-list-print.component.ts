import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import * as XLSX from 'xlsx';
import { SanitaryPermitService } from 'src/core/services/health/sanitary-permit/sanitary-permit.service';

@Component({
  selector: 'app-sanitary-permit-list-print',
  templateUrl: './sanitary-permit-list-print.component.html',
  styleUrls: ['./sanitary-permit-list-print.component.scss']
})
export class SanitaryPermitListPrintComponent implements OnInit {
  listOfData: any = [{}];
  isLoading = true;
  currentUser: any[] = [];
  examinations : any = [];
  currentProjectGUID: any;
  header1: any;
  header2: any;
  header3: any;
  constructor(
    private router: Router,
    private modal: NzModalService,
    private notification: NzNotificationService,
    private spServices : SanitaryPermitService
  ) {}

  ngOnInit() {
    this.spServices.getList().subscribe( value =>{

      this.listOfData = value[0];
      this.isLoading = false;
      let i = 0
      //Inject internal array
      // this.listOfData.forEach((element:any) => {
      //   this.examinations = element.hc_form_trans_data_arr.map((z:any) => z.lab_exam_type)
      //   let join: string = String(this.examinations.join(", "))
      //   this.listOfData[i].exams = join
      //   i++

      // });
 console.log(this.listOfData)

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
        let str = "Health_card_transaction_List_Worksheet.xlsx";
        XLSX.writeFile(wb, str);
        // this.isExcel = false
      }
    });
  }
}
