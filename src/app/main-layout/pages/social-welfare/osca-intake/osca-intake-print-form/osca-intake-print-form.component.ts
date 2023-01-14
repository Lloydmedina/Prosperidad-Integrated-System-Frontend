import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { OscaIntakeService } from 'src/core/services/osca-intake/osca-intake.service';
import * as XLSX from 'xlsx';
import jspdf from "jspdf";
import html2canvas from "html2canvas";

@Component({
  selector: 'app-osca-intake-print-form',
  templateUrl: './osca-intake-print-form.component.html',
  styleUrls: ['./osca-intake-print-form.component.scss']
})
export class OscaIntakePrintFormComponent implements OnInit {

  listOfData: any[] = [];
  isLoading = true;
  data: any;
  param: any;

  limitRow = 5

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private modal: NzModalService,
    private oscaIntakeService: OscaIntakeService
  ) {
    this.route.params.subscribe(params => {
      this.param = params['id'];
    });
   }

  ngOnInit() {
    this.isLoading = true;
    this.oscaIntakeService.getOscaIntakeEdit(this.param).subscribe(data => {
      this.data = data;
      this.isLoading = false;
      console.log("AHAK", data)

      for(let i = data?.details.length; i <= this.limitRow; i++){
        if(i == this.limitRow){
          // ADD STATEMENT
        }else{
          data.details.push({})
        }
      }
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
        let str = "OSCAIntake_Form_Worksheet.xlsx";
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
      pdf.save("OSCA_INTAKE.pdf"); // Generated PDF
    });
  }

}
