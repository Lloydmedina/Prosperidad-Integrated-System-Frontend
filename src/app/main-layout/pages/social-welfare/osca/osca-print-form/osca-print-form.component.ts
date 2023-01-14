import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { OscaService } from 'src/core/services/osca/osca.service';
import * as XLSX from 'xlsx';
import jspdf from "jspdf";
import html2canvas from "html2canvas";

@Component({
  selector: 'app-osca-print-form',
  templateUrl: './osca-print-form.component.html',
  styleUrls: ['./osca-print-form.component.scss']
})
export class OscaPrintFormComponent implements OnInit {

  listOfData: any[] = [];
  isLoading = true;
  data: any;
  param: any;

  familyDetails: any;

  limitRow = 5
  avatarUrl: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private modal: NzModalService,
    private oscaService: OscaService
  ) { 
    this.route.params.subscribe(params => {
      this.param = params['id'];
    });
  }

  ngOnInit() {
    this.oscaService.getOscaEdit(this.param).subscribe(data => {
      this.data = data;
      this.isLoading = false;
      console.log("AHAK", data)
      this.familyDetails = data.family_details
      this.avatarUrl = "data:image/png;base64," + data.person_image ;
      for(let i = this.familyDetails.length; i <= this.limitRow; i++){
        if(i == this.limitRow){
          // ADD STATEMENT
        }else{
          this.familyDetails.push({})
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
        let str = "AICS_Form_Worksheet.xlsx";
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
      pdf.save("OSCA_ID.pdf"); // Generated PDF
    });
  }

}
