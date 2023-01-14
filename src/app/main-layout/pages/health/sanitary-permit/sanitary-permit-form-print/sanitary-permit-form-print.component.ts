import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { PersonService } from 'src/core/services/person/person.service';
import { HealthCardService } from 'src/core/services/health/health-card/health-card.service';
import * as XLSX from 'xlsx';
import { SanitaryPermitService } from 'src/core/services/health/sanitary-permit/sanitary-permit.service';
import * as moment from 'moment';

@Component({
  selector: 'app-sanitary-permit-form-print',
  templateUrl: './sanitary-permit-form-print.component.html',
  styleUrls: ['./sanitary-permit-form-print.component.scss']
})
export class SanitaryPermitFormPrintComponent implements OnInit {

  param: any;
  listOfData: any = [{}];
  isLoading = true;
  currentUser: any[] = [];
  examinations : any = [];
  currentProjectGUID: any;
  header1: any;
  header2: any;
  header3: any;
  line_of_bsn : any;
  issued_to : any;
  to_operate : any;
  address :any;

  Date_of_expiration : any;

  dept_head = "FRITZIE MARIE L. JALA, MD.";
  dept_ ="Municipal Health Officer";
  foot_note ="This permit is none transferable and will be revoked for violation of any sanitation rules and regulations."
  constructor(
    private router: Router,
    private modal: NzModalService,
    private route: ActivatedRoute,
    private healthService : HealthCardService,
    private personService: PersonService,
    private notification: NzNotificationService,
    private SPservices : SanitaryPermitService
  ) {
    this.route.params.subscribe(params => {
      this.param = params['id'];
    });
  }
  business : any;
  datas : any;
  date_issued : any;
  permit_no : any;
  busi_type : any;
  ngOnInit() {

    this.SPservices.getData(this.param).subscribe((data: any) =>{
      console.log(data);
      this.datas = data[0]
      this.business = this.datas.sp_business_data;
      this.line_of_bsn = this.datas.sp_line_of_bsn
      this.issued_to = this.business.trade_name;
      this.to_operate = this.business.business_name+" | "
      this.busi_type =this.datas.sp_business_type
      this.address = this.business.building +", "+this.business.street+", "+this.business.brgy_name;
      this.date_issued = this.datas.sp_transaction_date
      this.Date_of_expiration = moment(this.date_issued).add(365, 'days').calendar();
      this.permit_no = this.datas.form_trans_no
      console.log(this.business.trade_name)
      let i = 0
      //Inject internal array
      // this.listOfData.forEach((element:any) => {
      //   this.examinations = element.hc_form_trans_data_arr.map((z:any) => z.lab_exam_type)
      //   let join: string = String(this.examinations.join(", "))
      //   this.listOfData[i].exams = join
      //   i++

      // });


    })
    this.isLoading = false;
  }

  print(){
    window.print();
  }

}
