import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { PersonService } from 'src/core/services/person/person.service';
import { HealthCardService } from 'src/core/services/health/health-card/health-card.service';
import * as XLSX from 'xlsx';
import * as moment from 'moment';
import { MedicalCertificateService } from 'src/core/services/health/medical-certificate/medical-certificate.service';

@Component({
  selector: 'app-medical-certificate-form-print',
  templateUrl: './medical-certificate-form-print.component.html',
  styleUrls: ['./medical-certificate-form-print.component.scss']
})
export class MedicalCertificateFormPrintComponent implements OnInit {
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
  formSetting: any = [];
  showFooter: boolean = false;
  issued_to : any;
  to_operate : any;
  address :any;
  date_of_birth : any;
  age : any;
  date_issued : any;
  date_now :any;
  Date_of_expiration : any;

  dept_head = "FRITZIE MARIE L. JALA, MD.";
  mun_doc = "Chelsea Kamille F. Fandiñola, MD.";
  mun_doc_tittle = "Rural Health Physician";
  dept_ ="Municipal Health Officer";
  foot_note ="Medical certificate issued in Municipal Health Office";
  constructor(
    private router: Router,
    private modal: NzModalService,
    private route: ActivatedRoute,
    private healthService : HealthCardService,
    private personService: PersonService,
    private notification: NzNotificationService,
    private MedicalCertificateService : MedicalCertificateService
  ) {
    this.route.params.subscribe(params => {
      this.param = params['id'];
    });
  }
  person_data : any;
  person: any;
  ngOnInit() {

    this.MedicalCertificateService.getMedicalCertificateData(this.param).subscribe( data =>{
      this.person_data = data[0];
      console.log(this.person_data)
      this.person = this.person_data[0].mc_person_data;
      this.issued_to = this.person?.first_name +" "+ this.person?.middle_name +" " +this.person?.last_name;
      this.address = data[0].barangay_name +","+data[0].citmun_name;
      this.date_of_birth = this.person?.birth_date;
      this.age = moment().diff(this.date_of_birth, 'years');
      this.date_now = moment(Date.now()).format('LL')
      let i = 0

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
