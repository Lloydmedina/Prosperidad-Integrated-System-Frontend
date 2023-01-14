import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { IndigentFormComponent } from 'src/app/main-layout/pages/social-welfare/indigent/indigent-form/indigent-form.component';
import { DelinquentService } from 'src/core/services/delinquent/delinquent.service';
import { DomainService } from 'src/core/services/domain/domain.service';
import { PathsegmentService } from 'src/core/services/pathsegment/pathsegment.service';

@Component({
  selector: 'app-delinquent-form',
  templateUrl: './delinquent-form.component.html',
  styleUrls: ['./delinquent-form.component.css']
})
export class DelinquentFormComponent implements OnInit {
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
    private delService: DelinquentService,
    private pathService: PathsegmentService,
    private datePipe: DatePipe
    ) {this.route.params.subscribe(zxc => {
      this.param = zxc['id']
    }) }
    loading = true
loadTbl = false
listOfData: any = []
  ngOnInit() {
    this.path = this.pathService.getPath();
    

        this.validateForm = this.fb.group({
          delinquent_list_id: [''],
          date_generated: [null, [Validators.required]],
          record: ['', [Validators.required]]
      });
      this.loading = false
  }

  submitForm(value:any){
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity();
    }

    if(!this.param)
    {
      this.modal.confirm({
        nzTitle: 'Do you really want to Save this record?',
        nzOnOk: () => {
          this.delService.saveRecord(value).subscribe(async (data: any) => {
            console.log(data)

            this.router.navigate(["/"+this.path[0]+"/"+this.path[1]+"/"+this.path[2] + "/" + this.path[3]]);
            await this.notification.create(
              "success",
              'Successfully Saved',
              'Record has successfully saved.'
            );
          },
          async error => {
           await this.notification.create(
              "error",
              'Unsuccessfully Saved',
              'Record has not been saved.'
            );
          });
        }
      })
    }
  }
  

  cancel(e: MouseEvent){
    e.preventDefault();
    this.router.navigate(["/"+this.path[0]+"/"+this.path[1]+"/"+this.path[2] +"/"+ this.path[3]]);
  }


  limit = 20
  generate(){
    this.loadTbl = true
    
    this.listOfData = []
    let newDate = this.datePipe.transform(this.validateForm.value.date_generated, 'yyyy-MM-dd')
    
    this.delService.generate(newDate).subscribe(data => {
      if(data.length > 0){
        this.listOfData = data
        if(this.listOfData.length < 15){
          let size = this.limit - this.listOfData.length
          for(let i = 0; i < size; i ++){
            this.listOfData.push({
              billing_date: '',
              property_name: '',
              tenant_name: '',
              bill_amount: '',
              due_date: ''
            })
          }
        }
      }

      this.validateForm.patchValue({
        record: JSON.stringify(data)
      })
      this.loadTbl = false
    })
  }

}
