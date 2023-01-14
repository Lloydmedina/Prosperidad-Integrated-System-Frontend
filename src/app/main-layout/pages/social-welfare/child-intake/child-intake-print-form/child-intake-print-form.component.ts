import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ChildIntakeService } from 'src/core/services/child-intake/child-intake.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-child-intake-print-form',
  templateUrl: './child-intake-print-form.component.html',
  styleUrls: ['./child-intake-print-form.component.scss']
})
export class ChildIntakePrintFormComponent implements OnInit {

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
    private childIntakeService: ChildIntakeService
  ) { 
    this.route.params.subscribe(params => {
      this.param = params['id'];
    });
  }

  ngOnInit() {
    this.childIntakeService.getChildIntakeEdit(this.param).subscribe(data => {
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
        let str = "Child_Intake_Form_Worksheet.xlsx";
        XLSX.writeFile(wb, str);
        // this.isExcel = false
      }
    });
  }

  selectedPages(value: any) {
    console.log("page", value)
  }

}
