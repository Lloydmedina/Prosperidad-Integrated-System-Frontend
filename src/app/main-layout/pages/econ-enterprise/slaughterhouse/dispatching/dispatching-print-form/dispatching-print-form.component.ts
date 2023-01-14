import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { TreeNodeInterface } from 'src/app/main-layout/template/property-browser/property-browser.component';
import { DispatchingService } from 'src/core/services/dispatching/dispatching.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-dispatching-print-form',
  templateUrl: './dispatching-print-form.component.html',
  styleUrls: ['./dispatching-print-form.component.scss']
})
export class DispatchingPrintFormComponent implements OnInit {

  count = 0;
  pageSize= 25
  listOfData: any[] = [];
  numPage: any = [];
  filteredList: any[] = []
  isLoading = true;
  formSetting: any = []
  showFooter: boolean = false;
  finalList: any[] = []
  param:any
  trans_date = new Date()
  constructor(
    private router: Router,
    private modal: NzModalService,
    private route: ActivatedRoute,
    private dispatchService: DispatchingService,
    private notification: NzNotificationService,
  ) {this.route.params.subscribe(zxc => {
    this.param = zxc['id']
  }) }

  mapOfExpandedData: { [key: string]: TreeNodeInterface[] } = {};
  ngOnInit() {
    this.dispatchService.getPrintById(this.param).subscribe(data => {
    
      let x = 1
      let rowCount = 1
      let counter = 0;
      let dtList: any[] = []
      this.listOfData = data
      this.trans_date = data[0].transaction_date
      this.listOfData.forEach((dt:any) => {
          dtList.push(dt)
        if(x == 10){
          x = 0
          this.finalList.push(dtList)
          dtList = []
          this.numPage.push(counter)
          counter++
        }else if(rowCount == this.listOfData.length){
          this.finalList.push(dtList)
          dtList = []
          this.numPage.push(counter)
        }
        x++
        rowCount++
      });
      
      if(this.listOfData.length < 10){
        let diff = 10 - this.listOfData.length
        for(let z = 1; z <= diff; z++){
          this.finalList[0].push({
            key: "",
            title: "",
            amt: ""
          })
        }
      }

      
      console.log( this.finalList[0])
      
      this.isLoading = false;
   
      
      // this.listOfData = data[0];
    })
  }
  printing = false

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
        let str = "Disptach_Record_List_Worksheet.xlsx";
        XLSX.writeFile(wb, str);
        // this.isExcel = false
      }
    });
  }

}
