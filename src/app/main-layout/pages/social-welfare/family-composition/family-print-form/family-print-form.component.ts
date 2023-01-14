import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { FamilyCompositionService } from 'src/core/services/family-composition/family-composition.service';
import { PersonService } from 'src/core/services/person/person.service';
import * as XLSX from 'xlsx';
import jspdf from "jspdf";
import html2canvas from "html2canvas";

@Component({
  selector: 'app-family-print-form',
  templateUrl: './family-print-form.component.html',
  styleUrls: ['./family-print-form.component.scss']
})
export class FamilyPrintFormComponent implements OnInit {

  listOfData: any[] = [];
  isLoading = true;
  dataDetails: any;
  data: any;
  persondata: any;
  param: any;
  OwnedLabel: any;
  RentedLabel: any;

  emptySheet = false;

  limitRow = 5

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private modal: NzModalService,
    private familyCompositionService: FamilyCompositionService,
    private personService: PersonService,
    private notification: NzNotificationService,
  ) {
    this.route.params.subscribe(params => {
      this.param = params['id'];
    });
   }

  ngOnInit() {
    this.familyCompositionService.getFamilyCompositionEdit(this.param).subscribe(async data => {
      this.data = data;
      this.isLoading = false;
      console.log("FORM", data)
      for(let i = data?.details.length; i <= this.limitRow; i++){
        if(i == this.limitRow){
          // ADD STATEMENT
        }else{
          data.details.push({})
        }
      }

      if (data.house_occupancy == "Owned") {
         this.OwnedLabel = "Yes"
         this.RentedLabel = "No"
      } else {
        this.OwnedLabel = "No"
        this.RentedLabel = "Yes"
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
        let str = "FamilyComposition_Form_Worksheet.xlsx";
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
      pdf.save("FAMILY_COMPOSITION.pdf"); // Generated PDF
    });
  }

}
