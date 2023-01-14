import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { PersonService } from 'src/core/services/person/person.service';
import { HealthCardService } from 'src/core/services/health/health-card/health-card.service';
import * as XLSX from 'xlsx';
import * as moment from 'moment';

import { ExhumationPermitService } from 'src/core/services/health/exhumation-permit/exhumation-permit.service';

@Component({
  selector: 'app-exhumation-permit-form-print',
  templateUrl: './exhumation-permit-form-print.component.html',
  styleUrls: ['./exhumation-permit-form-print.component.scss']
})
export class ExhumationPermitFormPrintComponent implements OnInit {
  addURL = "/main/health/dental-certificate/add-form"
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
  formSetting: any = [];
  showFooter: boolean = false;

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
    private expServices : ExhumationPermitService
  ) {
    this.route.params.subscribe(params => {
      this.param = params['id'];
    });
  }
  person_data : any;
  person: any;
  ngOnInit() {

    this.expServices.getData(this.param).subscribe( data =>{
      this.person_data = data[0][0];
      console.log(this.person_data)

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
