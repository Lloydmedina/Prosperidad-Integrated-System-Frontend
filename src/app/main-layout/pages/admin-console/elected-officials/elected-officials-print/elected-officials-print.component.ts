import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ElectedOfficialsService } from 'src/core/services/elected-officials/elected-officials.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-elected-officials-print',
  templateUrl: './elected-officials-print.component.html',
  styleUrls: ['./elected-officials-print.component.scss']
})
export class ElectedOfficialsPrintComponent implements OnInit {
  
  listOfData: any = [];
  isLoading = true;
  currentUser: any[] = [];
  currentProjectGUID: any;
  header1: any;
  header2: any;
  header3: any;

  path: any;
  param: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private modal: NzModalService,
    private personService: ElectedOfficialsService,
    private notification: NzNotificationService,
  ) { this.route.params.subscribe(zxc => {
    this.param = zxc['id']
  }) }
councillors: any = [];
  ngOnInit() {
    this.personService.getPrint(this.param).subscribe(async data => {
      console.log(data)
      this.listOfData = data;
      this.isLoading = false;
      this.councillors = data.cc
      console.log(this.councillors)
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
        let str = "Persons_List_Worksheet.xlsx";
        XLSX.writeFile(wb, str);
        // this.isExcel = false
      }
    });
  }

}
