import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AicsIntakeService } from 'src/core/services/aics-intake/aics-intake.service';
import { AicsVoucherService } from 'src/core/services/aics-voucher/aics-voucher.service';
import { PathsegmentService } from 'src/core/services/pathsegment/pathsegment.service';
import { PersonService } from 'src/core/services/person/person.service';

@Component({
  selector: 'app-aics-voucher-form',
  templateUrl: './aics-voucher-form.component.html',
  styleUrls: ['./aics-voucher-form.component.scss']
})
export class AicsVoucherFormComponent implements OnInit {

  loading = false;
  avatarUrl?: string;
  isLoading = false;
  saveLoading = false;
  param: any;
  addParam: any;
  buttonTitle: any;
  visible = false;
  date = new Date();

  validateForm!: FormGroup;
  mainPersonGuid: any;
  intakeData: any = [];

  path: any;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private viewContainerRef: ViewContainerRef,
    private modal: NzModalService,
    private msg: NzMessageService,
    private notification: NzNotificationService,
    private route: ActivatedRoute,
    private drawerService: NzDrawerService,
    private pathService: PathsegmentService,
    private aicsVoucherService: AicsVoucherService,
    private aicsIntakeService: AicsIntakeService,
    private personService: PersonService
  ) { 
    this.route.params.subscribe(params => {
      this.param = params['id'];
      this.addParam = params['person_guid']
    });
  }

  ngOnInit() {
    this.path = this.pathService.getPath()
    this.validateForm = this.fb.group({
      aics_intake_guid: [null],
      person_guid: [null],
      form_trans_no: [null],
    })

    // this.route.queryParams.subscribe(params => {
    //   // let bDate = new DatePipe('en-Us').transform(params['birth_date'], 'yyyy-MM-dd' + 'T' + 'hh:mm:ss', 'GMT+0800');
    //   if (params) {
    //     this.validateForm.patchValue({
    //       first_name: params['firstname'],
    //       middle_name: params['middlename'],
    //       last_name: params['lastname'],
    //       suffix: params['suffix_name'],
    //       prefix: params['prefix'],
    //       province_id: params['province_id'],
    //       citmun_id: params['citmun_id'],
    //       barangay_id: params['barangay_id'],
    //       street: params['street'],
    //       gender_id: params['gender_id'],
    //       place_of_birth: params['place_of_birth'],
    //       civil_status_id: params['civil_status_id'],
    //       age: params['age'],
    //       religion: params['religion']
    //     })
    //     this.date = params['birth_date']
    //     console.log("params", params)
    //   }
    // })

    if (this.param) {
      this.buttonTitle = "Update & Exit"
      // this.isLoading = true;
      // this.aicsLetterService.getAicsLetterEdit(this.param).subscribe((main_data: any) => {
      //   this.isLoading = false;
      //   this.mainPersonGuid = main_data.person_guid;
      //   console.log("MAIN DATA", main_data)
      //   this.validateForm.patchValue({
      //     province_id: main_data.province_id.toString(),
      //     barangay_id: main_data.barangay_id.toString(),
      //     street: main_data.family_head_street,
      //     citmun_id: main_data.citmun_id.toString(),
      //     prefix: main_data.prefix,
      //     first_name: main_data.first_name,
      //     middle_name: main_data.middle_name,
      //     last_name: main_data.last_name,
      //     suffix: main_data.suffix,
      //     fourps_beneficiary: main_data.fourps_beneficiary.toString(),
      //     ips: main_data.ips.toString(),
      //     type_of_ethnicity: main_data.type_of_ethnicity,
      //     birth_date: main_data.birth_date,
      //     place_of_birth: main_data.place_of_birth,
      //     gender_id: main_data.gender_id.toString(),
      //     occupation: main_data.occupation,
      //     monthly_family_income: main_data.monthly_family_income,
      //     house_ownership: main_data.house_ownership.toString(),
      //     form_trans_no: main_data.form_trans_no,
      //     educational_attainment: main_data.educational_attainment.toString(),
      //     application_id: main_data.application_id.toString(),
      //     recommendation_id: main_data.recommendation_id.toString(),
      //     application_type_id: main_data.application_type_id.toString(),
      //     date_recommended: main_data.date_recommended
      //   })
      // })
    } else {
      this.buttonTitle = "Save & Exit"

      if (this.addParam) {
        this.isLoading = true;

        this.aicsIntakeService.getAicsIntakeEdit(this.addParam).subscribe((data: any) => {
          this.isLoading = false;
          this.intakeData = data;
          console.log("PERSON DATA", data)
          
        })

      }
    }
  }

  cancel(): void {
    this.router.navigate(['/main/social-welfare/aics-voucher'])
  }

  submitForm(): void {
    this.saveLoading = true;

    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity();
    }

    this.validateForm.value.aics_intake_guid = this.intakeData.aics_intake_guid
    this.validateForm.value.person_guid = this.intakeData.person_guid

    if(!this.param) {
      this.saveLoading = true;
      console.log("YAKS", this.validateForm.value)
      this.aicsVoucherService.saveAicsVoucher(this.validateForm.value).subscribe(data => {
        if (data) {
          this.saveLoading = false;
          this.router.navigate(['/main/social-welfare/aics-voucher'])
            this.notification.create(
              "success",
              'Successfully Saved',
              'AICS Voucher has successfully saved.'
            );
        } else {
          this.saveLoading = false;
          this.notification.create(
            "error",
            'Unsuccessfully Saved',
            'AICS Voucher unsuccessfully saved.'
          );
        }
      }, error => {
        this.saveLoading = false;
        this.msg.create("error","Server Error");
      })
    } else {
      console.log("UPDATE", this.validateForm.value)
      this.validateForm.value.person_guid = this.mainPersonGuid
      this.aicsVoucherService.updateAicsVoucher(this.param, this.validateForm.value).subscribe(data => {
        this.isLoading = false;
        if (data) {
          this.saveLoading = false;
          this.router.navigate(['/main/social-welfare/aics-voucher'])
          this.notification.create(
            "success",
            'Successfully Updated',
            'AICS Voucher has successfully updated.'
          );
        } else {
          this.saveLoading = false;
          this.notification.create(
            "error",
            'Unsuccessfully Updated',
            'AICS Voucher unsuccessfully updated.'
          );
        }
      }, error => {
        this.saveLoading = false;
        this.msg.create("error","Server Error");
      })
    }
  }

}
