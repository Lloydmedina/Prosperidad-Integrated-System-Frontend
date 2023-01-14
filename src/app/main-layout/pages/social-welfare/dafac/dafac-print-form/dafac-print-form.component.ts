import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { DafacService } from 'src/core/services/dafac/dafac.service';
import * as XLSX from 'xlsx';
import jspdf from "jspdf";
import html2canvas from "html2canvas";

@Component({
  selector: 'app-dafac-print-form',
  templateUrl: './dafac-print-form.component.html',
  styleUrls: ['./dafac-print-form.component.scss']
})
export class DafacPrintFormComponent implements OnInit {

  listOfData: any[] = [];
  isLoading = true;
  data: any;
  param: any;
  radioValue = "front"

  limitRow = 5
  limitRowAssistance = 10

  checkedMale: any;
  checkedFemale: any;
  checkedFourps: any;
  checkedIPs: any;
  checkedOwner: any;
  checkedRenter: any;
  checkedSharer: any;
  checkedPartiallyDamaged: any;
  checkedTotallyDamaged: any;
  familyInformation: any;
  familyAssistance: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private modal: NzModalService,
    private dafacService: DafacService
  ) {
    this.route.params.subscribe(params => {
      this.param = params['id'];
    });
   }

  ngOnInit() {
    this.dafacService.getDafacEdit(this.param).subscribe(data => {
      this.data = data;
      this.isLoading = false;
      this.familyInformation = data.family_details
      this.familyAssistance = data.assistance_details
      console.log("DAFAC", data)

      for(let i = this.familyInformation.length; i <= this.limitRow; i++){
        if(i == this.limitRow){
          // ADD STATEMENT
        }else{
          this.familyInformation.push({})
        }
      }

      for(let x = this.familyAssistance.length; x <= this.limitRowAssistance; x++){
        if(x == this.limitRowAssistance){
          // ADD STATEMENT
        }else{
          this.familyAssistance.push({})
        }
      }

      if (data.gender_name == 'Male') {
        this.checkedMale = true
      } else {
        this.checkedMale = false
      }
      if (data.gender_name == 'Female') {
        this.checkedFemale = true
      } else {
        this.checkedFemale = false
      }

      if (data.fourps_beneficiary == 'Yes') {
        this.checkedFourps = true
      } else {
        this.checkedFourps = false
      }
      if (data.ips == 'Yes') {
        this.checkedIPs = true
      } else {
        this.checkedIPs = true
      }

      if (data.house_ownership == 'Owner') {
        this.checkedOwner = true
      } else {
        this.checkedOwner = false
      }
      if (data.house_ownership == 'Renter') {
        this.checkedRenter = true
      } else {
        this.checkedRenter = false
      }
      if (data.house_ownership == 'Sharer') {
        this.checkedSharer = true
      } else {
        this.checkedSharer = false
      }

      if (data.housing_conditioning == 'Partially Damaged') {
        this.checkedPartiallyDamaged = true
      } else {
        this.checkedPartiallyDamaged = false
      }
      if (data.housing_conditioning == 'Totally Damaged') {
        this.checkedTotallyDamaged = true
      } else {
        this.checkedTotallyDamaged = false
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
        let str = "Dafac_Form_Worksheet.xlsx";
        XLSX.writeFile(wb, str);
        // this.isExcel = false
      }
    });
  }

  selectedPages(value: any) {
    console.log("page", value)
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
      pdf.save("DAFAC.pdf"); // Generated PDF
    });
  }

}
