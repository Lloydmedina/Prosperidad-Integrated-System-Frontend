import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { PwdService } from 'src/core/services/pwd/pwd.service';
import * as XLSX from 'xlsx';
import jspdf from "jspdf";
import html2canvas from "html2canvas";

@Component({
  selector: 'app-pwd-print-form',
  templateUrl: './pwd-print-form.component.html',
  styleUrls: ['./pwd-print-form.component.scss']
})
export class PwdPrintFormComponent implements OnInit {

  listOfData: any[] = [];
  isLoading = true;
  data: any;
  param: any;
  filteredDataFather: any = [];
  filteredDataMother: any = [];

  limitRow = 5

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private modal: NzModalService,
    private pwdService: PwdService
  ) {
    this.route.params.subscribe(params => {
      this.param = params['id'];
    });
   }

  ngOnInit() {
    this.isLoading = true;
    this.pwdService.getPwdEdit(this.param).subscribe(data => {
      this.data = data;
      this.isLoading = false;
      console.log("AHAK", data)

      this.filteredDataFather = data.family_details.filter(
        (cat: any) => cat.relation === "Father"
      );

      this.filteredDataMother = data.family_details.filter(
        (cat: any) => cat.relation === "Mother"
      );
      
      // for(let i = 1; i <= this.limitRow; i++){
      //   if(i == this.limitRow){
      //     // ADD STATEMENT
      //   }else{
      //     this.servicesArray.push({})
      //   }
      // }
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
        let str = "PWD_Form_Worksheet.xlsx";
        XLSX.writeFile(wb, str);
        // this.isExcel = false
      }
    });
  }

  dataElement: any
  convertToPDF() {
    this.dataElement = document.getElementById("content");
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
      pdf.save("PWD_REGISTRATION.pdf"); // Generated PDF
    });
  }

}
