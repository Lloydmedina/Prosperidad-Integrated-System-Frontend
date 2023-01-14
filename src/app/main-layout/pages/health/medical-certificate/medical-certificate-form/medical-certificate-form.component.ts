import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { HealthCardService } from 'src/core/services/health/health-card/health-card.service';
import { MedicalCertificateService } from 'src/core/services/health/medical-certificate/medical-certificate.service';
import { PathsegmentService } from 'src/core/services/pathsegment/pathsegment.service';

@Component({
  selector: 'app-medical-certificate-form',
  templateUrl: './medical-certificate-form.component.html',
  styleUrls: ['./medical-certificate-form.component.scss']
})
export class MedicalCertificateFormComponent implements OnInit {
  basepath = "add-form";
  basepath_arr : any;
  isLoading = true;
  expandSet = new Set<number>();
  validateForm! : FormGroup;
  listOfData: any [] = [];
  listOfData_person: any [] = [];
  checkRes : any [] = [];
  visible = false;
  size = 'large';
  sample: any;

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
    private medicalCertificateService : MedicalCertificateService
  ) { }

  ngOnInit() {
    this.basepath_arr = this.pathservice.getPath();
    this.healthService.getHealthCardList().subscribe(async value =>{
      this.listOfData = value;
      this.isLoading = false;
    }),
    this.healthService.getPerson().subscribe(async data =>{
      this.listOfData_person = data[0];
      this.isLoading = false;
    })
  }

  showConfirm(dataid : any,
              applicantfname : any,
              applicantmname : any,
              applicantlname : any
    ){
      this.isLoading =true;
        console.log(dataid);
        this.medicalCertificateService.getMedicalCertificateListById(dataid).subscribe(data =>  {
          this.checkRes = data[0];
          console.log(this.checkRes)

          if (data[0].length == 0) {
                this.proccedToAddNewForm(dataid)

          } else {
            this.checkPerson(dataid);
            this.isLoading = false;
          }
        });
                //this.proccedToAddNewForm(dataid);
   ;
  }

  checkPerson(dataid : any): void{
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
              this.showDrawer();
          }
        }
      ]
    });
  }
  showDrawer(): void {
    this.size = 'large';
    this.open();
  }

  proccedToAddNewForm( data_id : any) {
    this.router.navigate(["/"+this.basepath_arr[0]+"/"+this.basepath_arr[1]+"/"+this.basepath_arr[2]+"/"+this.basepath+"/"+ data_id]);
  }
  expand(value:any){
    console.log(value)
  }
  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }



}
