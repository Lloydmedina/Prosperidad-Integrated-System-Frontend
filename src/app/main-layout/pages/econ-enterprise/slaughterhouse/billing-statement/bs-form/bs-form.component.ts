import { DatePipe } from '@angular/common';
import { Component, HostListener, OnInit, ViewContainerRef } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ReceivingBrowseComponent } from 'src/app/main-layout/template/receiving-browse/receiving-browse.component';
import { BillingStatementService } from 'src/core/services/billing-statement/billing-statement.service';
import { PathsegmentService } from 'src/core/services/pathsegment/pathsegment.service';

@Component({
  selector: 'app-bs-form',
  templateUrl: './bs-form.component.html',
  styleUrls: ['./bs-form.component.scss']
})
export class BsFormComponent implements OnInit {

  @HostListener("window:beforeunload", ["$event"]) unloadHandler(event: Event) {
    let result = confirm("Changes you made may not be saved.");
    if (result) {
      // Do more processing...
    }
    event.returnValue = false; // stay on same page
  }

  loading = false;
  avatarUrl?: string;
  isLoading = false;
  saveLoading = false;
  param: any;
  addParam: any;
  buttonTitle: any;
  visible = false;

  amount_id = []

  validateForm!: FormGroup;
  dataDisplay: any;
  path: any;
  
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private viewContainerRef: ViewContainerRef,
    private modal: NzModalService,
    private msg: NzMessageService,
    private notification: NzNotificationService,
    private route: ActivatedRoute,
    private bsService: BillingStatementService,
    public datepipe: DatePipe,
    private drawerService: NzDrawerService,
    private pathService: PathsegmentService
  ) { 
    this.route.params.subscribe(params => {
      this.param = params['id'];
      this.addParam = params['person_guid']
    });
  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      client_name: [null],
      amount: [null],
      form_trans_no: [null],
      details: this.fb.array([])
    });

    if (this.param) {
      this.buttonTitle = "Update & Exit"
      this.isLoading = false;
      
      
    } else {
      this.buttonTitle = "Save & Exit"
      this.addQuantity()
      if (this.addParam) {
        this.isLoading = true;
        
      }
    }

  }

  quantities() : FormArray {
    return this.validateForm.get("details") as FormArray
  }

  newQuantity(): FormGroup {
    return this.fb.group({
      particulars: [''],
      amount: [''],
      status: ['']
    })
  }

  addQuantity() {
    this.quantities().push(this.newQuantity());
    this.dataDisplay = [''];
  }
   
  removeQuantity(i:number) {
    this.modal.confirm({
      nzTitle: 'Do you Want to remove these item?',
      nzOnOk: () => {
        this.quantities().removeAt(i);
        if (this.quantities().length == 0) {
          this.dataDisplay = [];
        }
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/main/economic-enterprises/slaughterhouse/billing-statement'])
  }

  submitForm(): void {
    this.saveLoading = true;
    
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity();
    }

    // this.validateForm.value.birth_date = this.validateForm.value.birth_date.toString()
    this.validateForm.value.barangay_id = Number(this.validateForm.value.barangay_id)

    if(!this.param) {
      this.saveLoading = false;
      // this.validateForm.value.person_guid = this.addParam
      // console.log("YAKS", this.validateForm.value)
      // this.familyCompositionService.saveFamilyComposition(this.validateForm.value).subscribe(data => {
      //   if (data) {
      //     this.saveLoading = false;
      //     this.router.navigate(['/main/social-welfare/fc-registration'])
      //       this.notification.create(
      //         "success",
      //         'Successfully Saved',
      //         'Family Composition Setup has successfully saved.'
      //       );
      //   } else {
      //     this.saveLoading = false;
      //     this.notification.create(
      //       "error",
      //       'Unsuccessfully Saved',
      //       'Family Composition Setup unsuccessfully saved.'
      //     );
      //   }
      // }, error => {
      //   this.saveLoading = false;
      //   this.msg.create("error","Server Error");
      // })
    } else {
      console.log("UPDATE", this.validateForm.value)
      // this.validateForm.value.person_guid = this.mainPersonGuid
      // this.familyCompositionService.updateFamilyComposition(this.param, this.validateForm.value).subscribe(data => {
      //   this.isLoading = false;
      //   if (data) {
      //     this.saveLoading = false;
      //     this.router.navigate(['/main/social-welfare/fc-registration'])
      //     this.notification.create(
      //       "success",
      //       'Successfully Updated',
      //       'Family Composition Setup has successfully updated.'
      //     );
      //   } else {
      //     this.saveLoading = false;
      //     this.notification.create(
      //       "error",
      //       'Unsuccessfully Updated',
      //       'Family Composition Setup unsuccessfully updated.'
      //     );
      //   }
      // }, error => {
      //   this.saveLoading = false;
      //   this.msg.create("error","Server Error");
      // })
    }
  }

  openBrowse(): void {
    const drawerRef = this.drawerService.create({
      nzTitle: 'Receiving List',
      nzFooter: 'Footer',
      nzPlacement: 'bottom',
      nzHeight: 800,
      nzContent: ReceivingBrowseComponent,
      nzContentParams: {
        // value: this.value
      }
    });

    drawerRef.afterClose.subscribe(data => {
      console.log(data)
      
      if(data){
        this.validateForm.patchValue({
          receiving_id: data.receiving_id,
          client_name: data.client_name
        })
      }
    });

  }

  total_amount: number = 0.0;
  totalAmount() {
    this.total_amount = 0
    let s = this.validateForm.value.details
    for(let x = 0; x < s.length; x++)
    {
        this.total_amount += Number(s[x].amount)
    }
  }

}
