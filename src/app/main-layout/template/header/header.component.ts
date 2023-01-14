import { Component, Input, OnInit, Output } from '@angular/core';
import {EventEmitter } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AuthService } from 'src/core/services/auth/auth.service';
import { ChangepasswordService } from 'src/core/services/changepassword/changepassword.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() title: any;
  @Input() subtitle: any;
  @Input() userValue: any;
  visible = false;

  @Output() valueChange = new EventEmitter();
  theme = true;

  isVisible = false;
  isOkLoading = false;

  currentUser: any[] = [];
  userValueLocal: any;

  validateForm!: FormGroup;

  constructor(
    private router: Router,
    private modal: NzModalService,
    private auth: AuthService,
    private fb: FormBuilder,
    private changePassService: ChangepasswordService,
    private notification: NzNotificationService
  ) { }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('auth-user') || '{}');
    this.userValueLocal = this.currentUser[0].users;

    this.validateForm = this.fb.group({ 
      password: [''],
      confirm: [''],
    })
  }

  changeTheme(value: any) {
    this.theme = value
    this.valueChange.emit(this.theme);
  }

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

  logoutAccount(): void {
    this.modal.confirm({
      nzTitle: 'Are you sure you want to Sign-out?',
      nzOnOk: () => {
        this.auth.logout()
        this.router.navigate(["/login"])
      }
    });
  }

  changepassAccount() {
    this.isVisible = true;
  }

  showEmptyFieldValidator: any;
  handleOk(): void {
    this.isOkLoading = true;
    if (this.newPass != this.confirmPass) {
      this.isOkLoading = false;
    } else {
      this.changePassService.updatePassword(this.userValueLocal.user_guid, this.validateForm.value).subscribe(data => {
        this.isOkLoading = false;
        if (data) {
          this.isVisible = false;
          this.notification.create(
            "success",
            'Successfully Updated',
            'Password has successfully updated.'
          );
        } else {
          this.isOkLoading = false;
          this.notification.create(
            "success",
            'Successfully Updated',
            'Password unsuccessfully updated.'
          );
        }
      });
    }

    // setTimeout(() => {
    //   this.isVisible = false;
    //   this.isOkLoading = false;
    // }, 3000);
  }

  confirmPassModel: any;
  passModel: any;
  handleCancel(): void {
    this.isVisible = false;
    this.confirmPass = null;
    this.passModel = null;
  }

  newPass: any;
  inputNewPassword(value: any){
    this.newPass = value
  }

  confirmPass: any;
  inputConfirm(value: any) {
    this.confirmPass = value
    console.log("Confirm Value", value)
  }

}
