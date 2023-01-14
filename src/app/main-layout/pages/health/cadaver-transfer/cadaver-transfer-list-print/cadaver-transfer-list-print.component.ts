import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { CadaverTransferService } from 'src/core/services/health/cadaver-transfer/cadaver-transfer.service';
import { DentalCertificateService } from 'src/core/services/health/dental-certificate/dental-certificate.service';
import { ExhumationPermitService } from 'src/core/services/health/exhumation-permit/exhumation-permit.service';
import { HealthCardService } from 'src/core/services/health/health-card/health-card.service';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-cadaver-transfer-list-print',
  templateUrl: './cadaver-transfer-list-print.component.html',
  styleUrls: ['./cadaver-transfer-list-print.component.scss']
})
export class CadaverTransferListPrintComponent implements OnInit {

  listURL = "/main/health/dental-certificate"
  addURL = "/main/health/dental-certificate/add-form"
  newURL = "/main/health/dental-certificate/add-form-new"
  printListURL = "/main/health/dental-certificate/dental-certificate-list-print"
  listOfData: any = [{}];
  isLoading = true;
  currentUser: any[] = [];
  examinations : any = [];
  currentProjectGUID: any;
  header1: any;
  header2: any;
  header3: any;
  formSetting: any = [];
  showFooter: boolean = false;
  constructor(
    private router: Router,
    private modal: NzModalService,
    private exServices : ExhumationPermitService,
    private ctpServices : CadaverTransferService,
    private notification: NzNotificationService,
  ) {}
  person : any;
  ngOnInit() {
    this.ctpServices.getList().subscribe( value =>{
      this.listOfData = value[0];
      this.person = this.listOfData.ctp_person_data;
      this.isLoading = false;
      let i = 0
      console.log(this.listOfData[0])
      this.formSetting = value[1];

      if(this.formSetting.show_footer == "true"){
        this.showFooter = true
        console.log(this.showFooter)
      }


      // //Inject internal array
      // this.listOfData.forEach((element:any) => {
      //   this.examinations = element.dc_exams_data.map((z:any) => z.dc_lab_exam_name)
      //   if(this.examinations < 1){
      //     let join: string = String(this.examinations.join(", "))
      //   this.listOfData[i].exams = join
      //   i++
      //   }else{
      //     let join: string = String(this.examinations.join(" "))
      //   this.listOfData[i].exams = join
      //   i++
      //   }

      // });

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
        let str = "Dental_certificate_transaction_List_Worksheet.xlsx";
        XLSX.writeFile(wb, str);
        // this.isExcel = false
      }
    });
  }
}
