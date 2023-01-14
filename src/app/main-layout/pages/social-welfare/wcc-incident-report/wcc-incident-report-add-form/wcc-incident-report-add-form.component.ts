import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AicsService } from 'src/core/services/aics/aics.service';
import { PathsegmentService } from 'src/core/services/pathsegment/pathsegment.service';
import { PersonService } from 'src/core/services/person/person.service';
import { WccIncident_reportService } from 'src/core/services/wcc/wcc-incident_report/wcc-incident_report.service';
import { WccService } from 'src/core/services/wcc/wcc-registration/wcc.service';

@Component({
  selector: 'app-wcc-incident-report-add-form',
  templateUrl: './wcc-incident-report-add-form.component.html',
  styleUrls: ['./wcc-incident-report-add-form.component.scss']
})
export class WccIncidentReportAddFormComponent implements OnInit {
  currentUser: any[] = [];
  userValue: any;
  param : any;
  transac_id : any;
  clientData : any;
  parentGuardianData :any;
  isEdit : boolean = false;
  isLoading : boolean = true;
  buttonTitle : any;
  wccForm! : FormGroup;
  basepath_arr : any;
  listOfCases : any;
  parentGuardianRelation : any
  constructor(
    private route : ActivatedRoute,
    private router: Router,
    private fb : FormBuilder,
    private modal: NzModalService,
    private pathService : PathsegmentService,
    private aicsService: AicsService,
    private notification: NzNotificationService,
    private wccServices : WccService,
    private wccIRServices : WccIncident_reportService,
    private personService : PersonService
  ) {
    this.route.params.subscribe(params => {
      this.param = params['pId'];
      this.transac_id = params['tId'];
    });
  }

  ngOnInit() {

    this.procChecker();
    this.urlPathFunc();
    this.loginUserFunc();
    this.loadCaseList();
    this.formFunc();

  }


  urlPathFunc(){
    this.basepath_arr = this.pathService.getPath();
  }
  loginUserFunc(){
    this.currentUser = JSON.parse(localStorage.getItem('auth-user') || '{}');
    this.userValue = this.currentUser[0].users;
  }

  procChecker(){
    if (this.transac_id != null) {
      this.isEdit = true;
      this.buttonTitle = "Update & Exit";
      this.loadDataForEdit(this.transac_id);

      console.log("EDIT")
    } else {
      this.buttonTitle = "Save & Exit"
      this.loadClientInfo(this.param);

    }
  }
  formFunc(){
    this.wccForm = this.fb.group({
      main_pk_id :[''],
      form_trans_no :[''],
      wcc_reg_id : [''],
      report_status : [''],
      report_date : [''],
      client_pid : [''],
      client_pname : [''],
      client_paddress : [''],
      client_page : [''],
      case_tittle : ['',Validators.required],
      case_id : [''],
      case_summary : ['',Validators.required],
      case_action_taken : ['',Validators.required],
      case_recommendation : ['',Validators.required],
  });
  }
  responseDatas : any;
  loadDataForEdit(regid : any){
    this.wccIRServices.getReportData(regid).subscribe(rdata=>{
     // console.log(rdata[0]);
      this.responseDatas = rdata[0];
      this.wccForm.patchValue({
        main_pk_id : this.responseDatas.main_pk_id,
        form_trans_no :this.responseDatas.form_trans_no,
        wcc_reg_id : this.responseDatas.wcc_reg_id,
        report_status : this.responseDatas.report_status,
        report_date : this.responseDatas.report_date,
        client_pid : this.responseDatas.client_pid,
        client_pname : this.responseDatas.client_pname,
        client_paddress : this.responseDatas.client_paddress,
        client_page : this.responseDatas.client_page,
        case_tittle : this.responseDatas.case_tittle,
        case_id : this.responseDatas.case_id.toString(),
        case_summary : this.responseDatas.case_summary,
        case_action_taken : this.responseDatas.case_action_taken,
        case_recommendation : this.responseDatas.case_recommendation,
      });

      this.loadClientInfo(this.param);

    });
  }
  loadClientInfo(data : any){
    this.wccServices.getRegistrationData(data).subscribe({
      next : cdata =>{
        this.clientData = cdata[0];
        this.loadParentGuardian(this.clientData.family_id);

      },error : cdata =>{
        console.log("ERROR",cdata)
      },complete : () =>{
        this.isLoading = false;
        //console.log(this.clientData)
        this.wccForm.patchValue({
          wcc_reg_id : this.clientData.main_pk_id,
          report_status : 0,
          report_date : this.clientData.transaction_date,
          client_pid : this.clientData.client_pid,
          client_pname : this.clientData.client_name,
          client_paddress : this.clientData.client_address,
          client_page : this.clientData.client_age,
        });
      }
    })
  }
  loadParentGuardian(famdata : any){
    if (famdata == null) {
      this.parentGuardianRelation = "N/A";
    } else {

    }
  }
  //----------------------------------------------------------------
loadCaseList(){
  this.wccIRServices.getCaseList().subscribe(data => {
    this.listOfCases = data;
  })
}
selectedcase: any;
selectedCase(e : any){
//  var c = this.listOfCases[e].case_tittle;
  // var c = this.listOfCases.map((x : any) => x.case_id == e ).case_tittle;
  console.log(e);

  this.wccIRServices.getCaseData(e).subscribe(caseData =>{
    console.log(caseData)
    this.wccForm.patchValue({
      case_tittle : caseData.case_tittle
    });
  })

}
saveData(value : any){
 if (this.isEdit) {
  //console.log(value)
  this.modal.confirm({
    nzTitle: 'Do you really want to Update this record?',
    nzOnOk: () => {
      this.wccIRServices.updateData(this.param,value).subscribe(async (data: any) => {
        console.log(data);

        this.cancel();
        await this.notification.create(
          "success",
          'Successfully Updated',
          'New Record has successfully updated.'
        );
      },
      async error => {
       await this.notification.create(
          "error",
          'Unsuccessfully Updated',
          'New Record has not been update.'
        );
      });
    }
  });
 } else {
  this.modal.confirm({
    nzTitle: 'Do you really want to Save this record?',
    nzOnOk: () => {
      this.wccIRServices.addNew(value).subscribe(async (data: any) => {
        console.log(data);

        this.cancel();
        await this.notification.create(
          "success",
          'Successfully Saved',
          'New Record has successfully saved.'
        );
      },
      async error => {
       await this.notification.create(
          "error",
          'Unsuccessfully Saved',
          'New Record has not been saved.'
        );
      });
    }
  });
 }
}
  cancel(){
    if (this.isEdit == true) {
      this.router.navigate(["/"+this.basepath_arr[0]+"/"+this.basepath_arr[1]+"/"+this.basepath_arr[2]])
    } else {
      this.router.navigate(["/"+this.basepath_arr[0]+"/"+this.basepath_arr[1]+"/"+this.basepath_arr[2]+"/"+this.basepath_arr[3]])
    }
  }
}
