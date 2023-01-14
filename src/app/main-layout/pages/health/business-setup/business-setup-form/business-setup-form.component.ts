import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-business-setup-form',
  templateUrl: './business-setup-form.component.html',
  styleUrls: ['./business-setup-form.component.scss']
})
export class BusinessSetupFormComponent implements OnInit {

  validateForm!: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private viewContainerRef: ViewContainerRef,
    private modal: NzModalService,
    private notification: NzNotificationService
  ) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      dtiNo: [null, [Validators.required]],
      dtiDate: [null, [Validators.required]],
      businessName: [null, [Validators.required]],
      tradeName: [null, [Validators.required]],
      lineOfBusiness: [null, [Validators.required]],
      tin: [null, [Validators.required]],
      ctcNo: [null, [Validators.required]],
      pin: [null, [Validators.required]],
      businessArea: [null, [Validators.required]],
      telephoneNo: [null, [Validators.required]],
      mobileNo: [null, [Validators.required]],
      email: [null, [Validators.email, Validators.required]],
      buildingName: [null, [Validators.required]],
      streetNo: [null, [Validators.required]],
      subdivision: [null, [Validators.required]],
      province: [null, [Validators.required]],
      municipalityCity: [null, [Validators.required]],
      barangay: [null, [Validators.required]],
      zipCode: [null, [Validators.required]],
    });
  }

  cancel(): void {
    this.router.navigate(['/main/setup/business'])
  }

  draft(): void {
    this.notification.blank(
      'Save as Draft',
      'Successfully Drafted!',
      // { nzDuration: 0 }
    );
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  showProvince(): void {
    const modal = this.modal.create({
      nzTitle: 'Modal Title',
      nzContent: "sample",
      nzViewContainerRef: this.viewContainerRef,
      nzComponentParams: {
        title: 'title in component',
        subtitle: 'component sub title，will be changed after 2 sec'
      },
      nzOnOk: () => new Promise(resolve => setTimeout(resolve, 1000)),
      nzFooter: [
        {
          label: 'change component title from outside',
          onClick: componentInstance => {
            componentInstance!.title = 'title in inner component is changed';
          }
        }
      ]
    });
    const instance = modal.getContentComponent();
    modal.afterOpen.subscribe(() => console.log('[afterOpen] emitted!'));
    // Return a result when closed
    modal.afterClose.subscribe(result => console.log('[afterClose] The result is:', result));

    // delay until modal instance created
    setTimeout(() => {
      instance.subtitle = 'sub title is changed';
    }, 2000);
  }

  showMunicipalityCity(): void {
    const modal = this.modal.create({
      nzTitle: 'Modal Title',
      nzContent: "sample",
      nzViewContainerRef: this.viewContainerRef,
      nzComponentParams: {
        title: 'title in component',
        subtitle: 'component sub title，will be changed after 2 sec'
      },
      nzOnOk: () => new Promise(resolve => setTimeout(resolve, 1000)),
      nzFooter: [
        {
          label: 'change component title from outside',
          onClick: componentInstance => {
            componentInstance!.title = 'title in inner component is changed';
          }
        }
      ]
    });
    const instance = modal.getContentComponent();
    modal.afterOpen.subscribe(() => console.log('[afterOpen] emitted!'));
    // Return a result when closed
    modal.afterClose.subscribe(result => console.log('[afterClose] The result is:', result));

    // delay until modal instance created
    setTimeout(() => {
      instance.subtitle = 'sub title is changed';
    }, 2000);
  }

  showBarangay(): void {
    const modal = this.modal.create({
      nzTitle: 'Modal Title',
      nzContent: "sample",
      nzViewContainerRef: this.viewContainerRef,
      nzComponentParams: {
        title: 'title in component',
        subtitle: 'component sub title，will be changed after 2 sec'
      },
      nzOnOk: () => new Promise(resolve => setTimeout(resolve, 1000)),
      nzFooter: [
        {
          label: 'change component title from outside',
          onClick: componentInstance => {
            componentInstance!.title = 'title in inner component is changed';
          }
        }
      ]
    });
    const instance = modal.getContentComponent();
    modal.afterOpen.subscribe(() => console.log('[afterOpen] emitted!'));
    // Return a result when closed
    modal.afterClose.subscribe(result => console.log('[afterClose] The result is:', result));

    // delay until modal instance created
    setTimeout(() => {
      instance.subtitle = 'sub title is changed';
    }, 2000);
  }

}
