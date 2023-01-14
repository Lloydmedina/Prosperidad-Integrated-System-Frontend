import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { FamilyCompositionService } from 'src/core/services/family-composition/family-composition.service';
import { PathsegmentService } from 'src/core/services/pathsegment/pathsegment.service';
import { PersonService } from 'src/core/services/person/person.service';
import { WccCaseConferenceService } from 'src/core/services/wcc/wcc-case_conference/wcc-case-conference.service';
import { WccIncident_reportService } from 'src/core/services/wcc/wcc-incident_report/wcc-incident_report.service';
import { WccIntervention_undertakenService } from 'src/core/services/wcc/wcc-intervention_undertaken/wcc-intervention_undertaken.service';
import { WccService } from 'src/core/services/wcc/wcc-registration/wcc.service';
import { WccSummary_intakeService } from 'src/core/services/wcc/wcc-summary_intake/wcc-summary_intake.service';
import { AdminConsoleListModule } from '../../../admin-console/admin-console-list/admin-console-list.module';

@Component({
  selector: 'app-wcciu-form',
  templateUrl: './wcciu-form.component.html',
  styleUrls: ['./wcciu-form.component.scss']
})
export class WcciuFormComponent implements OnInit {

  currentUser: any[] = [];
  userValue: any;

  basepath_arr : any;
  param : any;
  transac_id : any;
  clientData : any;
  caseCData : any;
  familyData : any;
  reportData : any;
  caseDtlData : any = [];
  isData : any;
  buttonTitle : any;
  wccForm! : FormGroup;
  iuForm! : FormGroup;
  isLoading = true;
  isEdit : boolean = false;
  checkValDays = false;
  hideDays = false;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private modal: NzModalService,
    private siService : WccSummary_intakeService,
    private notification : NzNotificationService,
    private wccCCService : WccCaseConferenceService,
    private personService : PersonService,
    private wccfamService : WccService,
    private famService : FamilyCompositionService,
    private wccIRServices : WccIncident_reportService,
    private fb : FormBuilder,
    private pathService: PathsegmentService,
    private wccIUservice : WccIntervention_undertakenService

  ) {
    this.route.params.subscribe(params => {
      this.param = params['pId'];
      this.transac_id = params['tId'];
    });
   }

  ngOnInit() {
    this.isLoading = true;
    this.procChecker();
    this.urlPathFunc();
    this.formFunc();
  }
  formFunc(){
    this.wccForm = this.fb.group({
      main_pk_id : [''],
      form_trans_no : [''],
      wcc_reg_id : [''],
      wcc_iu_date : [''],
      status : [''],
      client_pid : [''],
      client_page : [''],
      client_pname : [''],
      client_paddress : [''],
      client_familyid : [''],
      client_4ps : [''],
      case_tittle : [''],
      case_id : [''],
      wcc_iu_data : this.fb.array([]),
      other_intervention : ['',[Validators.required]]
    });
    this.iuForm = this.fb.group({
      days : ['',[Validators.required]]
    });
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
      this.buttonTitle = "Update & Exit"
      this.isEdit = true;

    } else {
      this.isEdit = false;
      this.buttonTitle = "Save & Exit"
      this.loadDatas(this.param);
      this.loadIUList();
    }
  }


  transData : any;
  depthead : any;
  loadDatas(id : any){
  //  console.log(this.param);
    this.siService.getSIData(id).subscribe(data => {
      this.isData = data[0];
    //  console.log("SI data",this.isData);
      this.loadClientsInfo(this.isData.client_pid);
      this.loadCaseConData(this.isData.wcc_reg_id);
      this.loadIncidentReport(this.isData.wcc_reg_id);

      this.wccForm.patchValue({
      wcc_reg_id : this.isData.wcc_reg_id,
      wcc_iu_date : this.isData.wcc_reg_id,
      status : 0,
      client_pid : this.isData.client_pid,
      client_pname : this.isData.client_pname,
      client_paddress : this.isData.client_paddress,
      client_familyid : this.isData.client_family_id,
      client_4ps : this.isData.client_4ps,
      case_tittle : this.isData.case_tittle,
      case_id : this.isData.case_id,
      });
    });
  }

  loadIUsetup(){
    
  }
  loadCaseConData(data : any){
    this.siService.getCCData(data).subscribe(cres => {
      this.caseCData = cres[0];
      this.loadCaseConferenceDtl(this.caseCData.case_dtl_id);
    //  console.log("CC data", this.caseCData);
    })
  }
  loadCaseConferenceDtl(cc_id : any){
    this.wccCCService.getCCDtls(cc_id).subscribe(dts => {
     this.caseDtlData = dts;
     this.isLoading = false;
     // console.log("THE DATA ",dts);
    });
  }
  loadIncidentReport(caseid: any){
    this.wccIRServices.getReportDataRID(caseid).subscribe(report => {
      this.reportData = report[0];
    //  console.log("IR data ",this.reportData);
    });
  }
  loadClientsInfo(pid : any){
    this.personService.getPersonGUID(pid).subscribe(pdata =>{
      this.clientData = pdata[0];
      this.getFamilyId(pdata[0]);
      this.wccForm.patchValue({
        client_page : this.clientData.age,
       });
     // console.log("Client data ",this.clientData);
    });
  }
  getFamilyId(perData : any){
    this.wccfamService.getFCid(perData.person_guid).subscribe(fam_id =>{
      if (fam_id) {
        this.getFamilyList(fam_id.main_guid);
      } else {
        console.log("no data");
      }
    })
  }

  getFamilyList(fam_id : any){
    this.wccfamService.getFClist(fam_id).subscribe(fdata =>{
      this.familyData = fdata;

      //console.log("Family data",this.familyData);
    });
  }
  iuListSetup : any;
  loadIUList(){
    this.wccIUservice.getIUSetupList().subscribe(uires => {
      this.iuListSetup = uires;
    });
  }
  // setIUList(data : any){
  //   const iuList = data;
  //   iuList.forEach((iu_data : any) => {
  //     this.iuArray().push(
  //       this.fb.group({
  //         id : data.id,
  //         tittle : data.tittle,
  //         details : data.details
  //       })
  //     );
  //   });
  // }
  selectedIU(e : Event, items : any){
    this._addIU(items);
  }
  wccIUFields(data : any):FormGroup{
    return this.fb.group({
      iu_id : data.iu_id,
      iu_tittle : data.iu_tittle,
      iu_details : data.iu_details
    });
  }
  iuFieldsList(data : any):FormGroup{
    return this.fb.group({
      iu_id : data.iu_id,
      iu_tittle : data.iu_tittle,
      iu_details : data.iu_details
    });
  }

  wccIUArray() : FormArray{
    return this.wccForm.get("wcc_iu_data") as FormArray;
  }
  _addOtherIU(value : any){
    const id = 0;
    const tittle = 'Others';
    const details = value;
    // console.log(value)
    this.wccIUArray().push(this.wccIUFields({
      iu_id : id,
      iu_tittle : tittle,
      iu_details : details
    }));
    this.wccForm.patchValue({
      other_intervention : ''
    });
  }
  selectedIUs : any;
  _addIU(value : any){
   //console.log(value)
    if (value.iu_id == 1) {
      this.showModalMiddle(value)
    } else {
      this.wccIUArray().push(this.wccIUFields(value));
      this.selectedIUs = this.wccForm.value;
      this._removeIU(value.iu_id);
    }
  }
  _deleteIU(i : any , en : any, item : any){
    i.preventDefault();
    this.wccIUArray().removeAt(en);
    this._returnIU(item);
   // console.log("removed", this.wccForm.value);
  }
  _returnIU(value : any){
  // console.log("Return", value);
   if (value.iu_id == 1) {
    this.iuListSetup.push(
      {
        iu_id : value.iu_id,
        iu_tittle : 'Provision of temporary safe shelter',
        iu_details : value.iu_details
      }
      
     );
   } else {
    this.iuListSetup.push(
      {
        iu_id : value.iu_id,
        iu_tittle : value.iu_tittle,
        iu_details : value.iu_details
      }
      
     );
   }
   this.numdays = '';
  // console.log("list array", this.wccForm.value);
  }
  _removeIU(en : any){
   // console.log("THIS",en);
    this.iuListSetup.forEach((val : any, index :any)=>{
      if(val.iu_id == en) this.iuListSetup.splice(index,1);
    });
    
  }
  cancel(){
    if (this.isEdit == true) {
      this.router.navigate(["/"+this.basepath_arr[0]+"/"+this.basepath_arr[1]+"/"+this.basepath_arr[2]])
    } else {
      this.router.navigate(["/"+this.basepath_arr[0]+"/"+this.basepath_arr[1]+"/"+this.basepath_arr[2]+"/"+this.basepath_arr[3]])
    }
  }
  saveData(value : any){
    //console.log("Output",value)
    if (this.isEdit) {
      
    } else {
      this.modal.confirm({
        nzTitle: 'Do you really want to Save this record?',
        nzOnOk: () => {
          this.wccIUservice.saveNewTransaction(value).subscribe(async (data: any) => {
            //console.log("DATA2", data);
  
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
  isVisibleMiddle : boolean = false;
  checkDays(value : any){
   // console.log(value);
    if (value == true) {
        this.checkValDays = true;
        this.hideDays = true;
    } else {
      this.checkValDays = false;
      this.hideDays = false;
    }
  }
iuid: any;
iudetails :any;
iutittle:any;
  showModalMiddle(val : any): void {
    this.isVisibleMiddle = true;
    this.iuid = val.iu_id;
    this.iudetails = val.iu_details;
    this.iutittle = val.iu_tittle;
   // console.log("days",val)
  }

  numdays : any;
  handleOkMiddle(val : any): void {
    var numdays = "for "+val.days+" days";
    //console.log('click ok',val);
    this.isVisibleMiddle = false;
    this.wccIUArray().push(this.wccIUFields({
      iu_id : this.iuid,
      iu_tittle : this.iutittle+" for "+val.days+" days",
      iu_details : this.iudetails
    }));
    this._removeIU(this.iuid);
    this.iuForm.patchValue({
      days : null
    });
   // console.log(this.wccForm.value);
  }

  handleCancelMiddle(): void {
    this.isVisibleMiddle = false;
    this._removeIU(this.iuid);
    this.iuListSetup.push(
      {
        iu_id : this.iuid,
        iu_tittle : 'Provision of temporary safe shelter',
        iu_details : this.iudetails
      }
      
     );
  }

}
