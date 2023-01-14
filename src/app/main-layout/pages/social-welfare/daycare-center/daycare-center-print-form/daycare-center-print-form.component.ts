import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { DaycareCenterService } from 'src/core/services/daycare-center/daycare-center.service';
import * as XLSX from 'xlsx';
import jspdf from "jspdf";
import html2canvas from "html2canvas";

@Component({
  selector: 'app-daycare-center-print-form',
  templateUrl: './daycare-center-print-form.component.html',
  styleUrls: ['./daycare-center-print-form.component.css']
})
export class DaycareCenterPrintFormComponent implements OnInit {

  isLoading = false;
  data: any;
  param: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private modal: NzModalService,
    private daycareCenterService: DaycareCenterService,
    private notification: NzNotificationService,
  ) { 
    this.route.params.subscribe(params => {
      this.param = params['id'];
    });
  }

  ngOnInit() {
    // this.daycareCenterService.getDaycareCenterEdit(this.param).subscribe(async data => {
    //   this.data = data;
    //   this.isLoading = false;
    //   console.log("FORM", data)
  
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
        let str = "Daycare_Center_Form_Worksheet.xlsx";
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
      pdf.save("DAYCARE_CENTER.pdf"); // Generated PDF
    });
  }

}
