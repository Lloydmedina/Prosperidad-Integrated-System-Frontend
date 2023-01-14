import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { PersonService } from 'src/core/services/person/person.service';
import { HealthCardService } from 'src/core/services/health/health-card/health-card.service';
import * as XLSX from 'xlsx';
import * as moment from 'moment';

import { MedicalAbstractService } from 'src/core/services/health/medical-abstract/medical-abstract.service';
@Component({
  selector: 'app-clinical-abstract-form-print',
  templateUrl: './clinical-abstract-form-print.component.html',
  styleUrls: ['./clinical-abstract-form-print.component.scss']
})
export class ClinicalAbstractFormPrintComponent implements OnInit {
  addURL = "/main/health/medical-certificate/add-form"
  param: any;
  listOfData: any = [{}];
  isLoading = true;
  currentUser: any[] = [];
  examinations : any = [];
  currentProjectGUID: any;
  header1: any;
  header2: any;
  header3: any;

  issued_to : any;
  to_operate : any;
  address :any;
  date_of_birth : any;
  age : any;
  date_issued : any;
  date_now :any;
  Date_of_expiration : any;
  listHpiData : any [] = [];
  listPeData : any [] = [];
  listDxData : any [] = [];
  listMedsData : any [] = [];
  formSetting: any = [];
  showFooter: boolean = false;

  dept_head = "FRITZIE MARIE L. JALA, MD.";
  mun_doc = "Chelsea Kamille F. Fandiñola, MD.";
  mun_doc_tittle = "Rural Health Physician";
  dept_ ="Municipal Health Officer";
  foot_note ="Medical abstract issued in Municipal Health Office";
  constructor(
    private router: Router,
    private modal: NzModalService,
    private route: ActivatedRoute,
    private healthService : HealthCardService,
    private personService: PersonService,
    private notification: NzNotificationService,
    private medAbstractService : MedicalAbstractService
  ) {
    this.route.params.subscribe(params => {
      this.param = params['id'];
    });
  }
  person_data : any;
  person: any;
  ngOnInit() {

    this.medAbstractService.getMedAbstractData(this.param).subscribe( data =>{
      this.person_data = data[0];
      console.log(this.person_data)
      this.person = this.person_data[0].ma_person_data;
      this.issued_to = this.person_data[0].ma_person_fullname;
      this.address = this.person.brgy_name +","+this.person.city_mun_name;
      this.date_of_birth = this.person?.birth_date;
      this.age = moment().diff(this.date_of_birth, 'years');
      this.date_now = moment(Date.now()).format('LL')
      let i = 0
      this.listHpiData = this.person_data.map((hpi : any) => hpi.ma_hpi_data)
       this.listPeData = this.person_data.map((pe : any) => pe.ma_pe_data)
       this.listDxData = this.person_data.map((dx : any) => dx.ma_dx_data)
       this.listMedsData = this.person_data.map((meds : any) => meds.ma_meds_data)
      console.log(this.listHpiData)

      this.formSetting = data[1];

      if(this.formSetting.show_footer == "true"){
        this.showFooter = true
        console.log(this.showFooter)
      }
    })
    this.isLoading = false;
  }

  print(){
    window.print();
  }

  backRoute(){
    this.router.navigate([this.addURL]);
  }
}
