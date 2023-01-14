import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { HealthCardService } from 'src/core/services/health/health-card/health-card.service';
import { PersonService } from 'src/core/services/person/person.service';
import * as moment from 'moment'


@Component({
  selector: 'app-healthcard-business-form-print',
  templateUrl: './healthcard-business-form-print.component.html',
  styleUrls: ['./healthcard-business-form-print.component.scss']
})
export class HealthcardBusinessFormPrintComponent implements OnInit {
  listURL = "/main/health/health-card"
  newURL = "/main/health/health-card-individual/add-form-new"
  printListURL = "/main/health/health-card-individual/health-card-list-print"
  param: any;
  listOfData: any = [{}];
   isLoading = false;
  currentUser: any[] = [];
  examinations : any = [];
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
  personData : any;
  currDate  = new Date;
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
    this.healthService.getTransactionData(this.param).subscribe((data: any) => {

      // if (data[0].gender_id == 1) {
      //   this.gender = 'Male'
      // }else if( data[0].gender_id == 2) {
      //   this.gender = 'Female'
      // }else{
      //   this.gender = 'Undefined'
      // }

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
      console.log(data);
      this.personData = data[0].personModels
      this.name = this.personData.first_name +" "+ this.personData.middle_name +" " +this.personData.last_name;
      this.occupation = this.personData.profession;
      this.address = this.personData.brgy_name +","+this.personData.city_mun_name;
      this.bdate = this.personData.birth_date;
      this.age = moment().diff(this.bdate, 'years');
      this.hc_number = data[0].form_trans_no
      this.nationality = this.personData.citizenship
      this.gender = this.personData.gender_name
      this.cs = this.personData.civil_status_name
    })


  }



  print(){
    window.print();
  }

}
