import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { FamilyCompositionService } from 'src/core/services/family-composition/family-composition.service';
import { PathsegmentService } from 'src/core/services/pathsegment/pathsegment.service';
import { PersonService } from 'src/core/services/person/person.service';
import { WccCaseConferenceService } from 'src/core/services/wcc/wcc-case_conference/wcc-case-conference.service';
import { WccIncident_reportService } from 'src/core/services/wcc/wcc-incident_report/wcc-incident_report.service';
import { WccService } from 'src/core/services/wcc/wcc-registration/wcc.service';
import { WccSummary_intakeService } from 'src/core/services/wcc/wcc-summary_intake/wcc-summary_intake.service';


@Component({
  selector: 'app-wcc-summary-intake-form',
  templateUrl: './wcc-summary-intake-form.component.html',
  styleUrls: ['./wcc-summary-intake-form.component.scss']
})
export class WccSummaryIntakeFormComponent implements OnInit {

  param : any;
  transac_id : any;
  reportData : any;
  isEdit : boolean = false;
  isLoading : boolean = true;
  buttonTitle : any;
  wccForm! : FormGroup;
  basepath_arr : any;
  listOfCases : any;
  radioValue = 'min';
  clientData : any;
  caseCData : any;
  familyData : any;
  caseDtlData : any = [];
  currentUser: any[] = [];
  userValue: any;
  constructor(
    private route : ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private pathservice : PathsegmentService,
    private modal: NzModalService,
    private notification: NzNotificationService,
    private wccCCService : WccCaseConferenceService,
    private personService : PersonService,
    private wccfamService : WccService,
    private famService : FamilyCompositionService,
    private wccIRServices : WccIncident_reportService,
    private wssSiServices : WccSummary_intakeService
  ) {
    this.route.params.subscribe(params => {
      this.param = params['pId'];
      this.transac_id = params['tId'];
    });
  }

  ngOnInit() {
    this.procChecker();
    this.formFunc();
    this.basepath_arr = this.pathservice.getPath();
  }
  userFunc(){
    this.currentUser = JSON.parse(localStorage.getItem('auth-user') || '{}');
    this.userValue = this.currentUser[0].users;
  }
  formFunc(){
    this.wccForm = this.fb.group({
        main_pk_id : [' '],
        form_trans_no : [' '],
        wcc_reg_id : [' '],
        wcc_summ_intake_date : new Date(),
        status : [' '],
        client_pid : [' '],
        client_pname : [' '],
        client_paddress : [' '],
        client_family_id : [' '],
        client_4ps : [' '],
        case_tittle : [' '],
        case_id : [' '],
        wcc_si_assesment : ['',[Validators.required]],
        wcc_si_recommendation : ['',[Validators.required]],
        wcc_si_actiontaken : ['',[Validators.required]]
    });
  }
  procChecker(){
    if (this.transac_id != null) {
      this.buttonTitle = "Update & Exit"
    } else {
      this.buttonTitle = "Save & Exit"
      this.loadCaseInfo(this.param);
    }
  }
  loadCaseInfo(data : any){
    this.wccCCService.getCCData(data).subscribe(cres => {
      this.isLoading = false;
      this.caseCData = cres[0];
     console.log("THE DATAS",this.caseCData);
      this.loadClientsInfo(this.caseCData.client_pid);
      this.loadIncidentReport(this.caseCData.wcc_reg_id);
      this.loadCaseConferenceData(this.caseCData.main_pk_id);
      this.wccForm.patchValue({
        wcc_reg_id : this.caseCData.wcc_reg_id,
        status : 0,
        client_pid : this.caseCData.client_pid,
        client_pname : this.caseCData.client_pname,
        client_paddress : this.caseCData.client_paddress,
        case_tittle : this.caseCData.case_tittle,
        case_id : this.caseCData.case_id,
        client_4ps : 0,
      });
    })
  }
  loadCaseConferenceData(cc_id : any){
    this.wccCCService.getCCDtls(cc_id).subscribe(dts => {
     this.caseDtlData = dts;
     console.log("THE DATA ",dts);
    });
  }
  loadIncidentReport(caseid: any){
    this.wccIRServices.getReportDataRID(caseid).subscribe(report => {
      this.reportData = report[0];
      console.log("report DATA ",this.reportData);
    });
  }
  loadClientsInfo(pid : any){
    this.personService.getPersonGUID(pid).subscribe(pdata =>{
      this.clientData = pdata[0];
      console.log("Client data ",this.clientData)
      this.getFamilyId(pdata[0]);
    });
  }
  getFamilyId(perData : any){
    this.wccfamService.getFCid(perData.person_guid).subscribe(fam_id =>{
      if (fam_id) {
        this.getFamilyList(fam_id.main_guid);
        this.check4ps(fam_id.main_guid);
        this.wccForm.patchValue({
          client_family_id : fam_id.main_guid,
        });
      } else {
        console.log("no data");
      }
    })
  }

  getFamilyList(fam_id : any){
    this.wccfamService.getFClist(fam_id).subscribe(fdata =>{
      this.familyData = fdata;
      console.log(this.familyData)
    });
  }
  forPsMember : any;
  check4ps(famid : any){
        this.famService.getFamilyCompositionEdit(famid).subscribe(fam_data =>{
          this.forPsMember = fam_data.fourps_member;
          this.wccForm.patchValue({
            client_4ps : this.forPsMember,
          });

    });
  }

  saveData(value : any){
    console.log(value)
    if (this.isEdit) {

    } else {
      this.modal.confirm({
        nzTitle: 'Do you really want to Save this record?',
        nzOnOk: () => {
          this.wssSiServices.addNew(value).subscribe(async (data: any) => {
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
