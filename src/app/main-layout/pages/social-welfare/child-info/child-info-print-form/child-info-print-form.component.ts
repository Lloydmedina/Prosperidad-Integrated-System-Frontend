import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ChildInfoService } from 'src/core/services/child-info/child-info.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-child-info-print-form',
  templateUrl: './child-info-print-form.component.html',
  styleUrls: ['./child-info-print-form.component.scss']
})
export class ChildInfoPrintFormComponent implements OnInit {

  listOfData: any[] = [];
  isLoading = true;
  data: any;
  param: any;
  radioValue = "front"
  servicesArray: any = [];

  limitRow = 5;

  nutritionalStatusRow = 23;
  healthServiceFirstColumnRow = 24;
  healthServiceSecondColumnRow = 24;

  generateHealthData: any = [];
  generateHealthDataSecondColumn: any = [];
  generateNutritionalStatus: any = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private modal: NzModalService,
    private childInfoService: ChildInfoService
  ) { 
    this.route.params.subscribe(params => {
      this.param = params['id'];
    });
  }

  ngOnInit() {
    this.isLoading = false;
    // this.childInfoService.getChildInfoEdit(this.param).subscribe(data => {
    //   this.data = data;
    //   this.isLoading = false;
    //   console.log("AHAK", data)

    //   for(let i = data?.family_details.length; i <= this.limitRow; i++){
    //     if(i == this.limitRow){
    //       // ADD STATEMENT
    //     }else{
    //       data?.family_details.push({})
    //     }
    //   }
    // })

    this.generateHealthData = [
      "Newborn Screening",
      "BCG Vaccination (at birth)",
      "DPT Vaccination (6, 20 & 14 weeks old)",
      "OPV Vaccination (6, 20 & 14 weeks old)",
      "Hepatitis B Vaccination (6, 20 & 14 weeks old)",
      "Measles Vaccination (9 months)",
      "Vitamin A (starting from 6 months)",
      "Deworming",
      "Dental Checkup",
      "Physical Checkup",
      "Micronutrient Supplement",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ]

    this.generateHealthDataSecondColumn = [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ]

    this.generateNutritionalStatus = [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    ]
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
        let str = "ChildInfo_Form_Worksheet.xlsx";
        XLSX.writeFile(wb, str);
        // this.isExcel = false
      }
    });
  }

  selectedPages(value: any) {
    console.log("page", value)
  }

}
