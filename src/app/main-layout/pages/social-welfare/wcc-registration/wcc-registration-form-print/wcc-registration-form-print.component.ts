import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { WccService } from 'src/core/services/wcc/wcc-registration/wcc.service';
import * as XLSX from 'xlsx';
import jspdf from "jspdf";
import html2canvas from "html2canvas";

@Component({
  selector: 'app-wcc-registration-form-print',
  templateUrl: './wcc-registration-form-print.component.html',
  styleUrls: ['./wcc-registration-form-print.component.scss']
})
export class WccRegistrationFormPrintComponent implements OnInit {
  isLoading = true;
  param: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private modal: NzModalService,
    private wccServices: WccService
  ) {
    this.route.params.subscribe(params => {
      this.param = params['tId'];
    });
   }

  ngOnInit() {
    this.loadDatas(this.param);
  }
  transData : any;
  depthead : any;
  loadDatas(id : any){
    this.isLoading = true;
    this.wccServices.getRegistrationData(id).subscribe(data => {
      this.transData = data[0]
      this.depthead = "CLARILIN P. SANTA, RSW, MPA";
      console.log("THIS IS THE DATA",this.transData)
      this.isLoading = false;
    })
    console.log(this.param)
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
        let str = "AICSIntake_Form_Worksheet.xlsx";
        XLSX.writeFile(wb, str);
        // this.isExcel = false
      }
    });
  }

  dataElement: any
  convertToPDF() {
    this.dataElement = document.getElementById("contentpdf");
    html2canvas(this.dataElement).then(canvas => {
      // Few necessary setting options
      var imgWidth = 208;
      var pageHeight = 295;
      var imgHeight = (canvas.height * imgWidth) / canvas.width;
      var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL("image/png");
      let pdf = new jspdf("p", "mm", "a4"); // A4 size page of PDF
      var position = 0;
      pdf.addImage(contentDataURL, "PNG", 0, position, imgWidth, imgHeight);
      pdf.save("WCC_ADMISSION_SLIP.pdf"); // Generated PDF
    });
  }

}
