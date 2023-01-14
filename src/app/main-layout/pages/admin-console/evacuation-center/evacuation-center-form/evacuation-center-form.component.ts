import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { EvacuationCenterService } from 'src/core/services/evacuation-center/evacuation-center.service';
import { PathsegmentService } from 'src/core/services/pathsegment/pathsegment.service';
import { PersonService } from 'src/core/services/person/person.service';

@Component({
  selector: 'app-evacuation-center-form',
  templateUrl: './evacuation-center-form.component.html',
  styleUrls: ['./evacuation-center-form.component.scss']
})
export class EvacuationCenterFormComponent implements OnInit {

  loading = false;
  isLoading = false;
  saveLoading = false;
  param: any;
  buttonTitle: any;
  regionList: any;

  defaultProvince: any;
  defaultCityMun: any;
  defaultRegion: any;

  validateForm!: FormGroup;
  provinceDropdown: any = [];
  citymunDropdown: any = [];
  barangayDropdown: any = [];
  path: any;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private viewContainerRef: ViewContainerRef,
    private modal: NzModalService,
    private msg: NzMessageService,
    private notification: NzNotificationService,
    private evacuationCenterService: EvacuationCenterService,
    private personService: PersonService,
    private route: ActivatedRoute,
    private pathService: PathsegmentService
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
      // venue_status: [null],
      description: [null],
      capacity: [null, [Validators.required]]
    });

    this.evacuationCenterService.getRegion().subscribe(data => {
      this.regionList = data
      // console.log("LIST REG", data)
    })

    this.personService.getDropdownprovince().subscribe(data => {
      this.provinceDropdown = data
    })

    this.personService.getDropdowncityMun(73).subscribe(data => {
      this.citymunDropdown = data
    })

    this.personService.getBarangay(40).subscribe(data => {
      this.barangayDropdown = data
      // console.log("this", this.barangayDropdown)
    })

    if (this.param) {
      this.buttonTitle = "Update & Exit"
      this.isLoading = true;
      this.evacuationCenterService.getEvacuationCenterEdit(this.param).subscribe(data => {
        this.isLoading = false;
        console.log("AHAK", data)
        this.validateForm.patchValue({
          region_id: data.region_id.toString(),
          province_id: data.province_id.toString(),
          citmun_id: data.citmun_id.toString(),
          barangay_id: data.barangay_id.toString(),
          street: data.street,
          venue: data.venue,
          venue_condition: data.venue_condition.toString(),
          venue_status: data.venue_status.toString(),
          description: data.description,
          capacity: data.capacity
        })
      })
      
    } else {
      this.buttonTitle = "Save & Exit"
      this.defaultProvince = "73"
      this.defaultCityMun = "40"
      this.defaultRegion = "16"
    }

  }

  cancel(): void {
    this.router.navigate(['/main/social-welfare/evacuation-setup'])
  }

  submitForm(): void {
    this.saveLoading = true;
    this.validateForm.value.barangay_id = Number(this.validateForm.value.barangay_id)
    this.validateForm.value.citmun_id = Number(this.validateForm.value.citmun_id)
    this.validateForm.value.province_id = Number(this.validateForm.value.province_id)
    this.validateForm.value.region_id = Number(this.validateForm.value.region_id)
    
    if (this.validateForm.valid) {
      if(!this.param) {
        console.log("YAKS", this.validateForm.value)
        this.evacuationCenterService.saveEvacuationCenter(this.validateForm.value).subscribe(data => {
          if (data) {
            this.saveLoading = false;
            this.router.navigate(['/' + this.path[0] + '/' + this.path[1] + '/' + this.path[2]])
              this.notification.create(
                "success",
                'Successfully Saved',
                'Evacuation Center Setup has successfully saved.'
              );
          } else {
            this.saveLoading = false;
            this.notification.create(
              "error",
              'Unsuccessfully Saved',
              'Evacuation Center Setup unsuccessfully saved.'
            );
          }
        }, error => {
          this.saveLoading = false;
          this.msg.create("error","Server Error");
        })
      } else {
        console.log("UPDATE", this.validateForm.value)
        this.evacuationCenterService.updateEvacuationCenter(this.param, this.validateForm.value).subscribe(data => {
          this.isLoading = false;
          if (data) {
            this.saveLoading = false;
            this.router.navigate(['/' + this.path[0] + '/' + this.path[1] + '/' + this.path[2]])
            this.notification.create(
              "success",
              'Successfully Updated',
              'Evacuation Center Setup has successfully updated.'
            );
          } else {
            this.saveLoading = false;
            this.notification.create(
              "error",
              'Unsuccessfully Updated',
              'Evacuation Center Setup unsuccessfully updated.'
            );
          }
        }, error => {
          this.saveLoading = false;
          this.msg.create("error","Server Error");
        })
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

}
