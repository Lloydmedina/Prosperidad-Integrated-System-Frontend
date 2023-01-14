import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import * as XLSX from 'xlsx';
import { DelinquentService } from 'src/core/services/delinquent/delinquent.service';

@Component({
  selector: 'app-delinquent-print',
  templateUrl: './delinquent-print.component.html',
  styleUrls: ['./delinquent-print.component.css']
})
export class DelinquentPrintComponent implements OnInit {
  count = 0;
  pageSize= 25
  listOfData: any[] = [];
  numPage: any = [];
  filteredList: any[] = []
  isLoading = true;
  formSetting: any = []
  showFooter: boolean = false;
  finalList: any[] = []
  param = ""
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private modal: NzModalService,
    private delService: DelinquentService,
    private notification: NzNotificationService,
  ) { this.route.params.subscribe(zxc => {
    this.param = zxc['id']
  }) }
rec:any = {}
  ngOnInit() {
    this.delService.getRecord(this.param).subscribe(data => {
      this.rec = data
      let x = 1
      let rowCount = 1
      let counter = 0;
      let dtList: any[] = []
      this.listOfData = JSON.parse(data.record)
      this.finalList = []
      this.listOfData.forEach((dt:any) => {
          dtList.push(dt)
        if(x == 23){
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
      
      if(this.listOfData.length < 23){
        let diff = 23 - this.listOfData.length
        for(let z = 1; z <= diff; z++){
          this.finalList[0].push({
            billing_date: '',
            property_name: '',
            tenant_name: '',
            bill_amount: '',
            due_date: ''
          })
        }
      }
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
        let str = "Department_List_Worksheet.xlsx";
        XLSX.writeFile(wb, str);
        // this.isExcel = false
      }
    });
  }
}
