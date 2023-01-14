import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-occupation-setup-form',
  templateUrl: './occupation-setup-form.component.html',
  styleUrls: ['./occupation-setup-form.component.scss']
})
export class OccupationSetupFormComponent implements OnInit {

  validateForm!: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private viewContainerRef: ViewContainerRef,
    private modal: NzModalService,
    private notification: NzNotificationService
  ) { }

  ngOnInit() {
  }

  cancel(): void {
    this.router.navigate(['/main/setup/occupation-setup'])
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

}
