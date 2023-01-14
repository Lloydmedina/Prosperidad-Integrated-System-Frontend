import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { HealthCardService } from 'src/core/services/health/health-card/health-card.service';
import { SanitaryPermitService } from 'src/core/services/health/sanitary-permit/sanitary-permit.service';
import { PathsegmentService } from 'src/core/services/pathsegment/pathsegment.service';

@Component({
  selector: 'app-healthcard-business-form',
  templateUrl: './healthcard-business-form.component.html',
  styleUrls: ['./healthcard-business-form.component.scss']
})
export class HealthcardBusinessFormComponent implements OnInit {

  basepath = "add-form";
  basepath_arr : any;
  isLoading = true;
  expandSet = new Set<number>();
  validateForm! : FormGroup;
  listOfData: any [] = [];
  listOfData_person: any [] = [];
  sp_transaction_data : any [] = [];
  param : any;
  onExpandChange(id: number, checked: boolean): void {
    if (checked) {
      this.expandSet.add(id);
    } else {
      this.expandSet.delete(id);
    }
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private modal: NzModalService,
    private healthService: HealthCardService,
    private notification: NzNotificationService,
    private pathservice : PathsegmentService,
    private sanitaryServices : SanitaryPermitService
  ) { this.route.params.subscribe(zxc => {
    //console.log("routee ",zxc)
    this.param = zxc['id']
  })}

  ngOnInit() {
    this.basepath_arr = this.pathservice.getPath();
    let editpath: string = this.basepath_arr[3].toString()
    this.sanitaryServices.getBusinessList().subscribe(async value =>{
      this.listOfData = value[0];
      this.isLoading = false;
      console.log(this.listOfData)
    })
  }


  edit( data : any) {
    this.router.navigate(["/main/transactions/health-card/edit-form", data.domain_guid])
  }
data_transs : any;
visible : boolean = false;
  checkBusiness(dataid : any){
    this.isLoading = true
    console.log(dataid)
    this.healthService.checkTransactionListBusiness(dataid).subscribe(data => {
      this.data_transs = data[0];
      console.log(this.data_transs)
      if (data[0].length == 0) {
        this.proccedToAddNewForm(dataid)
      } else {
        this.checkPerson(dataid);
      }
     });
  }

  checkPerson(dataid : any): void{
    const modal: NzModalRef = this.modal.create({

      nzTitle: 'Record Found!',
      nzContent: '<i>Would you like to view the records?, </i>',
      nzClosable : false,
      nzFooter: [
        {
          label: 'Close',
          shape: 'round',
          danger : true,
          onClick: () => modal.destroy(),
        },
        {
          label: 'Create',
          type: 'primary',
          shape: 'round',

          onClick:() => {
            this.isLoading = false
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
            this.isLoading = false
              modal.destroy();
            this.showRecords();
          }
        }
      ]
    });
  }
  showRecords(){
    this.visible = true
  }

  closeRecords(){
    this.visible = false
  }

  proccedToAddNewForm( data_id : any) {
    if(this.param){
      this.router.navigate(["/"+this.basepath_arr[0]+"/"+this.basepath_arr[1]+"/"+this.basepath_arr[2]+"/"+this.basepath_arr[3]+"/"+this.param+"/"+data_id]);
      console.log(this.param+" -- "+ data_id)
      }else{
        this.router.navigate(["/"+this.basepath_arr[0]+"/"+this.basepath_arr[1]+"/"+this.basepath_arr[2]+"/"+this.basepath+"/"+data_id]);
        console.log(" -- "+ data_id)
      }
  }
  expand(value:any){
    console.log(value)
  }


}
