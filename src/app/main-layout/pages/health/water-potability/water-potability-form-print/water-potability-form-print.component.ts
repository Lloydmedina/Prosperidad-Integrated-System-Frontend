import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import * as XLSX from 'xlsx';
import * as moment from 'moment';
import { WaterPotabilityService } from 'src/core/services/health/water-potability/water-potability.service';


@Component({
  selector: 'app-water-potability-form-print',
  templateUrl: './water-potability-form-print.component.html',
  styleUrls: ['./water-potability-form-print.component.scss']
})
export class WaterPotabilityFormPrintComponent implements OnInit {

  addURL = "/main/health/water-potability/add-form"
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
  date = new Date;
  trans_startDate : any;
  trans_endDate : any;
  dept_head = "FRITZIE MARIE L. JALA, MD.";
  dept_ ="Municipal Health Office";
  foot_note ="Medical certificate issued in Municipal Health Office";
  constructor(
    private router: Router,
    private modal: NzModalService,
    private route: ActivatedRoute,
    private notification: NzNotificationService,
    private wpServices : WaterPotabilityService
  ) {
    this.route.params.subscribe(params => {
      this.param = params['id'];
    });
  }
  person_data : any;
  person: any;
  ngOnInit() {

    this.wpServices.getData(this.param).subscribe( data =>{
      this.person_data = data[0];
      console.log(data)
      this.trans_startDate = this.person_data.wp_transaction_date;
      this.trans_endDate = moment(this.trans_startDate).add(1, 'year').calendar();
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
