import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzTableDataService } from 'ng-zorro-antd/table';
import { PersonsBrowseComponent } from 'src/app/main-layout/template/persons-browse/persons-browse.component';
import { EmployeeService } from 'src/core/services/employee/employee.service';
import { PathsegmentService } from 'src/core/services/pathsegment/pathsegment.service';
import { PersonService } from 'src/core/services/person/person.service';
import { WccService } from 'src/core/services/wcc/wcc-registration/wcc.service';


@Component({
  selector: 'app-wcc-registration-form',
  templateUrl: './wcc-registration-form.component.html',
  styleUrls: ['./wcc-registration-form.component.scss']
})
export class WccRegistrationFormComponent implements OnInit {
  listURL = "/main/social-welfare/wcc-registration";
  addURL = "/main/social-welfare/wcc-registration/add-form";
expandSet = new Set<number>();
expandSetDetails = new Set<number>();
basepath_arr : any;
param : any;
pk_id : any;
isLoading : boolean = true;
wccForm! : FormGroup;
saveBtn : any;
buttonTitle: any;
currentUser: any[] = [];
userValue: any;
isEdit : boolean = true;

  constructor(
    private router : Router,
    private route : ActivatedRoute,
    private fb : FormBuilder,
    private notification : NzNotificationService,
    private personService : PersonService,
    private wccService : WccService,
    private pathservice : PathsegmentService,
    private drawerService : NzDrawerService,
    private emploService : EmployeeService,
    private modal : NzModalService
  ) {
    this.route.params.subscribe(params => {
      this.param = params['pId'];
      this.pk_id = params['tId'];
    });
  }

  ngOnInit() {
    this.loginUserFunc();
    this.processChecker(this.pk_id);
    this.urlPathFunc();
    this.wccFormFunc();
  }

urlPathFunc(){
  this.basepath_arr = this.pathservice.getPath();
}
loginUserFunc(){
  this.currentUser = JSON.parse(localStorage.getItem('auth-user') || '{}');
  this.userValue = this.currentUser[0].users;
}
wccFormFunc(){
  this.wccForm = this.fb.group({
    main_pk_id :[''],
    form_trans_no :[''],
    transaction_date :[''],
    transaction_status :[''],
    applicant_pid :[''],
    applicant_name :[''],
    client_pid :[''],
    client_name :[''],
    client_age :[''],
    client_address :[''],
    client_parent_pid :['',Validators.required],
    client_parent_name :[''],
    referral_eid :['',Validators.required],
    referral_pname :[''],
    social_worker_id :[''],
    social_worker_name :[''],
    rescue_details :['',Validators.required],
  });
}

personData : any;
processChecker(ppk_id : any){
  if (ppk_id != null) {

    this.isEdit = true;
    this.loadTransactionForEdit(this.pk_id)
    this.buttonTitle = "Update & Exit"

  } else {
    this.isEdit = false;
    this.loadPerson(this.param)
    this.buttonTitle = "Save & Exit"
    this.selectEmpbtnText = 'Select Referrer'
  }
}
appl_name : any;
appl_address : any;
appl_age : any;
appl_contact : any;
appl_client_relation : any;
loadingFamily : boolean = true;
 //show person list-----------
 p_name : any;
 p_address : any;
 p_bdate : any;
 p_bplace : any;
 p_age : any;
 p_cs : any;
 p_ctzn : any;
 p_gender : any;
 p_prof : any;
 p_religion : any;
 p_btn = "Search for Client";
 p_btn_icon = 'search';
 p_stats = false;
 p_data : any;
 p_id : any;
 checkFCStatus : boolean = false;
 sample: any;
 clientDetails : any;
 applicantData : any;
loadPerson(personid : any){
  this.personService.getPersonGUID(personid).subscribe(pdata =>{
    this.applicantData = pdata[0];
    this.appl_client_relation = this.checkApplClientRelation();
    this.p_stats = true;
    this.p_btn = "Change";
    this.p_btn_icon = 'edit';
    this.wccForm.patchValue({
      transaction_date : Date(),
      transaction_status :'0',
      applicant_pid :this.applicantData.person_guid,
      applicant_name :this.applicantData.first_name+" "+this.applicantData.middle_name+" "+this.applicantData.last_name+" "+this.applicantData.suffix,
      client_pid :this.applicantData.person_guid,
      client_name :this.applicantData.first_name+" "+this.applicantData.middle_name+" "+this.applicantData.last_name+" "+this.applicantData.suffix,
      client_age :this.applicantData.age,
      client_address :this.applicantData.street == null ? this.applicantData.brgy_name+", "+this.applicantData.city_mun_name+", "+this.applicantData.province_name : this.applicantData.brgy_name+", "+this.applicantData.city_mun_name+", "+this.applicantData.province_name,
      social_worker_id :this.userValue.user_guid,
      social_worker_name :this.userValue.userFull_Name,
    });
      this.clientDatas(pdata[0])
      this.checkFCdetails(personid);
  });
}
applicantDatas(){

}
clientDatas(cdata : any){
  this.p_btn = "Change Client?";
  this.p_name = cdata.first_name+" "+cdata.middle_name+" "+cdata.last_name+" "+cdata.suffix;
  this.p_address = cdata.street == null ? cdata.brgy_name+", "+cdata.city_mun_name+", "+cdata.province_name : cdata.brgy_name+", "+cdata.city_mun_name+", "+cdata.province_name;
  this.p_bdate = cdata.birth_date;
  this.p_bplace = cdata.place_of_birth;
  this.p_cs = cdata.civil_status_name;
  this.p_ctzn = cdata.citizenship;
  this.p_gender = cdata.gender_name;
  this.p_prof = cdata.profession;
  this.p_religion = cdata.religion;
  this.p_id = cdata.person_guid;
  this.p_age = cdata.age;
}
transData : any;
loadTransactionForEdit(trans_id : any){
  this.wccService.getRegistrationData(trans_id).subscribe(tdata => {
    this.transData = tdata[0];
    const transac_id = this.transData.main_pk_id;
    const appli_pid = this.transData.applicant_pid;
    const client_id = this.transData.client_pid;
    const parent_id = this.transData.client_parent_pid;
    const refer_eid = this.transData.referral_eid;
    console.log("this is the transaction data",this.transData)
    this.wccForm.patchValue({
      main_pk_id :this.transData.main_pk_id,
      form_trans_no :this.transData.form_trans_no,
      transaction_date :this.transData.transaction_date,
      transaction_status :this.transData.transaction_status,
      applicant_pid :this.transData.applicant_pid,
      applicant_name :this.transData.applicant_name,
      client_pid :this.transData.client_id,
      client_name :this.transData.client_name,
      client_age :this.transData.client_age,
      client_address :this.transData.client_address,
      client_parent_pid :this.transData.client_parent_pid,
      client_parent_name :this.transData.client_parent_pid,
      referral_eid :this.transData.referral_eid,
      referral_pname :this.transData.referral_pname,
      social_worker_id :this.transData.social_worker_id,
      social_worker_name :this.transData.social_worker_name,
      rescue_details :this.transData.rescue_details,
    });
  this.loadPerson(appli_pid);

//adding client details ------------
this.personService.getPersonGUID(client_id).subscribe(pdata => {
  this.clientDatas(pdata[0])
});
// -----------------------------------
//adding parent details ------------
this.selectedGuardianDtl(parent_id)
//----------------------------------
this.wccService.getReferrerData(refer_eid).subscribe(rdata => {
  console.log("REFERRER",rdata)
  this.selectedRefeerer = rdata[0];
  this.isloadingEmployee = false;
  this.e_stats = false;
  this.selectEmpbtnText = "Change referrer?"
  console.log(this.selectedRefeerer)
})
    this.isLoading = false;
  })
}
selectedGuardianDtl(parent_id : any){
  this.personService.getPersonGUID(parent_id).subscribe(pdata => {
    this.selectedGuardian = pdata[0];
    this.selectGuardbtnText = "Change Guardian?"
    this.f_stats = true;
    this.loadingFamily = false;
  });
}
checkApplClientRelation(){
return "N/A";
}
// FILTER FAMILY ------------------
fcDetailId : any;
disabled: boolean = true;
f_stats :boolean = false;
f_res = false;
f_count :any;
checkFCdetails(id : any){

  this.loadingFamily = true;
  this.wccService.getFCid(id).subscribe(data =>{
   // console.log("CHECK FAMILY DETAILS",data)
    if (data !== null) {
      this.getFcDetails(data.main_guid)
    } else {
      this.checkFromFcHeadDetails(id)
      this.f_stats = false;
    }
  })
}

listOfFamily : any;
getFcDetails(fcid : any){
  this.loadingFamily = true;
 if (fcid != null) {
  this.wccService.getFClist(fcid).subscribe(data =>{
    this.f_count = data.length;
      this.arrayChecker(data);
      console.log("Check array",this.arrayChecker)
      if (data !=null) {
        this.f_count = data.length;
        this.listOfFamily = data;
        this.isLoading = false;
        this.loadingFamily = true;
        this.f_res = true;
        this.f_stats = true;
        this.selectGuardbtn = true;
        this.selectGuardbtnText = "Select Family Member";
      } else {
        this.listOfFamily = [];
        this.loadingFamily = false;
        this.f_res = false;
        this.f_stats = false;
        this.selectGuardbtn = false;
        this.selectGuardbtnText = "Select Non Family Member";
      }

  })
 } else {
    this.listOfFamily = [];
    this.isLoading = false;
 }
}
arrayChecker(arr : any){
  return arr;
}

fcHeadDetail : any;
checkFromFcHeadDetails(fch : any){
  this.loadingFamily = true;
  this.wccService.getFCHeadDetails(fch).subscribe(data => {
    console.log(data)
    if (data == null) {
      console.log("nofamily")
      this.listOfFamily = [];
      this.isLoading = false;
      this.f_stats = false;
      this.selectGuardbtnText = "Select Non Family Member";
    } else {
      this.fcHeadDetail = data.family_composition_guid
      this.getFcDetails(this.fcHeadDetail);

    }
  })

}
//SELECT FAMILY MEMBER -----------------
openFamilyList : boolean =false;
openFamilyDrawer(e? : MouseEvent) : void{
  const fm = this.openFamilyList = true;
  this.loadingFamily = true;
}

closeFamilyDrawer(){
  this.openFamilyList = false;
  this.loadingFamily = false;
}
cancelFamilyDrawer(){
  this.openFamilyList = false;
  this.loadingFamily = true;
}

selectGuardbtn : boolean = false;
selectGuardbtnText : any;
selectedGuardian : any;
selectedGuardianName : any;
selectedParentOp(per_val : any,e? : MouseEvent){
    if (per_val != null) {
  this.selectedGuardian = per_val;
  this.selectGuardbtnText = "Change Guardian?";
  this.f_stats = true;
  this.selectedGuardianName = per_val.first_name+" "+per_val.middle_name+" "+per_val.last_name,
  console.log("THE GUARDIAN",this.selectedGuardianName);

      this.wccForm.patchValue({
        client_parent_pid :per_val.person_guid,
        client_parent_name :this.selectedGuardianName,
      });
    } else {
      this.wccForm.patchValue({
        client_parent_pid :[],
        client_parent_name :[],
      });
    }
  this.sample = per_val.first_name+" "+per_val.middle_name != null ? per_val.middle_name :""+""+per_val.last_name
  this.closeFamilyDrawer();

}
//SELECT NON FAMILY MEMBER -----------------
openNonFamilyList(e? : MouseEvent) :void {

  this.f_stats = false;
  this.selectGuardbtn = false;
  this.selectGuardbtnText = "Select Non Family Member";
  const drawerRef = this.drawerService.create({
    nzTitle: 'Person List',
    nzFooter: 'Footer',
    nzPlacement: 'right',
    nzWidth :1500,
    nzContent: PersonsBrowseComponent,
    nzContentParams: {
    }
  });

  drawerRef.afterClose.subscribe(data => {
    if (this.isEdit) {
      if (data == null) {
        console.log("NO DATA SELECTED")
        console.log(this.wccForm.value)
      } else {
        this.selectedGuardianDtl(data.person_guid)
      }
    } else {
      console.log("OKAY KAAYo")
      if (data != null) {
        this.selectedGuardian = [];
        this.listOfFamily = [];
        this.selectGuardbtnText = "Change?";
        this.selectedGuardian = data;
        this.f_stats = true;
        this.loadingFamily = false;
        console.log('this----guardian',this.selectedGuardian);
        this.wccForm.patchValue({
          client_parent_pid :data.person_guid,
          client_parent_name :data.first_name+" "+data.middle_name+" "+data.last_name+" "+data.suffix,
        });
        } else {
          this.wccForm.patchValue({
            client_parent_pid :[],
            client_parent_name :[],
          });
          this.selectGuardbtnText = "Select Non Family Member";
          this.selectedGuardian = [];
          this.f_stats = false;
          this.loadingFamily = true;
        }
    }

  });
}

cancel(){
  if (this.isEdit == true) {
    this.router.navigate(["/"+this.basepath_arr[0]+"/"+this.basepath_arr[1]+"/"+this.basepath_arr[2]])
  } else {
    this.router.navigate(["/"+this.basepath_arr[0]+"/"+this.basepath_arr[1]+"/"+this.basepath_arr[2]+"/"+this.basepath_arr[3]])
  }
}

// SELECT PERSON --------------------
showPersonList(e? : MouseEvent) :void {
  this.selectedGuardian = [];
  this.listOfFamily = [];
  this.f_stats = false;
  this.selectGuardbtn = false;
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
    //  console.log("new client", data)
      this.checkFCdetails(data.person_guid);
      this.clientDatas(data);
      this.wccForm.patchValue({
        client_pid :data.person_guid,
        client_name :data.first_name+" "+data.middle_name+" "+data.last_name+" "+data.suffix,
        client_age :data.age,
        client_address :data.street == null ? data.brgy_name+", "+data.city_mun_name+", "+data.province_name : data.brgy_name+", "+data.city_mun_name+", "+data.province_name,
      });
    } else {
      this.loadPerson(this.param)
    }
  });
}

//SELECT REFERRER - EMPLOYEE ------------
openEmpListDrawer : boolean = false;
selectEmpbtnText : any;
listOfEmployee : any;
isloadingEmployee : boolean = true;
loadingEmpList : boolean = true;
selectedRefeerer : any;
e_stats : boolean = true;
openEmpList(e? : MouseEvent){
  this.loadingEmpList = true;
  this.openEmpListDrawer = true;
  this.emploService.getList().subscribe(empdata => {
    this.listOfEmployee = empdata[0];
    this.loadingEmpList = false;
  })
}
selectedReferrerOp(data:any, e? : MouseEvent){
  this.selectedRefeerer = data;
  this.isloadingEmployee = false;
  this.e_stats = false;
  this.selectEmpbtnText = 'Change?'
  this.closeEmpDrawer()
  console.log("THIS IS THE REFERRER",data)
  this.wccForm.patchValue({
    referral_eid :data.employee_id,
    referral_pname :data.employee_name,
  });

}
cancelEmpDrawer(){
  this.openEmpListDrawer = false;
  this.loadingEmpList = true;
}
closeEmpDrawer(){
  this.openEmpListDrawer = false;
  this.loadingEmpList = false;
}

//Save registration

saveData(value : any) : void{
 if (this.isEdit == true) {
  console.log(value)
  this.modal.confirm({
    nzTitle: 'Do you really want to Update this record?',
    nzOnOk: () => {
      this.wccService.updateData(value.main_pk_id,value).subscribe(async (data: any) => {
        console.log(data);

        this.backRoute();
        await this.notification.create(
          "success",
          'Updated Successfully',
          'New Record has successfully Updated.'
        );
      },
      async error => {
       await this.notification.create(
          "error",
          'Updated Unsuccessfully',
          'New Record has not been Updated.'
        );
      });
    }
  });
 } else {
  console.log(value)
  this.modal.confirm({
    nzTitle: 'Do you really want to Save this record?',
    nzOnOk: () => {
      this.wccService.saveNewRegistration(value).subscribe(async (data: any) => {
        console.log(data);

        this.backRoute();
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

onExpandChange(data : any,checked: boolean, index: any): void {
  if (checked) {
    this.expandSet.add(index);
  } else {
    this.expandSet.delete(index);
  }
}

backRoute(){
    this.router.navigate([this.listURL]);
}

}
