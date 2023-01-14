import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { HealthCardService } from 'src/core/services/health/health-card/health-card.service';
import { MedicalCertificateService } from 'src/core/services/health/medical-certificate/medical-certificate.service';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-medical-certificate-list-print',
  templateUrl: './medical-certificate-list-print.component.html',
  styleUrls: ['./medical-certificate-list-print.component.scss']
})
export class MedicalCertificateListPrintComponent implements OnInit {
  listURL = "/main/health/medical-certificate"
  addURL = "/main/health/medical-certificate/add-form"
  newURL = "/main/health/medical-certificate/add-form-new"
  printListURL = "/main/health/medical-certificate/medical-certificate-list-print"
  listOfData: any = [{}];
  isLoading = true;
  currentUser: any[] = [];
  examinations : any = [];
  currentProjectGUID: any;
  formSetting: any = []
  showFooter: boolean = false;
  header1: any;
  header2: any;
  header3: any;
  constructor(
    private router: Router,
    private modal: NzModalService,
    private healthService : HealthCardService,
    private MedicalCertificateService : MedicalCertificateService,
    private notification: NzNotificationService,
  ) {}
  person: any;
  ngOnInit() {
    this.MedicalCertificateService.getMedicalCertificateList().subscribe( value =>{

      this.listOfData = value[0];
      this.person = this.listOfData[0].mc_person_data;
      this.isLoading = false;
      let i = 0
      console.log(this.listOfData)
      //Inject internal array
      this.listOfData.forEach((element:any) => {
        this.examinations = element.mc_exams_data.map((z:any) => z.mc_lab_exam_name)
        if(this.examinations < 1){
          let join: string = String(this.examinations.join(", "))
        this.listOfData[i].exams = join
        i++
        }else{
          let join: string = String(this.examinations.join(" "))
        this.listOfData[i].exams = join
        i++
        }

      });

      this.formSetting = value[1];

      if(this.formSetting.show_footer == "true"){
        this.showFooter = true
        console.log(this.showFooter)
      }

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
        let str = "medical_certificate_transaction_List_Worksheet.xlsx";
        XLSX.writeFile(wb, str);
        // this.isExcel = false
      }
    });
  }
}
