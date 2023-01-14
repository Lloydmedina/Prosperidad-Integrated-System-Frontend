import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';
import { PersonsBrowseComponent } from 'src/app/main-layout/template/persons-browse/persons-browse.component';
import { PathsegmentService } from 'src/core/services/pathsegment/pathsegment.service';
import { RentalApplicationService } from 'src/core/services/rental-application/rental-application.service';

@Component({
  selector: 'app-rental-application-form',
  templateUrl: './rental-application-form.component.html',
  styleUrls: ['./rental-application-form.component.scss']
})
export class RentalApplicationFormComponent implements OnInit {
  validateForm!: FormGroup;
  title = ""
  path: any;
  param: any;
  personList:any = []
  businessList: any = [];
  loading = true;
  btnCancel = "Cancel"

  recordStatus = "Draft"
  buttonTitle: any;
  requirementDetails: any;
  date: any = [];
  checked: any = [];
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private modalService: NzModalService,
    private route: ActivatedRoute,
    private viewContainerRef: ViewContainerRef,
    private modal: NzModalService,
    private notification: NzNotificationService,
    private rentalService: RentalApplicationService,
    private pathService: PathsegmentService,
    private drawerService: NzDrawerService
    ) {this.route.params.subscribe(zxc => {
      this.param = zxc['id']
    }) }

  defaultType: any = "1";
  applicationTypeList:any = []
  getUpdatedChecked: any = []

  ngOnInit() { 
    this.path = this.pathService.getPath();
    this.rentalService.getDropdown().subscribe(data => {
      this.applicationTypeList = data

      this.loading = false;
    })

    this.validateForm = this.fb.group({
      rental_application_id: '',
      applicant_id: ['', [Validators.required]],
      applicant_name: ['', [Validators.required]],
      application_type_id: ['', [Validators.required]],
      occupation_a: '',
      nature_of_business: ['', [Validators.required]],
      address: '',
      occupation_b: '',
      spouse: '',
      type_of_building: '',
      expected_actual_capital: ['', [Validators.required]],
      application_date: new Date(),
      status: '',
      reqs: this.fb.array([]),
      form_trans_no: ['']
    })

    if(this.param){
      this.buttonTitle = 'Update & Exit'

      this.rentalService.getById(this.param).subscribe(data => {
        

        this.validateForm.patchValue({
          rental_application_id: data.rental_application_id,
          applicant_id: data.applicant_id,
          applicant_name: data.applicant_name,
          application_type_id: data.application_type_id.toString(),
          occupation_a: data.occupation_a,
          nature_of_business: data.nature_of_business,
          address: data.address,
          occupation_b: data.occupation_b,
          spouse: data.spouse,
          type_of_building: data.type_of_building,
          expected_actual_capital: data.expected_actual_capital,
          application_date: data.application_date,
          form_trans_no: data.form_trans_no
        })
        
        this.requirementDetails = data.reqs;
        console.log("RQESDA", this.requirementDetails)
        this.rentalService.getReqs(data.application_type_id).subscribe(reqs => {
          const tblReq = reqs
          tblReq.forEach((value:any, index: number) => {
            if (this.requirementDetails[index].submitted != "" && this.requirementDetails[index].submitted != null) {
              this.checked[index] = this.requirementDetails[index].submitted
              this.getUpdatedChecked[index] = this.checked[index]
            }
            if (this.requirementDetails[index].date_submitted != "0001-01-01T00:00:00") {
              this.date[index] = this.requirementDetails[index].date_submitted
            } else {
              this.date[index] = undefined
            }
            this.reqDtlArray().push(
              this.fb.group({
                requirements_id: value.id,
                name: value.name,
                attachment: value.attachment,
                order: value.order,
                checked: this.getUpdatedChecked[index],
                submitted: this.requirementDetails[index].submitted,
                date_submitted: this.date[index],
                file: this.requirementDetails[index].file
              })
            )
            
          });
          
        })

      })
    } else {
      this.buttonTitle = 'Save & Exit'
    }

    
  }



  submitForm(value:any){
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity();
    }

    // let s = this.validateForm.value.reqs;
    // // this.validateForm.value.date_submitted = this.validateForm.value.date_submitted.toString()
    // for (let i=0; i < s.length; i++) {
    //   if (s[i].date_submitted != null) {
    //     s[i].date_submitted = new Date(s[i].date_submitted)
    //   }
    // } 

    
    if(!this.param)
    {
      this.modal.confirm({
        nzTitle: 'Do you really want to Save this record?',
        nzOnOk: () => {
          console.log("SBUMIT", value)
          this.rentalService.insert(value).subscribe(async (data: any) => {
            console.log(data)

            this.router.navigate(["/"+this.path[0]+"/"+this.path[1]+"/"+this.path[2] + "/" + this.path[3]]);
            await this.notification.create(
              "success",
              'Successfully Saved',
              'Rental Application Record has successfully saved.'
            );
          },
          async error => {
           await this.notification.create(
              "error",
              'Unsuccessfully Saved',
              'Rental Application Record has not been saved.'
            );
          });
        }
      })
    }
    else{
      this.modal.confirm({
        nzTitle: 'Do you really want to Update this record?',
        nzOnOk: () => {
          console.log("va", value)
          this.rentalService.update(this.param, value).subscribe(async (data: any) => {
          this.router.navigate(["/"+this.path[0]+"/"+this.path[1]+"/"+this.path[2] + "/" + this.path[3]]);
            await this.notification.create(
              "success",
              'Successfully Updated',
              'Rental Application Record has successfully updated.'
            );
          },
          async error => {
           await this.notification.create(
              "error",
              'Unsuccessfully Saved',
              'Rental Application Record has not been updated.'
            );
          });
        }
      });
    }
  }
  

  cancel(e: MouseEvent){
    e.preventDefault();
    this.router.navigate(["/"+this.path[0]+"/"+this.path[1]+"/"+this.path[2] +"/"+ this.path[3]]);
  }

  selectType(id:any){
    if (!this.param) {
      this.reqDtlArray().clear()
      this.rentalService.getReqs(id).subscribe(reqs => {
        console.log(reqs)
        const tblReq = reqs
        tblReq.forEach((x:any) => {
          this.reqDtlArray().push(this.reqDtl(x))
        });

      })
    }
  }


  openPersonBrowse(): void {
    const drawerRef = this.drawerService.create({
      nzTitle: 'Persons List',
      nzFooter: 'Footer',
      nzPlacement: 'bottom',
      nzHeight: 800,
      nzContent: PersonsBrowseComponent,
      nzContentParams: {
        // value: this.value
      }
    });

    drawerRef.afterClose.subscribe(data => {
      // console.log(data)
      
      if(data){
        let add = ""
        if(data.brgy_name != ""){
            add = "Brgy. " + data.brgy_name + ", " + data.city_mun_name
        }

        this.validateForm.patchValue({
          applicant_id: data.person_guid,
          applicant_name: data.last_name + ", " + data.first_name + " " + data.middle_name.charAt(0) + ". ",
          address: add
        })
      }
    });

  }
  

  reqDtlArray(): FormArray{
    return this.validateForm.get("reqs") as FormArray
  }


  reqDtl(dtl:any){
    return this.fb.group({
      requirements_id: dtl.id,
      name: dtl.name,
      attachment: dtl.attachment,
      order: dtl.order,
      checked: false,
      submitted: '',
      date_submitted: null,
      file: ''
    })
  }

  checkChange(val:any, index:number){
    let valString = ""
    if(val){
      valString = "true"
    }else{
      valString = "false"
    }
    this.reqDtlArray().at(index).patchValue({
      submitted: valString
    })
  }

  handleChange(info: NzUploadChangeParam, i:number): void {
    this.reqDtlArray().at(i).patchValue({
      file: info.file.name
    })
    // console.log(info)
  }
}
