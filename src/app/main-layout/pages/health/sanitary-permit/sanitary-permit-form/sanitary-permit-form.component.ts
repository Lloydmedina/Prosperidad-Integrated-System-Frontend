import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { HealthCardService } from 'src/core/services/health/health-card/health-card.service';
import { SanitaryPermitService } from 'src/core/services/health/sanitary-permit/sanitary-permit.service';
import { PathsegmentService } from 'src/core/services/pathsegment/pathsegment.service';

@Component({
  selector: 'app-sanitary-permit-form',
  templateUrl: './sanitary-permit-form.component.html',
  styleUrls: ['./sanitary-permit-form.component.scss']
})
export class SanitaryPermitFormComponent implements OnInit {

  basepath = "add-form-new";
  basepath_arr : any;
  isLoading = true;
  expandSet = new Set<number>();
  validateForm! : FormGroup;
  listOfData: any [] = [];
  listOfData_person: any [] = [];
  sp_transaction_data : any [] = [];

  onExpandChange(id: number, checked: boolean): void {
    if (checked) {
      this.expandSet.add(id);
    } else {
      this.expandSet.delete(id);
    }
  }

  constructor(
    private router: Router,
    private modal: NzModalService,
    private healthService: HealthCardService,
    private notification: NzNotificationService,
    private pathservice : PathsegmentService,
    private sanitaryServices : SanitaryPermitService
  ) { }

  ngOnInit() {
    this.basepath_arr = this.pathservice.getPath();
    this.sanitaryServices.getBusinessList().subscribe(async value =>{
      this.listOfData = value[0];
      this.isLoading = false;
      console.log(this.listOfData)
    })
  }



  checkBusiness(dataid : any){
      console.log(this.sp_transaction_data);
      this.proccedToAddNewForm(dataid);
  }

  showConfirm(dataid : any): void{
    const modal: NzModalRef = this.modal.create({

      nzTitle: 'Record Found!',
      nzContent: '<i>This person already has a Medical-Certificate!, </i>',
      nzClosable : false,
      nzFooter: [
        {
          label: 'Close',
          shape: 'round',
          danger : true,
          onClick: () => modal.destroy()
        },
        {
          label: 'Create',
          type: 'primary',
          shape: 'round',

          onClick:() => {
            modal.destroy()
           this.proccedToAddNewForm(dataid)
          }

        },
        {
          label: 'View',
          color : 'green',
          loading: false,
          shape: 'round',

          onClick:() => {
              modal.destroy();
             // this.showDrawer();
          }
        }
      ]
    });
  }


  proccedToAddNewForm( data : any) {

    this.router.navigate(["/"+this.basepath_arr[0]+"/"+this.basepath_arr[1]+"/"+this.basepath_arr[2]+"/"+this.basepath+"/"+data.business_id]);
  }
  expand(value:any){
    console.log(value)
  }

}
