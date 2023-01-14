import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { PostMortemService } from 'src/core/services/post-mortem/post-mortem.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-post-mortem-print-list',
  templateUrl: './post-mortem-print-list.component.html',
  styleUrls: ['./post-mortem-print-list.component.scss']
})
export class PostMortemPrintListComponent implements OnInit {

  listOfData: any[] = [];
  isLoading = true;

  limitRow = 5
  
  constructor(
    private router: Router,
    private modal: NzModalService,
    private postMortemService: PostMortemService
  ) { }

  ngOnInit() {
    this.isLoading = false;
    // this.anteMortemService.getAnteMortem(0).subscribe(data => {
    //   this.listOfData = data[0];
    //   this.isLoading = false;
    // })
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
        let str = "Post_Mortem_List_Worksheet.xlsx";
        XLSX.writeFile(wb, str);
        // this.isExcel = false
      }
    });
  }

}
