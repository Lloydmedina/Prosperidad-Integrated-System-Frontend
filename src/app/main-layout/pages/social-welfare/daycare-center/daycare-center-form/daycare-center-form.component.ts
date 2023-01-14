import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { PersonsBrowseComponent } from 'src/app/main-layout/template/persons-browse/persons-browse.component';
import { DaycareCenterService } from 'src/core/services/daycare-center/daycare-center.service';
import { PathsegmentService } from 'src/core/services/pathsegment/pathsegment.service';
import { PersonService } from 'src/core/services/person/person.service';

@Component({
  selector: 'app-daycare-center-form',
  templateUrl: './daycare-center-form.component.html',
  styleUrls: ['./daycare-center-form.component.css']
})
export class DaycareCenterFormComponent implements OnInit {

  loading = false;
  isLoading = false;
  saveLoading = false;
  param: any;
  buttonTitle: any;

  validateForm!: FormGroup;
  path: any;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private viewContainerRef: ViewContainerRef,
    private modal: NzModalService,
    private msg: NzMessageService,
    private notification: NzNotificationService,
    private daycareCenterService: DaycareCenterService,
    private personService: PersonService,
    private route: ActivatedRoute,
    private pathService: PathsegmentService,
    private drawerService: NzDrawerService
  ) { 
    this.route.params.subscribe(params => {
      this.param = params['id'];
    });
  }

  ngOnInit() {
    this.path = this.pathService.getPath()
    this.validateForm = this.fb.group({
      region_id: [null, [Validators.required]],
      province_id: [null, [Validators.required]],
      citmun_id: [null, [Validators.required]],
      barangay_id: [null, [Validators.required]],
      street: [null],
      venue: [null, [Validators.required]],
      venue_condition: [null, [Validators.required]],
      venue_status: [null, [Validators.required]],
      description: [null, [Validators.required]],
      capacity: [null, [Validators.required]]
    });

    if (this.param) {
      this.buttonTitle = "Update & Exit"
      this.isLoading = true;
      this.daycareCenterService.getDaycareCenterEdit(this.param).subscribe(data => {
        this.isLoading = false;
        console.log("AHAK", data)
        // this.validateForm.patchValue({
        //   region_id: data.region_id.toString(),
        //   province_id: data.province_id.toString(),
        //   citmun_id: data.citmun_id.toString(),
        //   barangay_id: data.barangay_id.toString(),
        //   street: data.street,
        //   venue: data.venue,
        //   venue_condition: data.venue_condition.toString(),
        //   venue_status: data.venue_status.toString(),
        //   description: data.description,
        //   capacity: data.capacity
        // })
      })
      
    } else {
      this.buttonTitle = "Save & Exit"
    }

  }

  cancel(): void {
    this.router.navigate(['/main/social-welfare/daycare-center'])
  }

  submitForm(): void {
    this.saveLoading = true;
    
    if (this.validateForm.valid) {
      if(!this.param) {
        console.log("YAKS", this.validateForm.value)
        // this.evacuationCenterService.saveEvacuationCenter(this.validateForm.value).subscribe(data => {
        //   if (data) {
        //     this.saveLoading = false;
        //     this.router.navigate(['/' + this.path[0] + '/' + this.path[1] + '/' + this.path[2]])
        //       this.notification.create(
        //         "success",
        //         'Successfully Saved',
        //         'Evacuation Center Setup has successfully saved.'
        //       );
        //   } else {
        //     this.saveLoading = false;
        //     this.notification.create(
        //       "error",
        //       'Unsuccessfully Saved',
        //       'Evacuation Center Setup unsuccessfully saved.'
        //     );
        //   }
        // }, error => {
        //   this.saveLoading = false;
        //   this.msg.create("error","Server Error");
        // })
      } else {
        console.log("UPDATE", this.validateForm.value)
        // this.evacuationCenterService.updateEvacuationCenter(this.param, this.validateForm.value).subscribe(data => {
        //   this.isLoading = false;
        //   if (data) {
        //     this.saveLoading = false;
        //     this.router.navigate(['/' + this.path[0] + '/' + this.path[1] + '/' + this.path[2]])
        //     this.notification.create(
        //       "success",
        //       'Successfully Updated',
        //       'Evacuation Center Setup has successfully updated.'
        //     );
        //   } else {
        //     this.saveLoading = false;
        //     this.notification.create(
        //       "error",
        //       'Unsuccessfully Updated',
        //       'Evacuation Center Setup unsuccessfully updated.'
        //     );
        //   }
        // }, error => {
        //   this.saveLoading = false;
        //   this.msg.create("error","Server Error");
        // })
      }
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
          this.isLoading = false;
          this.saveLoading = false;
        }
      });
    }
    
  }

  browseMotherPerson(): void {
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
      console.log("after close", data);
      // this.dataDisplay = ['']
      // if (data) {
      //   this.quantities().push(this.fb.group({
      //     full_name: data.first_name + ' ' + data.middle_name + ' ' + data.last_name + ' ' + data.suffix,
      //     relation: "",
      //     age: data.age,
      //     gender_name: data.gender_name,
      //     educational_attainment: "",
      //     occupational_skills: "",
      //     person_guid: data.person_guid,
      //     remarks: "",
      //     occupation_income: ""
      //   }))
      // }
    });

  }

  browseFatherPerson(): void {
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
      console.log("after close", data);
      // this.dataDisplay = ['']
      // if (data) {
      //   this.quantities().push(this.fb.group({
      //     full_name: data.first_name + ' ' + data.middle_name + ' ' + data.last_name + ' ' + data.suffix,
      //     relation: "",
      //     age: data.age,
      //     gender_name: data.gender_name,
      //     educational_attainment: "",
      //     occupational_skills: "",
      //     person_guid: data.person_guid,
      //     remarks: "",
      //     occupation_income: ""
      //   }))
      // }
    });

  }

}
