import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, ValidationErrors } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NzTreeHigherOrderServiceToken } from 'ng-zorro-antd/core/tree';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Observable, Observer } from 'rxjs';
import { AccountTitleService } from 'src/core/services/account-title/account-title.service';
import { PathsegmentService } from 'src/core/services/pathsegment/pathsegment.service';
import { ProjectLguService } from 'src/core/services/project-lgu/project-lgu.service';

@Component({
  selector: 'app-account-title-form',
  templateUrl: './account-title-form.component.html',
  styleUrls: ['./account-title-form.component.scss']
})
export class AccountTitleFormComponent implements OnInit {

  validateForm!: FormGroup;
  title = ""
  path: any;
  param: any;
  parentList:any = []
  activityList: any = [];
  accTypeList: any = [];

  accountList: any = [];
  loading = true;
  btnCancel = "Cancel"
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private viewContainerRef: ViewContainerRef,
    private modal: NzModalService,
    private notification: NzNotificationService,
    private accService: AccountTitleService,
    private pathService: PathsegmentService
    ) {this.route.params.subscribe(zxc => {
      this.param = zxc['id']

      this.accService.getList().subscribe(data => {
        this.accountList = data[0]
      })
    }) }

    lgu_config: any;
    prov:any = "";
    citmun: any = "";
    brgyList: any =[];
    isActive = true;
    isEdited = false;

  ngOnInit() {
    this.path = this.pathService.getPath();
    this.accService.getParent().subscribe((data:any) => {
      this.parentList = data[0].parent
      this.accTypeList = data[0].acc_type
      this.activityList = data[0].activity

      if(this.param){
        this.accService.getById(this.param).subscribe(data => {
          console.log("edit", data);
          this.validateForm.patchValue({
            account_name: data.account_name,
            account_type_id: String(data.account_type_id),
            initial_amount: parseFloat(data.initial_amount).toFixed(2),
            account_desc: data.account_desc,
            activity_type_id: String(data.activity_type_id),
            parent_id: String(data.parent_id),
            account_code: data.account_code
          })

        })
       
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity();
      this.validateForm.controls[key].markAsTouched();
    }
      }

      this.loading = false
    })

    this.validateForm = this.fb.group({
      account_code: ['', [Validators.required], [this.accountCodeAsyncValidator]],
      account_name: ['', [Validators.required], [this.accountNameAsynValidator]],
      account_type_id: ['', [Validators.required]],
      account_desc: [''],
      initial_amount: 0.00,
      activity_type_id: [1, [Validators.required]],
      parent_id: [''],
      status: ['']
    })
  }

  submitForm(value:any){
    if(!this.param)
    {
      this.modal.confirm({
        nzTitle: 'Do you really want to Save this record?',
        nzOnOk: () => {
          this.accService.insert(value).subscribe(async (data: any) => {
            console.log(data)

            this.router.navigate(["/"+this.path[0]+"/"+this.path[1]+"/"+this.path[2]]);
            await this.notification.create(
              "success",
              'Successfully Saved',
              'Account Title Record has successfully saved.'
            );
          },
          async error => {
           await this.notification.create(
              "error",
              'Unsuccessfully Saved',

              'Account Title Record has not been saved.'
            );
          });
        }
      })
    }else{
      this.modal.confirm({
        nzTitle: 'Do you really want to Update this record?',
        nzOnOk: () => {
          this.accService.update(this.param, value).subscribe(async (data: any) => {
            this.router.navigate(["/"+this.path[0]+"/"+this.path[1]+"/"+this.path[2]]);
            await this.notification.create(
              "success",
              'Successfully Updated',
              'Account Title Record has successfully updated.'
            );
          },
          async error => {
           await this.notification.create(
              "error",
              'Unsuccessfully Saved',
              'Account Title Record has not been updated.'
            );
          });
        }
      });
    }
  }


  cancel(e: MouseEvent){
    e.preventDefault();
    this.router.navigate(["/"+this.path[0]+"/"+this.path[1]+"/"+this.path[2]]);
  }

  parentSelect(id:any){
    this.validateForm.patchValue({
      account_code: ''
    })

    if(id != null && id == 0)
    {
      this.accService.generateAccountCode(id).subscribe(data => {
        this.validateForm.patchValue({
          account_code: data.new_code
        })
      })
    }

    this.accountCodeAsyncValidator
  }

  accountNameAsynValidator = (control: FormControl) =>
  new Observable((observer: Observer<ValidationErrors | null>) => {
    setTimeout(() => {
      let obj = this.accountList.filter((x:any) => x.account_name.toLowerCase() == control.value.toLowerCase())[0]

      if (obj != undefined && !this.param) {
        // you have to return `{error: true}` to mark it as an error event
        observer.next({ error: true, duplicated: true });
      } else {
        observer.next(null);
      }
      observer.complete();
    }, 500);
  });

  
  accountCodeAsyncValidator = (control: FormControl) =>
  new Observable((observer: Observer<ValidationErrors | null>) => {
    setTimeout(() => {
      let obj = this.accountList.filter((x:any) => x.account_code.toLowerCase() == control.value.toLowerCase())[0]

      if (obj != undefined && !this.param) {
        // you have to return `{error: true}` to mark it as an error event
        observer.next({ error: true, duplicated: true });
      } else {
        observer.next(null);
      }
      observer.complete();
    }, 500);
  });
}
