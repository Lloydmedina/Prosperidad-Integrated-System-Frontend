import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { HealthCardService } from 'src/core/services/health/health-card/health-card.service';
import { MedicalAbstractService } from 'src/core/services/health/medical-abstract/medical-abstract.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-clinical-abstract-list-print',
  templateUrl: './clinical-abstract-list-print.component.html',
  styleUrls: ['./clinical-abstract-list-print.component.scss']
})
export class ClinicalAbstractListPrintComponent implements OnInit {
  listURL = "/main/health/medical-certificate"
  addURL = "/main/health/medical-certificate/add-form"
  newURL = "/main/health/medical-certificate/add-form-new"
  printListURL = "/main/health/medical-certificate/medical-certificate-list-print"
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
    private healthService : HealthCardService,
    private medicalAbstractservices : MedicalAbstractService,
    private notification: NzNotificationService,
  ) {}
  person: any;
  ngOnInit() {
    this.medicalAbstractservices.getMedAbstractList().subscribe( value =>{

      this.listOfData = value[0];
      this.person = this.listOfData[0].ma_person_data;
      this.isLoading = false;
      let i = 0
      console.log(this.listOfData)

      this.formSetting = value[1];

      if(this.formSetting.show_footer == "true"){
        this.showFooter = true
        console.log(this.showFooter)
      }
      //Inject internal array
      // this.listOfData.forEach((element:any) => {
      //   this.examinations = element.ma_pe_exams_data.map((z:any) => z.ma_pe_lab_exam_name)
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
        let str = "medical_certificate_transaction_List_Worksheet.xlsx";
        XLSX.writeFile(wb, str);
        // this.isExcel = false
      }
    });
  }
}
