import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AicsService } from 'src/core/services/aics/aics.service';
import { EmployeeService } from 'src/core/services/employee/employee.service';
import { PathsegmentService } from 'src/core/services/pathsegment/pathsegment.service';
import { WccCaseConferenceService } from 'src/core/services/wcc/wcc-case_conference/wcc-case-conference.service';
import { WccIncident_reportService } from 'src/core/services/wcc/wcc-incident_report/wcc-incident_report.service';
import { WccService } from 'src/core/services/wcc/wcc-registration/wcc.service';

@Component({
  selector: 'app-wcc-case-conference-form',
  templateUrl: './wcc-case-conference-form.component.html',
  styleUrls: ['./wcc-case-conference-form.component.scss']
})
export class WccCaseConferenceFormComponent implements OnInit {
  currentUser: any[] = [];
  userValue: any;
  param : any;
  transac_id : any;
  reportData : any;
  isEdit : boolean = false;
  isLoading : boolean = true;
  buttonTitle : any;
  wccForm! : FormGroup;
  dtlForm! : FormGroup;
  basepath_arr : any;
  listOfCases : any;
  radioValue = 'min';
  time: Date | null = null;
  inputedNum : any;
  constructor(
    private route : ActivatedRoute,
    private router: Router,
    private fb : FormBuilder,
    private modal: NzModalService,
    private aicsService: AicsService,
    private notification: NzNotificationService,
    private wccServices : WccService,
    private wccIRServices : WccIncident_reportService,
    private emploService : EmployeeService,
    private wccCCService : WccCaseConferenceService,
    private pathService : PathsegmentService,
  ) {
    this.route.params.subscribe(params => {
      this.param = params['pId'];
      this.transac_id = params['tId'];
    });
  }

  ngOnInit() {
    this.loginUserFunc();
    this.procChecker();
    this.formFunc();
    this.urlPathFunc();
   // this.validationForm();
  }
  urlPathFunc(){
    this.basepath_arr = this.pathService.getPath();
  }
  loginUserFunc(){
    this.currentUser = JSON.parse(localStorage.getItem('auth-user') || '{}');
    this.userValue = this.currentUser[0].users;
  }
  formFunc(){

    this.wccForm = this.fb.group({
      main_pk_id : [''],
      wcc_reg_id : [''],
      form_trans_no : [null],
      report_date : [''],
      case_id : [''],
      case_tittle : [''],
      client_pid : [''],
      client_pname : [''],
      client_paddress : [''],
      client_page : [''],
      client_guardian_id : [''],
      client_guardian_name : [''],
      case_conference_status : [''],
      //discussion array
      case_pod : ['',Validators.required ],
      case_fic : ['',Validators.required ],
      case_agreement : ['',Validators.required ],
      case_time_type : [''],
      case_time_frame : ['',Validators.required ],
      case_ofc_employee_id : [''],
      case_ofc_responsible : ['',Validators.required ],
      case_per_responsible_id : [''],
      case_per_responsible_name : [''],
      case_per_responsible_position : [''],
      wcc_cc_discussion : this.fb.array([]),

    });
  }
  validationForm(){
    this.dtlForm = this.fb.group({
      case_pod : ['',Validators.required ],
      case_fic : ['',Validators.required ],
      case_agreement : ['',Validators.required ],
      case_time_type : [''],
      case_time_frame : ['',Validators.required ],
      case_ofc_employee_id : [''],
      case_ofc_responsible : ['',Validators.required ],
      case_per_responsible_id : [''],
      case_per_responsible_name : [''],
      case_per_responsible_position : [''],
    });
  }
  procChecker(){
    if (this.transac_id != null) {
      this.isEdit = true;
      this.buttonTitle = "Update & Exit"
      this.loadIncidentReport(this.param);
      this.loadDataForEdit(this.transac_id);
    } else {
      this.isEdit = false;
      this.buttonTitle = "Save & Exit"

      this.loadIncidentReport(this.param);
    }
  }
  loadDataForEdit(id : any){
    this.wccCCService.getCCData(id).subscribe(data => {
      console.log("CC data", data[0]);
      this.wccForm.patchValue({
        main_pk_id : data[0].main_pk_id,
        form_trans_no : data[0].form_trans_no
      });
    });
    this.wccCCService.getCCDtls(id).subscribe(dtls => {
      console.log("CC dtl data", dtls[0]);
      const dlt_ = dtls;
      dlt_.forEach((dtl_data : any )=>{
        this.discussionArray().push(
          this.fb.group({
            wcc_cc_id :dtl_data.wcc_cc_id,
            case_pod : dtl_data.case_pod,
            case_fic : dtl_data.case_fic,
            case_agreement : dtl_data.case_agreement,
            case_time_type : dtl_data.case_time_type,
            case_time_frame : parseInt(dtl_data.case_time_frame),
            case_ofc_employee_id : dtl_data.case_ofc_employee_id,
            case_ofc_responsible : dtl_data.case_ofc_responsible,
            case_per_responsible_id : dtl_data.case_per_responsible_id,
            case_per_responsible_name : dtl_data.case_per_responsible_name,
            case_per_responsible_position : dtl_data.case_per_responsible_position,
          })
        );
      });
    });
  }
  icData : any;
  loadIncidentReport(data : any){
    this.wccIRServices.getReportData(data).subscribe(rdata => {
      console.log("incident report",rdata[0])
      this.icData = rdata[0];
      this.loadReportInfo(this.icData.wcc_reg_id);
      this.wccForm.patchValue({
        case_id : this.icData.case_id,
        case_tittle : this.icData.case_tittle,
      });
    });
  }
  loadReportInfo(data : any){
    this.wccServices.getRegistrationData(data).subscribe(cdata => {
      this.isLoading = false;
      this.reportData = cdata[0];
      console.log("report data ",this.reportData)
      this.wccForm.patchValue({
        wcc_reg_id : this.reportData.main_pk_id,
        report_date : this.reportData.transaction_date,
        client_pid : this.reportData.client_pid,
        client_pname : this.reportData.client_name,
        client_paddress : this.reportData.client_address,
        client_page : this.reportData.client_age,
        client_guardian_id : this.reportData.client_parent_pid,
        client_guardian_name : this.reportData.client_parent_name,
        case_conference_status : 0,
      });
      // this.loadIncidentReport(data);
    })
  }


selectDate(value: Date): void {
  console.log(value);
}
//select employeer
expandSet = new Set<number>();
openEmpListDrawer : boolean = false;
selectEmpbtnText = 'Select Personnel';
listOfEmployee : any;
isloadingEmployee : boolean = true;
loadingEmpList : boolean = true;
selectedEmployee : any;
e_stats : boolean = true;
openEmpList(e? : MouseEvent){
  this.loadingEmpList = true;
  this.openEmpListDrawer = true;
  this.emploService.getList().subscribe(empdata => {
    this.listOfEmployee = empdata[0];
    this.loadingEmpList = false;
  })
}
selectedEmpOp(data:any, e? : MouseEvent){
  this.selectedEmployee = data;
  this.isloadingEmployee = false;
  this.e_stats = false;
  this.selectEmpbtnText = 'Change?'
  this.closeEmpDrawer()
  console.log("THIS IS THE Officer",data)
  this.wccForm.patchValue({
    case_ofc_employee_id : data.employee_id,
    case_ofc_responsible : data.dept_name,
    case_per_responsible_id :data.person_id,
    case_per_responsible_name :data.employee_name,
    case_per_responsible_position : data.position_name
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
onExpandChange(data : any,checked: boolean, index: any): void {
  if (checked) {
    this.expandSet.add(index);
  } else {
    this.expandSet.delete(index);
  }
}
timeFrameBox = true;
timeFrameChecker(e : Event){
  this.timeFrameBox = false;
}
numValue = '';
isDisabled = true;
thisAbled : boolean = true;
validateValue(e : any){
  var ev_ = e.target.getAttribute('formControlName')
  var a =  this.wccForm.controls[ev_].value;
 if (a == '') {
    this.inputedNum = true;
  }else{
    this.inputedNum = false;
  }
}
selectTimeType(e : Event){
    this.isDisabled = false;
}

  //discussion array-----------
  discussioFields(data : any) : FormGroup{
    return this.fb.group({
      wcc_cc_id :data.wcc_cc_id,
      case_pod : data.case_pod,
      case_fic : data.case_fic,
      case_agreement : data.case_agreement,
      case_time_type : data.case_time_type,
      case_time_frame : parseInt(data.case_time_frame),
      case_ofc_employee_id : data.case_ofc_employee_id,
      case_ofc_responsible : data.case_ofc_responsible,
      case_per_responsible_id : data.case_per_responsible_id,
      case_per_responsible_name : data.case_per_responsible_name,
      case_per_responsible_position : data.case_per_responsible_position,
    })
  }
  discussionArray() : FormArray{
    return this.wccForm.get("wcc_cc_discussion") as FormArray
  }
addDiscussion(value : any){
  this.discussionArray().push(this.discussioFields(this.wccForm.value));
  this.clearFields();
  this.thisAbled = false;
}
_deleteData(i : any, en : any){
  i.preventDefault()
  this.discussionArray().removeAt(en)
}
_arrayChecker(){
if (this.discussionArray().length != 0) {
 this.thisAbled = false;
} else {
  this.thisAbled = false
}
}
clearFields(){
  this.isDisabled = true;
  this.wccForm.patchValue({
    case_pod : ' ',
      case_fic : ' ',
      case_agreement : ' ',
      case_time_type : '',
      case_time_frame : '',
      case_ofc_employee_id : ' ',
      case_ofc_responsible : '',
      case_per_responsible_id : ' ',
      case_per_responsible_name : ' ',
      case_per_responsible_position : ' ',
  });

}

saveNewData(value : any){
  //console.log(value)
  if (this.isEdit) {
    //console.log(value)
    this.modal.confirm({
      nzTitle: 'Do you really want to Update this record?',
      nzOnOk: () => {
        this.wccCCService.updateData(value.main_pk_id,value).subscribe(async (data: any) => {
          console.log("DATA",data);

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
    console.log(value)
    this.modal.confirm({
      nzTitle: 'Do you really want to Save this record?',
      nzOnOk: () => {
        this.wccCCService.addNew(value).subscribe(async (data: any) => {
          console.log("DATA2", data);

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
