import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { FeesChargesService } from 'src/core/services/fees-charges/fees-charges.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-fees-charges-print',
  templateUrl: './fees-charges-print.component.html',
  styleUrls: ['./fees-charges-print.component.css']
})
export class FeesChargesPrintComponent implements OnInit {
  count = 0;
  pageSize= 25
  listOfData: any[] = [];
  numPage: any = [];
  filteredList: any[] = []
  isLoading = true;
  formSetting: any = []
  showFooter: boolean = false;
  finalList: any[] = []
  constructor(
    private router: Router,
    private modal: NzModalService,
    private feesCharges: FeesChargesService,
    private notification: NzNotificationService,
  ) { }

  ngOnInit() {
    this.feesCharges.getList(1).subscribe(data => {
    
      let x = 1
      let rowCount = 1
      let counter = 0;
      let dtList: any[] = []
      this.listOfData = []
      this.finalList = []
      data[0].forEach((dt:any) => {
          dtList.push(dt)
        if(x == 23){
          x = 0
          this.finalList.push(dtList)
          dtList = []
          this.numPage.push(counter)
          counter++
        }else if(rowCount == data[0].length){
          this.finalList.push(dtList)
          dtList = []
          this.numPage.push(counter)
        }
        x++
        rowCount++
      });
      
      if(data[0].length < 23){
        let diff = 23 - data[0].length
        for(let z = 1; z <= diff; z++){
          this.finalList[0].push({
            fees_code: "",
            fees_name: "",
            fees_type: "",
            income_account: "",
            initial_amount: "",
            status: ""
          })
        }
      }

      this.formSetting = data[1];
      console.log(this.finalList)
      if(this.formSetting.show_footer == "true"){
        this.showFooter = true
        console.log(this.showFooter)
      }
      this.isLoading = false;
      
      // this.listOfData = data[0];
    })
  }
printing = false
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
        let str = "Department_List_Worksheet.xlsx";
        XLSX.writeFile(wb, str);
        // this.isExcel = false
      }
    });
  }

}
