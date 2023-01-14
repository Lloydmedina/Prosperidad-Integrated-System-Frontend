import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { BillingStatementService } from 'src/core/services/billing-statement/billing-statement.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-bs-print-form',
  templateUrl: './bs-print-form.component.html',
  styleUrls: ['./bs-print-form.component.scss']
})
export class BsPrintFormComponent implements OnInit {

  listOfData: any[] = [];
  isLoading = true;
  data: any;
  param: any;
  dataDisplay: any;

  familyDetails: any;

  limitRow = 5

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private modal: NzModalService,
    private bsService: BillingStatementService
  ) { }

  ngOnInit() {
    this.isLoading = false;
    // this.postMortemService.getPostMortemEdit(this.param).subscribe(data => {
    //   this.data = data;
    //   this.isLoading = false;
    //   console.log("AHAK", data)
    //   this.familyDetails = data.family_details

    //   for(let i = this.familyDetails.length; i <= this.limitRow; i++){
    //     if(i == this.limitRow){
    //       // ADD STATEMENT
    //     }else{
    //       this.familyDetails.push({})
    //     }
    //   }
    // })
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
        let str = "Billing_Statement_Form_Worksheet.xlsx";
        XLSX.writeFile(wb, str);
        // this.isExcel = false
      }
    });
  }

}
