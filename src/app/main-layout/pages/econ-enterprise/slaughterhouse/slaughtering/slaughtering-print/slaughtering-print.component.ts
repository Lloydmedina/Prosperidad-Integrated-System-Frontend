import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { SlaughteringService } from 'src/core/services/slaughtering/slaughtering.service';
import { TreeNodeInterface } from '../../../market/property-setup/property-setup-list/property-setup-list.component';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-slaughtering-print',
  templateUrl: './slaughtering-print.component.html',
  styleUrls: ['./slaughtering-print.component.css']
})
export class SlaughteringPrintComponent implements OnInit {
  @ViewChild('tplContent', { static: true }) temp!: TemplateRef<{}>;

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
    private service: SlaughteringService,
    private notification: NzNotificationService,
  ) {this.route.params.subscribe(zxc => {
    this.param = zxc['id']
  }) }

  mapOfExpandedData: { [key: string]: TreeNodeInterface[] } = {};
  ngOnInit() {
    this.createTplModal(this.temp)
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

  month: any
  createTplModal(tplContent: TemplateRef<{}>): void {
    this.modal.create({
      nzTitle: "Print Billing",
      nzContent: tplContent,
      nzMaskClosable: false,
      nzClosable: false,
      nzComponentParams: {
        value: 'Template Context'
      },
      nzOnOk: () => {
          console.log(this.month)
          this.finalList = []
          this.trans_date = this.month
          this.service.getPrint(this.month.getMonth() + 1).subscribe(data => {
            console.log(data)
            if(data.length > 0){
              this.populateRecord(data)
            }else{
              this.popNoRecord()
            }
          })

      },
      nzOnCancel: () => {
        this.router.navigate([`/main/economic-enterprises/slaughterhouse/slaughtering`]);
      }
    });
  }

  popNoRecord(){
    this.modal.error({
      nzTitle: 'Empty Record',
      nzContent: 'No record found!',
      nzOnOk: () => {
        this.router.navigate([`/main/economic-enterprises/slaughterhouse/slaughtering`]);
      }
    
    });
  }

  populateRecord(data: any){

    let x = 1
    let rowCount = 1
    let counter = 0;
    let dtList: any[] = []
  
    this.listOfData = data
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
          key: "",
          title: "",
          amt: ""
        })
      }
    }

    
    this.isLoading = false;
    console.log( this.finalList[0])
  }

}
