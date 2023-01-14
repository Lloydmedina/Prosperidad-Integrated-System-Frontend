import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { HealthCardService } from 'src/core/services/health/health-card/health-card.service';
import { PersonService } from 'src/core/services/person/person.service';
import * as moment from 'moment'

@Component({
  selector: 'app-health-card-print',
  templateUrl: './health-card-print.component.html',
  styleUrls: ['./health-card-print.component.scss']
})
export class HealthCardPrintComponent implements OnInit {
  listURL = "/main/health/health-card"
  addURL = "/main/health/health-card-individual/add-form"
  newURL = "/main/health/health-card-individual/add-form-new"
  printListURL = "/main/health/health-card-individual/health-card-list-print"
  param: any;
  listOfData: any = [{}];
   isLoading = false;
  currentUser: any[] = [];
  examinations: any = [];
  listofexam: any = [];
  listofdtl: any = [];
  currentProjectGUID: any;
  header1: any;
  header2: any;
  header3: any;
  firstlogo = "../../../../../../assets/img/doh_logo.png";
  validateForm!: FormGroup;
  // FROM PRINT
  name: any;
  occupation: any;
  address : any;
  age : any;
  nationality : any;
  gender : any;
  cs : any;
  bdate: any;
  hc_number: any;
  currDate  = new Date;
  dept_head = "FRITZIE MARIE L.JALA, MD.";
  constructor(
    private router: Router,
    private modal: NzModalService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private healthService : HealthCardService,
    private personService: PersonService,
    private notification: NzNotificationService,
  ) {
    this.route.params.subscribe(params => {
      this.param = params['id'];
    });
  }

  ngOnInit() {
    this.loadTrans(this.param);

  }
loadTrans(transid : any){
  this.healthService.getById(transid).subscribe(tdata =>{
 //   console.log("Transaction Data",tdata);
    this.hc_number = tdata.form_trans_no;
    this.loadPersonData(tdata.person_id);
    this.loadetails(tdata.person_id);
  });
}

loadPersonData(personid : any){
  this.personService.getPersonGUID(personid).subscribe((data: any) => {

    if (data[0].gender_id == 1) {
      this.gender = 'Male'
    }else if( data[0].gender_id == 2) {
      this.gender = 'Female'
    }else{
      this.gender = 'Undefined'
    }

    if (data[0].civil_status_id == 1) {
      this.cs = 'Single'
    }else if( data[0].civil_status_id == 2) {
      this.cs = 'Married'

    }else if( data[0].civil_status_id == 3) {
    this.cs = 'Widowed'

    }else if( data[0].civil_status_id == 4) {
    this.cs = 'Divorced'
    }
    else{
      this.cs = 'Undefined'
    }
   // console.log(data);
    this.name = data[0].first_name +" "+ data[0].middle_name +" " +data[0].last_name;
    this.occupation = data[0].profession == null || data[0].profession == '' ? "None" : data[0].profession;
    this.address = data[0].brgy_name +","+data[0].city_mun_name;
    this.bdate = data[0].birth_date;
    this.age = moment().diff(this.bdate, 'years');
    this.nationality = data[0].citizenship == null ? "Filipino" : data[0].citizenship;

  })
}

  loadetails(dataid: any) {
    this.healthService.checkTransactionHistory(dataid).subscribe(data =>{
    //this.healthService.checkTransactionList(dataid).subscribe(data =>{
      this.listofexam = data[0];
      //this.listofdtl = this.listOfData?.hc_form_trans_data_arr;
      console.log(this.listofexam);
    });
  }


  print(){
    window.print();
  }

}
