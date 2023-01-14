import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { PersonsBrowseComponent } from 'src/app/main-layout/template/persons-browse/persons-browse.component';
import { EmployeeService } from 'src/core/services/employee/employee.service';
import { FamilyCompositionService } from 'src/core/services/family-composition/family-composition.service';
import { PathsegmentService } from 'src/core/services/pathsegment/pathsegment.service';
import { PersonService } from 'src/core/services/person/person.service';
import { WccCaseConferenceService } from 'src/core/services/wcc/wcc-case_conference/wcc-case-conference.service';
import { WccDischargeService } from 'src/core/services/wcc/wcc-discharge/wcc-discharge.service';
import { WccIncident_reportService } from 'src/core/services/wcc/wcc-incident_report/wcc-incident_report.service';
import { WccService } from 'src/core/services/wcc/wcc-registration/wcc.service';
import { WccSummary_intakeService } from 'src/core/services/wcc/wcc-summary_intake/wcc-summary_intake.service';
import { WccTurnover_ofcustodyService } from 'src/core/services/wcc/wcc-turnover_ofcustody/wcc-turnover_ofcustody.service';

@Component({
  selector: 'app-wcc-df-form',
  templateUrl: './wcc-df-form.component.html',
  styleUrls: ['./wcc-df-form.component.scss']
})
export class WccDfFormComponent implements OnInit {

  currentUser: any[] = [];
  userValue: any;
  expandSet = new Set<number>();
  basepath_arr : any;
  param : any;
  transac_id : any;
  clientData : any;
  caseCData : any;
  registrationData : any;
  familyData : any;
  familyId : any;
  reportData : any;
  caseDtlData : any = [];
  isData : any;
  personData : any;
  buttonTitle : any;
  validateForm! : FormGroup;
  recipientData : any = [];

  isLoading = true;
  isEdit : boolean = false;
  checkValDays = false;
  hideDays = false;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private modal: NzModalService,
    private drawerService : NzDrawerService,
    private siService : WccSummary_intakeService,
    private wccCCService : WccCaseConferenceService,
    private personService : PersonService,
    private wccfamService : WccService,
    private notification : NzNotificationService,
    private famService : FamilyCompositionService,
    private wccIRServices : WccIncident_reportService,
    private fb : FormBuilder,
    private pathService: PathsegmentService,
    private emploService : EmployeeService,
    private dfService : WccDischargeService

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
    this.validateForm = this.fb.group({
    main_pk_id:[''],
    form_trans_no:[''],
    wcc_reg_id: [''],
    wcc_summ_intake_date: [''],
    case_tittle : [''],
    case_id : [''],
    status: [''],
    client_pid :[''],
    client_pname :[''],
    client_paddress :[''],
    client_page :[''],
    guardian_pid :[''],
    guardian_pname :[''],
    guardian_paddress :[''],
    officer_eid :['',Validators.required],
    officer_pname :[''],
    officer_pid :[''],
    officer_eoffice :[''],
    officer_eposition :[''],
    witness_1 :['',Validators.required],
    witness_data : this.fb.array([]),
    })

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
      console.log("Edit");
      this.loadDataForUpdate(this.transac_id);
    } else {
      console.log("New");
      this.isEdit = false;
      this.buttonTitle = "Save & Exit"
      this.loadDatas(this.param);
    }
  }
//LOAD REQ DATAS -------------
  transData : any;
  depthead : any;
  loadDatas(id : any){
    this.siService.getSIData(id).subscribe(data => {
      this.isData = data[0];
      console.log("IS data", this.isData);
      this.loadClientsInfo(this.isData.client_pid);
      this.loadCaseConData(this.isData.wcc_reg_id);
      this.loadIncidentReport(this.isData.wcc_reg_id);
      this.loadRegistrationData(this.isData.wcc_reg_id);
      this.validateForm.patchValue({
        wcc_summ_intake_date : this.isData.wcc_summ_intake_date,
        status : 0,
        case_tittle : this.isData.case_tittle,
        case_id : this.isData.case_id,
      });
    });
  }
forupdateData: any;
upData : any [] = [];
  loadDataForUpdate(tid : string){
    this.isLoading = false;
    this.loadClientsInfo(this.param);
    this.dfService.getData(tid).subscribe(data =>{
      this.forupdateData = data[0][0];
      this.upData = data[0];
      console.log(this.forupdateData);
      this.loadPersonData(this.forupdateData.guardian_pid);
      this.selectedReferrerOp(this.forupdateData);
      const wtnsS = this.upData.map((wtns_s : any)=> wtns_s.witness_data)[0];
      this.validateForm.patchValue({
        main_pk_id:this.forupdateData.main_pk_id,
        form_trans_no:this.forupdateData.form_trans_no,
        case_id : this.forupdateData.case_id,
        case_tittle:this.forupdateData.case_tittle,
        client_paddress :this.forupdateData.client_paddress,
        client_page:this.forupdateData.client_page,
        client_pid:this.forupdateData.client_pid,
        client_pname:this.forupdateData.client_pname,
        status:this.forupdateData.status,
        wcc_reg_id:this.forupdateData.wcc_reg_id,
        wcc_summ_intake_date:this.forupdateData.wcc_summ_intake_date,
        witness_1 : this.forupdateData.main_pk_id,
        officer_eid :this.forupdateData.officer_eid,
        officer_pname :this.forupdateData.officer_pname,
        officer_pid : this.forupdateData.officer_pid,
        officer_eoffice :this.forupdateData.officer_eoffice,
        officer_eposition :this.forupdateData.officer_eposition,
      });
      wtnsS.forEach((wtnsS_data : any)=>{
        this.witnessArray().push(
          this.fb.group({
            wcc_df_witness_pid : wtnsS_data.wcc_df_pkid,
            wcc_df_witness_pname : wtnsS_data.wcc_df_witness_pname,
            wcc_df_witness_paddress : wtnsS_data.wcc_df_witness_paddress,
            wcc_df_witness_relation : wtnsS_data.wcc_df_witness_relation,
            wcc_df_witness_familyid : wtnsS_data.wcc_df_witness_family_id,
          })
        )
      });
    });
  }
  loadCaseConData(data : any){
    this.siService.getCCData(data).subscribe(cres => {
      this.caseCData = cres[0];
      this.loadCaseConferenceDtl(this.caseCData.case_dtl_id);
      //console.log("CC data", this.caseCData);
    })
  }
  loadCaseConferenceDtl(cc_id : any){
    this.wccCCService.getCCDtls(cc_id).subscribe(dts => {
     this.caseDtlData = dts;
     this.isLoading = false;
    //  console.log("THE DATA ",dts);
    });
  }
  loadIncidentReport(caseid: any){
    this.wccIRServices.getReportDataRID(caseid).subscribe(report => {
      this.reportData = report[0];
     //console.log("IR data ",this.reportData);

    });
  }
  loadRegistrationData(regid : any){
    this.wccfamService.getRegistrationData(regid).subscribe(regdata => {
      this.registrationData = regdata[0];
    //console.log("Registration data ",this.registrationData);
      this.loadPersonData(this.registrationData.client_parent_pid);
      this.validateForm.patchValue({
        wcc_reg_id: this.registrationData.main_pk_id,
        client_pid :this.registrationData.client_pid,
        client_pname :this.registrationData.client_name,
        client_paddress :this.registrationData.client_address,
        client_page :this.registrationData.client_age,
      });
    })
  }
  loadClientsInfo(pid : any){
    this.personService.getPersonGUID(pid).subscribe(pdata =>{
      this.clientData = pdata[0];
      this.getFamilyId(pdata[0]);
      //console.log("Client data ",this.clientData);
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
      this.familyId = fam_id;
     // console.log("Family data",this.familyData);
    });
  }
  rcpt_data: any = []
  loadPersonData(perid: any){
    this.personService.getPersonGUID(perid).subscribe(pdata =>{
    this.personData = pdata[0];
      this.validateForm.patchValue({
        guardian_pid :this.personData.person_guid,
        guardian_pname :this.personData.last_name+", "+
        this.personData.first_name+" "+this.personData.middle_name+" "+this.personData.prefix,
        guardian_paddress : this.personData.street+", "+
        this.personData.brgy_name+", "+
        this.personData.city_mun_name+", "+
        this.personData.province_name
      });
    //console.log("person data",this.personData);
    });
  }

      //SET ARRAY -----------
      witnessFields(data : any) : FormGroup{
        return this.fb.group({
          wcc_df_witness_pid : "",
          wcc_df_witness_pname : "",
          wcc_df_witness_paddress : "",
          wcc_df_witness_relation : "",
          wcc_df_witness_familyid : "",
        });
      }
      //INITIATE ARRAY-----------
      witnessArray() : FormArray {
        return this.validateForm.get("witness_data") as FormArray
      }
      // ADD TO ARRAY------------
      addWitness(e? : MouseEvent){
      this.witnessArray().push(this.witnessFields(this.validateForm.value));

      }
      //REMOVE ARRAY ----------------
      deleteWitness(i : any, en : any){
        i.preventDefault()
        this.witnessArray().removeAt(en)
        if(this.witnessArray().length < 1){
          this.validateForm.patchValue({
            witness_1 : null
          });
        }
      }


  wtns_full : boolean = false;
  witnessArrayChecker(e? : MouseEvent) : void{
    if (this.witnessArray().length > 1) {
      console.log("full");
      this.wtns_full = true;
    } else {
      console.log("ay okie");
      this.showPersonList();
    }
  }

  // SELECT PERSON --------------------
relationCtrl : any;
showPersonList(e? : MouseEvent) :void {

  // this.selectGuardbtnText = "Select Non Family Member";
  const drawerRef = this.drawerService.create({
    nzTitle: 'Person List',
    nzFooter: 'Footer',
    nzPlacement: 'bottom',
    nzHeight: 800,
    nzContent: PersonsBrowseComponent,
    nzContentParams: {

    }
  });

  drawerRef.afterClose.subscribe(data => {
    if (data != null) {
      this.wccfamService.getFCid(data.person_guid).subscribe(fam_id =>{
        //console.log("fam id", fam_id);
        if (fam_id) {
          this.wccfamService.getFClist(fam_id).subscribe(fdata =>{
           // console.log(fdata);
          });
        } else {

          //console.log("no family");
        }
      })
      this.validateForm.patchValue({
        witness_1 : data.person_guid
      })
      this.witnessArray().push(
        this.fb.group({
          wcc_df_witness_pid : data.person_guid,
          wcc_df_witness_pname : data.first_name+" "+data.middle_name+" "+data.last_name+" "+data.suffix,
          wcc_df_witness_paddress : data.street == null ? data.brgy_name+", "+data.city_mun_name+", "+data.province_name : data.brgy_name+", "+data.city_mun_name+", "+data.province_name,
          wcc_df_witness_relation : "",
          wcc_df_witness_familyid : "",
        })
      );
    } else {

    }
  });
}
openEmpListDrawer : boolean = false;
loadingEmpList : boolean = true;
listOfEmployee : any;
isloadingEmployee : boolean = true;
selectedOfficer : any;
selectedOfficerDtl : any;
officerIsEmpty : boolean = true;
e_stats : boolean = true;
e_btn = 'Add';
e_icon = '<span nz-icon nzType="plus-circle" nzTheme="twotone"></span> ';
openEmpList(e? : MouseEvent){
  this.loadingEmpList = true;
  this.openEmpListDrawer = true;
  this.emploService.getList().subscribe(empdata => {
    this.listOfEmployee = empdata[0];
    this.loadingEmpList = false;

  })
}
selectedReferrerOp(data:any, e? : MouseEvent){

  this.selectedOfficerDtl = data;
  this.isloadingEmployee = false;
  this.e_stats = false;

    this.closeEmpDrawer()
    console.log("THIS IS THE officer",data)
    this.personService.getPersonGUID(data.person_id).subscribe(pdata =>{
      this.selectedOfficer = pdata[0];

    });
    this.validateForm.patchValue({
      officer_eid :data.employee_id,
      officer_pname :data.employee_name,
      officer_pid : data.person_id,
      officer_eoffice :data.dept_name,
      officer_eposition :data.position_name,
    });



}
cancelEmpDrawer(){
  this.openEmpListDrawer = false;
  this.loadingEmpList = true;
}
closeEmpDrawer(){
  this.e_btn = 'Change?';
  this.openEmpListDrawer = false;
  this.loadingEmpList = false;
  this.officerIsEmpty = false;
}

  //-------------------------------
  saveData(value : any){
    if (this.isEdit == true) {
      console.log(this.transac_id+" | "+this.validateForm);
      this.modal.confirm({
        nzTitle: 'Do you really want to Update this record?',
        nzOnOk: () => {
          this.dfService.updateData(this.transac_id,value).subscribe(async (data: any) => {
            console.log(data);

            this.cancel();
            await this.notification.create(
              "success",
              'Successfully Updated',
              'Record has been Updated successfully.'
            );
          },
          async error => {
           await this.notification.create(
              "error",
              'Unsuccessfully Updated',
              'Record has not been Updated.'
            );
          });
        }
      });
    } else {
      console.log(" | "+value);
      this.modal.confirm({
        nzTitle: 'Do you really want to Save this record?',
        nzOnOk: () => {
          this.dfService.addNew(value).subscribe(async (data: any) => {
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

  checkDays(value : any){
    console.log(value);
    if (value == true) {
        this.checkValDays = true;
        this.hideDays = true;
    } else {
      this.checkValDays = false;
      this.hideDays = false;
    }
  }
  onExpandChange(data : any,checked: boolean, index: any): void {
    if (checked) {
      this.expandSet.add(index);
    } else {
      this.expandSet.delete(index);
    }
  }

}
