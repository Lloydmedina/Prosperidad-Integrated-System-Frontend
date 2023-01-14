import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { toDecimal } from 'ng-zorro-antd/core/util';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AccountTitleService } from 'src/core/services/account-title/account-title.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-account-title-print',
  templateUrl: './account-title-print.component.html',
  styleUrls: ['./account-title-print.component.css']
})
export class AccountTitlePrintComponent implements OnInit {
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
    private accService: AccountTitleService,
    private notification: NzNotificationService,
  ) { }

  ngOnInit() {
    this.accService.getList().subscribe(data => {
    
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
