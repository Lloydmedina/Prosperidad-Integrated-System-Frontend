import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { BusinessService } from 'src/core/services/business/business.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-business-print-list',
  templateUrl: './business-print-list.component.html',
  styleUrls: ['./business-print-list.component.scss']
})
export class BusinessPrintListComponent implements OnInit {

  listOfData: any[] = [];
  finalList: any = []
  isLoading = true;
status_id:number = 0;
reg_status:number = 0;
numPage:any = []
brgy: any = "";
bizList:any = [];

formSetting: any = []
showFooter: boolean = false;
  constructor(
    private router: Router,
    private modal: NzModalService,
    private bizService: BusinessService,
    private notification: NzNotificationService,
  ) {this.status_id = Number(localStorage.getItem("biz_status")) 
      this.reg_status = Number(localStorage.getItem("reg_status")) 
      this.brgy = localStorage.getItem("biz_brgy")}
  ngOnInit() {

    this.bizService.getList(this.status_id,this.reg_status).subscribe(data => {
      this.bizList = data[0]
      this.formSetting = data[1]
      console.log(data)
      if(this.brgy != null){
        this.listOfData = this.bizList.filter((obj:any) => obj.brgy.toLowerCase() == this.brgy.toLowerCase());
      }else{
      this.listOfData = this.bizList
      this.isLoading = false;
      }

      let x = 1
      let rowCount = 1
      let counter = 0;
      let dtList: any[] = []
      this.listOfData.forEach((dt:any) => {
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
        let str = "Department_List_Worksheet.xlsx";
        XLSX.writeFile(wb, str);
        // this.isExcel = false
      }
    });
  }

}
