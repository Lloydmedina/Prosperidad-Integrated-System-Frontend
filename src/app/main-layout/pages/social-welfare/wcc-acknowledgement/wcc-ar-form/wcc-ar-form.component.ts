import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { PersonsBrowseComponent } from 'src/app/main-layout/template/persons-browse/persons-browse.component';
import { FamilyCompositionService } from 'src/core/services/family-composition/family-composition.service';
import { PathsegmentService } from 'src/core/services/pathsegment/pathsegment.service';
import { PersonService } from 'src/core/services/person/person.service';
import { WccAcknowledgementService } from 'src/core/services/wcc/wcc-acknowledgement/wcc-acknowledgement.service';
import { WccCaseConferenceService } from 'src/core/services/wcc/wcc-case_conference/wcc-case-conference.service';
import { WccIncident_reportService } from 'src/core/services/wcc/wcc-incident_report/wcc-incident_report.service';
import { WccService } from 'src/core/services/wcc/wcc-registration/wcc.service';
import { WccSummary_intakeService } from 'src/core/services/wcc/wcc-summary_intake/wcc-summary_intake.service';

@Component({
  selector: 'app-wcc-ar-form',
  templateUrl: './wcc-ar-form.component.html',
  styleUrls: ['./wcc-ar-form.component.scss']
})
export class WccArFormComponent implements OnInit {

  currentUser: any[] = [];
  userValue: any;

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
    private notification : NzNotificationService,
    private siService : WccSummary_intakeService,
    private wccCCService : WccCaseConferenceService,
    private personService : PersonService,
    private wccfamService : WccService,
    private famService : FamilyCompositionService,
    private wccIRServices : WccIncident_reportService,
    private fb : FormBuilder,
    private pathService: PathsegmentService,
    private acknowledgementService : WccAcknowledgementService

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
      //recipient
    wcc_reg_id: [''],
    wcc_summ_intake_date : [''],
    status : [''],
    client_pid : [''],
    client_pname : [''],
    client_address : [''],
    client_family_id : [''],
    client_4ps : [''].toString(),
    case_tittle : [''],
    case_id : [''],
    rcpt_1 : ['',[Validators.required]],
    witness_1 : ['',[Validators.required]],
    recipient_data : this.fb.array([]),
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
     // console.log("Transaction", this.transac_id);
      this.loadDataForUpdate(this.transac_id);
    } else {
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
      //console.log("SI data",this.isData);
      this.loadClientsInfo(this.isData.client_pid);
      // this.loadCaseConData(this.isData.wcc_reg_id);
      // this.loadIncidentReport(this.isData.wcc_reg_id);
      this.loadRegistrationData(this.isData.wcc_reg_id);
      this.validateForm.patchValue({
        wcc_summ_intake_date :this.isData.wcc_summ_intake_date,
        status : 0,
        client_family_id : this.isData.client_family_id == null ? "" : this.isData.client_family_id,
        client_4ps : this.isData.client_family_id == null ? 0 : this.isData.client_family_id,
        case_tittle : this.isData.case_tittle,
        case_id : this.isData.case_id,
      });
    });
  }
  upData : any [] = [];
  loadDataForUpdate(dataid : any){
    this.acknowledgementService.getData(dataid).subscribe(resData =>{
      this.upData = resData[0];
      this.isLoading = false;
      this.loadClientsInfo(this.upData[0].client_pid);
     // console.log("TRANSACTION", this.upData);
      const rcptS = this.upData.map((rcpt_s : any)=> rcpt_s.recipient_data)[0];
      const wtnsS = this.upData.map((wtns_s : any)=> wtns_s.witness_data)[0];
      rcptS.forEach((rcptS_data : any)=>{
        this.recipientArray().push(
          this.fb.group({
            wcc_ar_recipient_pid : rcptS_data.wcc_ar_pkid,
            wcc_ar_recipient_name : rcptS_data.wcc_ar_recipient_name,
            wcc_ar_recipient_address : rcptS_data.wcc_ar_recipient_address,
            wcc_ar_recipient_relation : rcptS_data.wcc_ar_recipient_relation,
            wcc_ar_recipient_familyid : rcptS_data.wcc_ar_recipient_familyid,
          })
        )
      });
      wtnsS.forEach((wtnsS_data : any)=>{
        this.witnessArray().push(
          this.fb.group({
            wcc_ar_witness_pid : wtnsS_data.wcc_ar_pkid,
            wcc_ar_witness_name : wtnsS_data.wcc_ar_witness_name,
            wcc_ar_witness_address : wtnsS_data.wcc_ar_witness_address,
            wcc_ar_witness_relation : wtnsS_data.wcc_ar_witness_relation,
            wcc_ar_witness_familyid : wtnsS_data.wcc_ar_witness_familyid,
          })
        )
      });
      this.validateForm.patchValue({
        wcc_reg_id: this.upData[0].wcc_reg_id,
        client_pid : this.upData[0].client_pid,
        client_pname : this.upData[0].client_pname,
        client_address : this.upData[0].client_address,
        wcc_summ_intake_date :this.upData[0].wcc_summ_intake_date,
        status : this.upData[0].status,
        client_family_id : this.upData[0].client_family_id,
        client_4ps : this.upData[0].client_4ps,
        case_tittle : this.upData[0].case_tittle,
        case_id : this.upData[0].case_id,
        rcpt_1 : this.upData[0].client_pid,
        witness_1 : this.upData[0].client_pid
      });
    });
  }
  loadCaseConferenceDtl(cc_id : any){
    this.wccCCService.getCCDtls(cc_id).subscribe(dts => {
     this.caseDtlData = dts;
    //  console.log("THE DATA ",dts);

    });
  }

  loadRegistrationData(regid : any){
    this.wccfamService.getRegistrationData(regid).subscribe(regdata => {
      this.registrationData = regdata[0];
     // console.log("Registration data ",this.registrationData);
      this.loadPersonData(this.registrationData.client_parent_pid);
      this.validateForm.patchValue({
        client_address: this.registrationData.client_address,
        client_pname: this.registrationData.client_name,
        client_pid: this.registrationData.client_parent_pid,
        wcc_reg_id: this.registrationData.main_pk_id,
      })
    })
  }
  loadClientsInfo(pid : any){
    this.personService.getPersonGUID(pid).subscribe(pdata =>{
      this.clientData = pdata[0];
      this.getFamilyId(pdata[0]);
      //console.log("Client data ",this.clientData);
      //console.log('INFOMATIONS ARRAY', this.validateForm.value);
    });
  }

  famCtrl : boolean = false;
  getFamilyId(perData : any){
    this.isLoading = false;
    this.wccfamService.getFCid(perData.person_guid).subscribe(fam_id =>{
      if (fam_id) {
        this.getFamilyList(fam_id.main_guid);
        this.famCtrl = true;
      } else {
        this.famCtrl = false;
       // console.log("no family");
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
  rcpt_data: any = [];
  witness_data: any = [];
  loadPersonData(perid: any){
    this.personService.getPersonGUID(perid).subscribe(pdata =>{
    this.personData = pdata[0];
    this.validateForm.patchValue({
      rcpt_1 : perid
    });
   this.recipientArray().push(
      this.fb.group({
        wcc_ar_recipient_pid : perid,
        wcc_ar_recipient_name : this.personData.middle_name != "" ? this.personData.first_name+" "+this.personData.middle_name+" "+this.personData.last_name+" "+this.personData.suffix : this.personData.first_name+" "+this.personData.last_name+" "+this.personData.suffix,
        wcc_ar_recipient_address : this.personData.street != null ? this.personData.street+", "+this.personData.brgy_name+", "+this.personData.city_mun_name+", "+this.personData.province_name : this.personData.brgy_name+", "+this.personData.city_mun_name+", "+this.personData.province_name,
        wcc_ar_recipient_relation : "",
        wcc_ar_recipient_familyid : "",
      })
    )

      this.rcpt_data = this.validateForm.value.recipient_data
    });
  }

      //SET ARRAY -----------
      recipientFields(data : any) : FormGroup{
        return this.fb.group({
          wcc_ar_recipient_pid : "",
          wcc_ar_recipient_name : "",
          wcc_ar_recipient_address : "",
          wcc_ar_recipient_relation : "",
          wcc_ar_recipient_familyid : "",
        });
      }
      witnessFields(data: any): FormGroup {
        return this.fb.group({
          wcc_ar_witness_pid : "",
          wcc_ar_witness_name : "",
          wcc_ar_witness_address : "",
          wcc_ar_witness_relation : "",
          wcc_ar_witness_familyid : "",
        });
      }
      //INITIATE ARRAY-----------
      recipientArray() : FormArray {
        return this.validateForm.get("recipient_data") as FormArray
      }
      witnessArray() : FormArray {
        return this.validateForm.get("witness_data") as FormArray
      }
      // ADD TO ARRAY------------
      addRecipient(e? : MouseEvent){
      this.recipientArray().push(this.recipientFields(this.validateForm.value));
      }
      addWitness(e? : MouseEvent){
        this.witnessArray().push(this.recipientFields(this.validateForm.value));
        }


  //FAMILY DRAWER ------------------
  familyBrowse : any;
  openFamilyList : boolean =false;
  loadingFamily : boolean = true;
  loadFamilyList(e : any){
    this.openFamilyList = true;
    var f_id = this.familyId
    //console.log(f_id);
    this.wccfamService.getFClist(f_id).subscribe(fdata =>{
      this.familyBrowse = fdata;
     // console.log("Family data list",this.familyBrowse);
      //console.log("data on array",this.validateForm.value.recipient_data);
    });
  }
  selectRecipient(data:any, e? : MouseEvent){
    this.recipientArray().push(
      this.fb.group({
        wcc_ra_recipient_pid : data.person_guid,
        wcc_ra_recipient_name : data.first_name+" "+data.middle_name+" "+data.last_name+" "+data.suffix,
        wcc_ra_recipient_address : data.street+", "+data.brgy_name+", "+data.city_mun_name+", "+data.province_name,
        wcc_ra_recipient_relation : "",
      })

    )
    this.rcpt_data = this.validateForm.value.recipient_data
    this.closeFamilyDrawer();
    //console.log("data on array",this.validateForm.value);

  }
  closeFamilyDrawer(){
    this.openFamilyList = false;
    this.loadingFamily = false;
  }
  cancelFamilyDrawer(){
    this.openFamilyList = false;
    this.loadingFamily = true;
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
  rcpt_full : boolean = false;
  rcptArrayChecker(e? : MouseEvent) : void{
    if (this.recipientArray().length > 1) {
      console.log("full");
      this.rcpt_full = true;
    } else {
      console.log("ay okie");
      this.addRctp();
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
          wcc_ar_witness_pid : data.person_guid,
          wcc_ar_witness_name : data.first_name+" "+data.middle_name+" "+data.last_name+" "+data.suffix,
          wcc_ar_witness_address : data.street == null ? data.brgy_name+", "+data.city_mun_name+", "+data.province_name : data.brgy_name+", "+data.city_mun_name+", "+data.province_name,
          wcc_ar_witness_relation : "",
          wcc_ar_witness_familyid : "",
        })
      );
    } else {

    }
  });
}

addRctp(e? : MouseEvent) :void {

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
    console.log(data);
    if (data != null) {
      this.wccfamService.getFCid(data.person_guid).subscribe(fam_id =>{
       // console.log("fam id", fam_id);
        if (fam_id) {
          this.wccfamService.getFClist(fam_id).subscribe(fdata =>{
            //console.log(fdata);
          });
        } else {

         // console.log("no family");
        }
      })
      this.validateForm.patchValue({
        rcpt_1 : data.person_guid
      })
      this.recipientArray().push(
        this.fb.group({
          wcc_ar_recipient_pid : data.person_guid,
          wcc_ar_recipient_name : data.first_name+" "+data.middle_name+" "+data.last_name+" "+data.suffix,
          wcc_ar_recipient_address : data.street == null ? data.brgy_name+", "+data.city_mun_name+", "+data.province_name : data.brgy_name+", "+data.city_mun_name+", "+data.province_name,
          wcc_ar_recipient_relation : "",
          wcc_ar_recipient_familyid : "",
        })
      );
    } else {

    }
  });
}

deleteWitness(i : any, en : any){
  i.preventDefault()
  this.witnessArray().removeAt(en)
  if(this.witnessArray().length < 1){
    this.validateForm.patchValue({
      witness_1 : null
    });
  }
}
deleteRecepient(i : any, en : any){
  i.preventDefault()
  this.recipientArray().removeAt(en)
  if(this.recipientArray().length < 1){
    this.validateForm.patchValue({
      rcpt_1 : null
    });
  }
}
  saveData(value : any) : void{
    if (this.isEdit == true) {
    //  console.log(this.transac_id);
      this.modal.confirm({
        nzTitle: 'Do you really want to Update this record?',
        nzOnOk: () => {
          this.acknowledgementService.updateData(this.transac_id,value).subscribe(async (data: any) => {
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
      this.modal.confirm({
        nzTitle: 'Do you really want to Save this record?',
        nzOnOk: () => {
          this.acknowledgementService.addNew(value).subscribe(async (data: any) => {
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

  //-------------------------------
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

    // loadCaseConData(data : any){
  //   this.siService.getCCData(data).subscribe(cres => {
  //     this.caseCData = cres[0];
  //     this.loadCaseConferenceDtl(this.caseCData.case_dtl_id);
  //     //console.log("CC data", this.caseCData);
  //   })
  // }

  // loadIncidentReport(caseid: any){
  //   this.wccIRServices.getReportDataRID(caseid).subscribe(report => {
  //     this.reportData = report[0];
  //    //console.log("IR data ",this.reportData);

  //   });
  // }

}
