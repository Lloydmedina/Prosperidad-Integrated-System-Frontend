import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { AuthService } from 'src/core/services/auth/auth.service';
import { TokenStorageService } from 'src/core/services/token-storage/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  validateForm!: FormGroup;
  isLoaded = false
  array = ['assets/img/prosperidad.jpg', 'assets/img/municipal.jpg', 'assets/img/PROSPERIDAD_TOWN_HALL.jpg', 'assets/img/Flag_of_Prosperidad.png'];

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private modal: NzModalService,
    private auth: AuthService,
    private tokenStorage: TokenStorageService,
    private message: NzMessageService,
    ) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

  submitForm(value: any): void {
    if (this.validateForm.valid) {
      this.isLoaded = true
      this.auth.signIn(value).subscribe(data => {
        if (data) {
          this.isLoaded = false
          this.router.navigate(['/main/executive-dashboard'])
          this.tokenStorage.saveToken(data[0].users.user_guid);
          this.tokenStorage.saveUser(data);
          console.log("sample", value.remember)
          if (value.remember == true) {
            this.tokenStorage.saveRemember(value);
          } else {
            this.tokenStorage.saveRemember(value);
          }
        } else {
          // this.message.remove();
          this.isLoaded = false
          this.message.create('error', `Invalid username or password`);
        }
      }, error => {
        this.isLoaded = false
        console.log("ERROR:", error)
      })
      
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  showConfirm(): void {
    this.modal.confirm({
      nzTitle: 'Do you want to Login as Guest?',
      nzOnOk: () => {
        this.router.navigate(['/main/executive-dashboard'])
      }
    });
  }
}
