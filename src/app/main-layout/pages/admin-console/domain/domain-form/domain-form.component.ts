import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { DomainService } from 'src/core/services/domain/domain.service';
import { PathsegmentService } from 'src/core/services/pathsegment/pathsegment.service';

@Component({
  selector: 'app-domain-form',
  templateUrl: './domain-form.component.html',
  styleUrls: ['./domain-form.component.scss']
})
export class DomainFormComponent implements OnInit {

  validateForm!: FormGroup;
  project: any = []
  // captchaTooltipIcon: NzFormTooltipIcon = {
  //   type: 'info-circle',
  //   theme: 'twotone'
  // };
  title = ""
  path: any;
  param: any;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private viewContainerRef: ViewContainerRef,
    private modal: NzModalService,
    private notification: NzNotificationService,
    private domainService: DomainService,
    private pathService: PathsegmentService
    ) {this.route.params.subscribe(zxc => {
      this.param = zxc['id']
    }) }
    loading = true

  ngOnInit() {


    this.path = this.pathService.getPath();
    

    this.validateForm = this.fb.group({
      domain_guid: [],
      domain_name: [null, [Validators.required]],
      description: [],
      route_reference: ['', [Validators.required]],
      project_title_guid: [null, [Validators.required]],
      status: ''
  });
    this.domainService.getProject().subscribe(async (data:any) => {
      this.project = data

    
      this.loading = false
    })

    if(this.param)
    {
      this.domainService.getById(this.param).subscribe((data:any) => {
        this.validateForm.patchValue({
          domain_guid: data.domain_guid,
          project_title_guid: data.project_title_guid,
          domain_name: data.domain_name,
          description: data.description,
          route_reference: data.route_reference,
          status: data.status
        })
      })
      this.title = "Update Domain Record"
    }else
    {


      this.title = "Add Domain Record"
    }

  }

  submitForm(value: any){

    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity();
    }

    if(!this.param)
    {
      this.modal.confirm({
        nzTitle: 'Do you really want to Save this record?',
        nzOnOk: () => {
          this.domainService.insert(value).subscribe(async (data: any) => {
            console.log(data)

            this.router.navigate(["/"+this.path[0]+"/"+this.path[1]+"/"+this.path[2]]);
            await this.notification.create(
              "success",
              'Successfully Saved',
              'Domain Record has successfully saved.'
            );
          },
          async error => {
           await this.notification.create(
              "error",
              'Unsuccessfully Saved',
              'Domain Record has not been saved.'
            );
          });
        }
      })
    }else{
      this.modal.confirm({
        nzTitle: 'Do you really want to Update this record?',
        nzOnOk: () => {
          this.domainService.update(this.param, value).subscribe(async (data: any) => {
            this.router.navigate(["/"+this.path[0]+"/"+this.path[1]+"/"+this.path[2]]);
            await this.notification.create(
              "success",
              'Successfully Updated',
              'Domain Record has successfully updated.'
            );
          },
          async error => {
           await this.notification.create(
              "error",
              'Unsuccessfully Saved',
              'Domain Record has not been updated.'
            );
          });
        }
      });



    }
  }

  cancel(e: MouseEvent): void {
    e.preventDefault();
    this.router.navigate(["/"+this.path[0]+"/"+this.path[1]+"/"+this.path[2]]);
  }
}
