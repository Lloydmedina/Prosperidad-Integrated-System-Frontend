import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterEvent } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { AicsIntakeService } from 'src/core/services/aics-intake/aics-intake.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-aics-intake-print-form',
  templateUrl: './aics-intake-print-form.component.html',
  styleUrls: ['./aics-intake-print-form.component.scss']
})
export class AicsIntakePrintFormComponent implements OnInit {

  listOfData: any[] = [];
  isLoading = true;
  data: any;
  param: any;
  radioValue = "front"

  limitRow = 5

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private modal: NzModalService,
    private aicsIntakeService: AicsIntakeService
  ) {
    this.route.params.subscribe(params => {
      this.param = params['id'];
    });
   }

  ngOnInit() {
    this.aicsIntakeService.getAicsIntakeEdit(this.param).subscribe(data => {
      this.data = data;
      this.isLoading = false;
      console.log("AHAK", data)

      for(let i = data?.details.length; i <= this.limitRow; i++){
        if(i == this.limitRow){
          // ADD STATEMENT
        }else{
          data.details.push({})
        }
      }
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
        let str = "AICSIntake_Form_Worksheet.xlsx";
        XLSX.writeFile(wb, str);
        // this.isExcel = false
      }
    });
  }

  selectedPages(value: any) {
    console.log("page", value)
  }

}
