import { DatePipe } from '@angular/common';
import { Component, HostListener, OnInit, ViewContainerRef } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { PathsegmentService } from 'src/core/services/pathsegment/pathsegment.service';
import { ScheduleOfFeesService } from 'src/core/services/schedule-of-fees/schedule-of-fees.service';

@Component({
  selector: 'app-sof-form',
  templateUrl: './sof-form.component.html',
  styleUrls: ['./sof-form.component.scss']
})
export class SofFormComponent implements OnInit {

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
  type_of_fee_data = [
    "A. Inspection Fee",
    "B. Weighing Fee"
  ]

  cattle_horses_above = []
  cattle_horses_below = []
  hogs_above = []
  hogs_below = []
  goat_sheep_above = []
  goat_sheep_below = []
  regard_less_of_weight = []
  
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private viewContainerRef: ViewContainerRef,
    private modal: NzModalService,
    private msg: NzMessageService,
    private notification: NzNotificationService,
    private route: ActivatedRoute,
    private sofService: ScheduleOfFeesService,
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
      form_trans_no: [null],
      details: this.fb.array([])
    });

    if (this.param) {
      this.buttonTitle = "Update & Exit"
      this.isLoading = false;
      
      this.type_of_fee_data.forEach((element: any) => {
        this.quantities().push(
          this.fb.group({
            type_of_fee: element,
            cattle_horses_200kg_above: null,
            cattle_horses_200kg_below: null,
            hogs_50kg_above: null,
            hogs_50kg_below: null,
            goat_sheep_30kg_above: null,
            goat_sheep_30kg_below: null,
            regard_less_of_weight: null
          })
        );
      });
      
    } else {
      this.buttonTitle = "Save & Exit"
      // console.log("so big", this.type_of_fee_data)
      this.type_of_fee_data.forEach((element: any) => {
        this.quantities().push(
          this.fb.group({
            type_of_fee: element,
            cattle_horses_200kg_above: null,
            cattle_horses_200kg_below: null,
            hogs_50kg_above: null,
            hogs_50kg_below: null,
            goat_sheep_30kg_above: null,
            goat_sheep_30kg_below: null,
            regard_less_of_weight: null
          })
        );
      });
      

      // if (this.addParam) {
      //   this.isLoading = true;
        
      // }
    }

  }

  quantities() : FormArray {
    return this.validateForm.get("details") as FormArray
  }

  newQuantity(): FormGroup {
    return this.fb.group({
      type_of_fee: [''],
      cattle_horses_200kg_above: [''],
      cattle_horses_200kg_below:[''],
      hogs_50kg_above: [''],
      hogs_50kg_below: [''],
      goat_sheep_30kg_above: [''],
      goat_sheep_30kg_below: [''],
      regard_less_of_weight: [''],
    })
  }

  addQuantity() {
    this.quantities().push(this.newQuantity());
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
    this.router.navigate(['/main/economic-enterprises/slaughterhouse/schedule-of-fees'])
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

  total_200kg_Above: number = 0.0;
  total200kgAbove() {
    this.total_200kg_Above = 0
    let s = this.validateForm.value.details
    for(let x = 0; x < s.length; x++)
    {
        this.total_200kg_Above += Number(s[x].cattle_horses_200kg_above)
    }
  }

  total_200kg_Below: number = 0.0;
  total200kgBelow() {
    this.total_200kg_Below = 0
    let s = this.validateForm.value.details
    for(let x = 0; x < s.length; x++)
    {
        this.total_200kg_Below += Number(s[x].cattle_horses_200kg_below)
    }
  }

  total_50kg_Above: number = 0.0;
  total50kgAbove() {
    this.total_50kg_Above = 0
    let s = this.validateForm.value.details
    for(let x = 0; x < s.length; x++)
    {
        this.total_50kg_Above += Number(s[x].hogs_50kg_above)
    }
  }

  total_50kg_Below: number = 0.0;
  total50kgBelow() {
    this.total_50kg_Below = 0
    let s = this.validateForm.value.details
    for(let x = 0; x < s.length; x++)
    {
        this.total_50kg_Below += Number(s[x].hogs_50kg_below)
    }
  }

  total_30kg_Above: number = 0.0;
  total30kgAbove() {
    this.total_30kg_Above = 0
    let s = this.validateForm.value.details
    for(let x = 0; x < s.length; x++)
    {
        this.total_30kg_Above += Number(s[x].goat_sheep_30kg_above)
    }
  }

  total_30kg_Below: number = 0.0;
  total30kgBelow() {
    this.total_30kg_Below = 0
    let s = this.validateForm.value.details
    for(let x = 0; x < s.length; x++)
    {
        this.total_30kg_Below += Number(s[x].goat_sheep_30kg_below)
    }
  }

  total_Less_Of_Weight: number = 0.0;
  totalLessOfWeight() {
    this.total_Less_Of_Weight = 0
    let s = this.validateForm.value.details
    for(let x = 0; x < s.length; x++)
    {
        this.total_Less_Of_Weight += Number(s[x].regard_less_of_weight)
    }
  }

}
