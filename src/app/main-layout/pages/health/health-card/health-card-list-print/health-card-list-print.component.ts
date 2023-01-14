import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { PersonService } from 'src/core/services/person/person.service';
import { HealthCardService } from 'src/core/services/health/health-card/health-card.service';
import * as XLSX from 'xlsx';



@Component({
  selector: 'app-health-card-list-print',
  templateUrl: './health-card-list-print.component.html',
  styleUrls: ['./health-card-list-print.component.scss']
})
export class HealthCardListPrintComponent implements OnInit {
  listURL = "/main/health/health-card-individual"
  addURL = "/main/health/health-card-individual/add-form"
  newURL = "/main/health/health-card-individual/add-form-new"
  printListURL = "/main/health/health-card-individual/health-card-list-print"
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
    private personService: PersonService,
    private notification: NzNotificationService,
  ) {}
    person : any;
  ngOnInit() {
    this.healthService.getHealthCardList().subscribe( value =>{

      this.listOfData = value[0];
      this.isLoading = false;
      this.person = this.listOfData[0].personModels;
      console.log(value)
      let i = 0
      //Inject internal array
      this.listOfData.forEach((element:any) => {
        this.examinations = element.hc_form_trans_data_arr.map((z:any) => z.lab_exam_type)
        let join: string = String(this.examinations.join(", "))
        this.listOfData[i].exams = join
        i++
        console.log(join)
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
        let str = "Health_card_transaction_List_Worksheet.xlsx";
        XLSX.writeFile(wb, str);
        // this.isExcel = false
      }
    });
  }
}
