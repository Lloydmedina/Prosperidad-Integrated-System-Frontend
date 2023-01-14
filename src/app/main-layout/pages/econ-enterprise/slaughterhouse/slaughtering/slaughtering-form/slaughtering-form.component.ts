import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { getTimeConfig } from 'ng-zorro-antd/date-picker';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Subject } from 'rxjs';
import { PersonsBrowseComponent } from 'src/app/main-layout/template/persons-browse/persons-browse.component';
import { ReceivingBrowseComponent } from 'src/app/main-layout/template/receiving-browse/receiving-browse.component';
import { PathsegmentService } from 'src/core/services/pathsegment/pathsegment.service';
import { SlaughteringService } from 'src/core/services/slaughtering/slaughtering.service';

@Component({
  selector: 'app-slaughtering-form',
  templateUrl: './slaughtering-form.component.html',
  styleUrls: ['./slaughtering-form.component.scss']
})
export class SlaughteringFormComponent implements OnInit {
  validateForm!: FormGroup;
  title = ""
  path: any;
  param: any;
  personList:any = []
  businessList: any = [];
  loading = true;
  btnCancel = "Cancel"

  recordStatus = "Draft"
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private modalService: NzModalService,
    private route: ActivatedRoute,
    private viewContainerRef: ViewContainerRef,
    private modal: NzModalService,
    private notification: NzNotificationService,
    private recService: SlaughteringService,
    private pathService: PathsegmentService,
    private drawerService: NzDrawerService
    ) {this.route.params.subscribe(zxc => {
      this.param = zxc['id']
    }) }
defaultType = "1"
animalList:any = []

private unsubscribe = new Subject<void>()
  ngOnInit() { 
    this.path = this.pathService.getPath();

    this.validateForm = this.fb.group({
      slaughtering_id: '',
      receiving_id: '',
      client_name: '',
      date_slaughtered: new Date(),
      status: '',
      inspector_id: '',
      inspector_name: '',
      findings: '',
      brand: ''
    })

    if(this.param){
      this.recService.getById(this.param).subscribe(data => {
        console.log(data)
        this.validateForm.patchValue(data)
      })
    }
    this.loading = false;
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
          this.recService.insert(value).subscribe(async (data: any) => {
            console.log(data)

            localStorage.removeItem('receiving-data')
            this.router.navigate(["/"+this.path[0]+"/"+this.path[1]+"/"+this.path[2] + "/" + this.path[3]]);
            await this.notification.create(
              "success",
              'Successfully Saved',
              'Fees Charges Record has successfully saved.'
            );
          },
          async error => {
           await this.notification.create(
              "error",
              'Unsuccessfully Saved',
              'Fees Charges Record has not been saved.'
            );
          });
        }
      })
    }
    else{
      this.modal.confirm({
        nzTitle: 'Do you really want to Update this record?',
        nzOnOk: () => {
          this.recService.update(this.param, value).subscribe(async (data: any) => {
            
          localStorage.removeItem('receiving-data')
          this.router.navigate(["/"+this.path[0]+"/"+this.path[1]+"/"+this.path[2] + "/" + this.path[3]]);
            await this.notification.create(
              "success",
              'Successfully Updated',
              'Fees Charges Record has successfully updated.'
            );
          },
          async error => {
           await this.notification.create(
              "error",
              'Unsuccessfully Saved',
              'Fees Charges Record has not been updated.'
            );
          });
        }
      });
    }
  }
  

  cancel(e: MouseEvent){
    e.preventDefault();
    this.router.navigate(["/"+this.path[0]+"/"+this.path[1]+"/"+this.path[2] +"/"+ this.path[3]]);
  }


  
  openBrowse(): void {
    const drawerRef = this.drawerService.create({
      nzTitle: 'Receiving List',
      nzFooter: 'Footer',
      nzPlacement: 'bottom',
      nzHeight: 800,
      nzContent: ReceivingBrowseComponent,
      nzContentParams: {
        // value: this.value
      }
    });

    drawerRef.afterClose.subscribe(data => {
      console.log(data)
      
      if(data){
        this.validateForm.patchValue({
          receiving_id: data.receiving_id,
          client_name: data.client_name
        })
      }
    });

  }

  openPersonBrowse(): void {
    const drawerRef = this.drawerService.create({
      nzTitle: 'Receiving List',
      nzFooter: 'Footer',
      nzPlacement: 'bottom',
      nzHeight: 800,
      nzContent: PersonsBrowseComponent,
      nzContentParams: {
        // value: this.value
      }
    });

    drawerRef.afterClose.subscribe(data => {
      console.log(data)
      
      if(data){
        let name = data.last_name + ", " + data.first_name + " " + data.middle_name.charAt(0) + ". "
        this.validateForm.patchValue({
          inspector_name: name,
          inspector_id: data.person_guid
        })
    
      }
    });

  }
  
 

}
