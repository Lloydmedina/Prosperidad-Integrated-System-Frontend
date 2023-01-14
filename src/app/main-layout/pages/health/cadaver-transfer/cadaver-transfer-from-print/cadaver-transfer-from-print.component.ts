import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { PersonService } from 'src/core/services/person/person.service';
import { HealthCardService } from 'src/core/services/health/health-card/health-card.service';
import * as XLSX from 'xlsx';
import * as moment from 'moment';
import { CadaverTransferService } from 'src/core/services/health/cadaver-transfer/cadaver-transfer.service';

@Component({
  selector: 'app-cadaver-transfer-from-print',
  templateUrl: './cadaver-transfer-from-print.component.html',
  styleUrls: ['./cadaver-transfer-from-print.component.scss']
})
export class CadaverTransferFromPrintComponent implements OnInit {
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
  date = new Date;

  dept_head = "FRITZIE MARIE L.JALA, MD.";
  dept_ ="Municipal Health Office";
  foot_note ="Medical certificate issued in Municipal Health Office";
  constructor(
    private router: Router,
    private modal: NzModalService,
    private route: ActivatedRoute,
    private healthService : HealthCardService,
    private personService: PersonService,
    private notification: NzNotificationService,
    private ctpServices : CadaverTransferService
  ) {
    this.route.params.subscribe(params => {
      this.param = params['id'];
    });
  }
  person_data : any;
  person: any;
  ngOnInit() {

    this.ctpServices.getData(this.param).subscribe( data =>{
      this.person_data = data[0];
      console.log(data)

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
