import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { PersonsBrowseComponent } from 'src/app/main-layout/template/persons-browse/persons-browse.component';
import { PathsegmentService } from 'src/core/services/pathsegment/pathsegment.service';
import { UserService } from 'src/core/services/user/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  validateForm!: FormGroup;
  // captchaTooltipIcon: NzFormTooltipIcon = {
  //   type: 'info-circle',
  //   theme: 'twotone'
  // };

  title = ""
  param = ""
  path = ""

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private viewContainerRef: ViewContainerRef,
    private route: ActivatedRoute,
    private modal: NzModalService,
    private notification: NzNotificationService,
    private userService: UserService,
    private pathService: PathsegmentService,
    private drawerService: NzDrawerService
    ) {this.route.params.subscribe(zxc => {
      this.param = zxc['id']
    }) }
    loading = true
    domainList: any = [];
    roletypeList: any = []
    assignedRoles: any = []
  ngOnInit() {


    this.path = this.pathService.getPath();

    this.validateForm = this.fb.group({
      domain_guid: [null, [Validators.required]],
      roletype_guid: [],
      UserName_User: [null, [Validators.required]],
      Password_User: [null, [Validators.required]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]],
      status:[],
      employee_name: [null, Validators.required],
      person_guid: [null],
      user_guid: [null]
    });
    this.userService.getDomainList().subscribe(data => {
      this.domainList = data

      if(this.param)
      {
        this.userService.getById(this.param).subscribe(async (data:any) => {
          // console.log("Edit", data)
          this.validateForm.patchValue({
            domain_guid: data.domain_guid,
            roletype_guid: data.roletype_guid,
            UserName_User: data.userName_User,
            Password_User: data.password_User,
            checkPassword: data.password_User,
            status: data.status,
            employee_name: data.userFull_Name,
            person_guid: data.person_guid,
            user_guid: data.user_guid
          })
  
  
          this.loading = false
 
        })
        this.title = "Update User Record"
      }else
      {
  
  
        this.title = "Add User Record"
  
        this.loading = false
 
      }


    })



  }

  submitForm(value:any): void {
    // console.log("User Value", value)
    // console.log("status", this.validateForm.valid)
    // if (this.validateForm.valid) {
      if(!this.param)
      {
        this.modal.confirm({
          nzTitle: 'Do you really want to Save this record?',
          nzOnOk: () => {
            this.userService.insert(value).subscribe(async (data: any) => {
              
              this.router.navigate(["/"+this.path[0]+"/"+this.path[1]+"/"+this.path[2]]);
              await this.notification.create(
                "success",
                'Successfully Saved',
                'User Record has successfully saved.'
              );
            },
            async error => {
             await this.notification.create(
                "error",
                'Unsuccessfully Saved',
                'User Record has not been saved.'
              );
            });
          }
        })
      }else{
        this.modal.confirm({
          nzTitle: 'Do you really want to Update this record?',
          nzOnOk: () => {
            this.userService.update(this.param, value).subscribe(async (data: any) => {
              this.router.navigate(["/"+this.path[0]+"/"+this.path[1]+"/"+this.path[2]]);
              await this.notification.create(
                "success",
                'Successfully Updated',
                'User Record has successfully updated.'
              );
            },
            async error => {
             await this.notification.create(
                "error",
                'Unsuccessfully Saved',
                'User Record has not been updated.'
              );
            });
          }
        });
     
  
  
      }

      

    // } else {
    //   Object.values(this.validateForm.controls).forEach(control => {
    //     if (control.invalid) {
    //       control.markAsDirty();
    //       control.updateValueAndValidity({ onlySelf: true });
    //     }
    //   });
    // }
  }

  updateConfirmValidator(): void {
    /** wait for refresh value */
    if(this.validateForm.value.checkPassword != null)
    {
      this.validateForm.patchValue({
        checkPassword: ''
      })
    }
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.value.Password_User) {
      return { confirm: true, error: true };
    }
    return {};
  };

  getCaptcha(e: MouseEvent): void {
    e.preventDefault();
  }

  
  domainSelect(id: string)
  {
    this.userService.getRoleDomain(id).subscribe(roles => {
      console
      this.roletypeList = roles
    })
  }
  // showPerson(): void {
  //   const modal = this.modal.create({
  //     nzTitle: 'Modal Title',
  //     nzContent: "sample",
  //     nzViewContainerRef: this.viewContainerRef,
  //     nzComponentParams: {
  //       title: 'title in component',
  //       subtitle: 'component sub title，will be changed after 2 sec'
  //     },
  //     nzOnOk: () => new Promise(resolve => setTimeout(resolve, 1000)),
  //     nzFooter: [
  //       {
  //         label: 'change component title from outside',
  //         onClick: componentInstance => {
  //           componentInstance!.title = 'title in inner component is changed';
  //         }
  //       }
  //     ]
  //   });
  //   const instance = modal.getContentComponent();
  //   modal.afterOpen.subscribe(() => console.log('[afterOpen] emitted!'));
  //   // Return a result when closed
  //   modal.afterClose.subscribe(result => console.log('[afterClose] The result is:', result));

  //   // delay until modal instance created
  //   setTimeout(() => {
  //     instance.subtitle = 'sub title is changed';
  //   }, 2000);
  // }

  cancel(e: MouseEvent): void {
    e.preventDefault();
    this.router.navigate(["/"+this.path[0]+"/"+this.path[1]+"/"+this.path[2]]);
  }

  openPersonBrowse(): void {
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
      if (data) {
        this.validateForm.patchValue({
          employee_name: data.prefix + " " + data.first_name + " " + data.middle_name + " " + data.last_name + " " + data.suffix,
          person_guid: data.person_guid
        })
      }
    });

  }
}
