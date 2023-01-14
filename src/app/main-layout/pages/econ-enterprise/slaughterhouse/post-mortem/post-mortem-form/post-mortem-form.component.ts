import { DatePipe } from '@angular/common';
import { Component, HostListener, OnInit, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ReceivingBrowseComponent } from 'src/app/main-layout/template/receiving-browse/receiving-browse.component';
import { PathsegmentService } from 'src/core/services/pathsegment/pathsegment.service';
import { PostMortemService } from 'src/core/services/post-mortem/post-mortem.service';

@Component({
  selector: 'app-post-mortem-form',
  templateUrl: './post-mortem-form.component.html',
  styleUrls: ['./post-mortem-form.component.scss']
})
export class PostMortemFormComponent implements OnInit {

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
    private postMortemService: PostMortemService,
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
      client_name: [null, [Validators.required]],
      no_of_hogs: [null],
      total_kilos: [null],
      dressed_chicken_and_by_products: [null],
      total_payment: [null],
      form_trans_no: [null],
      details: this.fb.array([]),
    });

    if (this.param) {
      this.buttonTitle = "Update & Exit"
      this.isLoading = false;
      
      
    } else {
      this.buttonTitle = "Save & Exit"

      if (this.addParam) {
        this.isLoading = true;
        
      }
    }

  }

  // quantities() : FormArray {
  //   return this.validateForm.get("details") as FormArray
  // }

  // newQuantity(): FormGroup {
  //   return this.fb.group({
  //     full_name: [''],
  //     age: [''],
  //     civil_status:[''],
  //     relation: [''],
  //     educational_attainment: [''],
  //     occupation: [''],
  //     occupation_income: [''],
  //     person_guid: [''],
  //     main_guid: [''],
  //     status: ['']
  //   })
  // }

  // addQuantity() {
  //   this.quantities().push(this.newQuantity());
  // }
   
  // removeQuantity(i:number) {
  //   this.modal.confirm({
  //     nzTitle: 'Do you Want to remove these item?',
  //     nzOnOk: () => {
  //       this.quantities().removeAt(i);
  //       if (this.quantities().length == 0) {
  //         this.dataDisplay = [];
  //       }
  //     }
  //   });
  // }


  cancel(): void {
    this.router.navigate(['/main/economic-enterprises/slaughterhouse/post-mortem'])
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

}
