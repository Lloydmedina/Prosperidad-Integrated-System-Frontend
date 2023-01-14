import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { WccCaseConferenceService } from 'src/core/services/wcc/wcc-case_conference/wcc-case-conference.service';
import * as XLSX from 'xlsx';
import jspdf from "jspdf";
import html2canvas from "html2canvas";

@Component({
  selector: 'app-wcc-case-conference-form-print',
  templateUrl: './wcc-case-conference-form-print.component.html',
  styleUrls: ['./wcc-case-conference-form-print.component.scss']
})
export class WccCaseConferenceFormPrintComponent implements OnInit {
  isLoading = true;
  param: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private modal: NzModalService,
    private wccCCServices : WccCaseConferenceService
  ) {
    this.route.params.subscribe(params => {
      this.param = params['tId'];
    });
   }

  ngOnInit() { 
    this.loadDatas(this.param);
   
  }


  caseData : any;
  depthead : any;
  caseDtl : any;
  loadDatas(id : any){
    this.isLoading = true;
    this.wccCCServices.getCCData(id).subscribe(data => {
      this.caseData = data[0];
      console.log(this.caseData);
      this.depthead = "CLARILIN P. SANTA, RSW, MPA";
      this.isLoading = false;
      this.loadCaseDtl(this.caseData.main_pk_id)
    })
  }
  loadCaseDtl(ccid : any){
    this.wccCCServices.getCCDtls(ccid).subscribe(data => {
    this.caseDtl = data;
    console.log("THIS IS THE",data);
     });
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
      pdf.save("WCC_CASE_CONFERENCE.pdf"); // Generated PDF
    });
  }

}
