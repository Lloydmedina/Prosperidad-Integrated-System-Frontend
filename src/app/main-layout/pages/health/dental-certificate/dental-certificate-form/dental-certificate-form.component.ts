import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { DentalCertificateService } from 'src/core/services/health/dental-certificate/dental-certificate.service';
import { HealthCardService } from 'src/core/services/health/health-card/health-card.service';
import { PathsegmentService } from 'src/core/services/pathsegment/pathsegment.service';
import { PersonService } from 'src/core/services/person/person.service';

@Component({
  selector: 'app-dental-certificate-form',
  templateUrl: './dental-certificate-form.component.html',
  styleUrls: ['./dental-certificate-form.component.scss']
})
export class DentalCertificateFormComponent implements OnInit {

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
  searchData: any;
  param : any;
  onExpandChange(id: number, checked: boolean): void {
    if (checked) {
      this.expandSet.add(id);
    } else {
      this.expandSet.delete(id);
    }
  }

  constructor(
    private router: Router,
    private route : ActivatedRoute,
    private modal: NzModalService,
    private healthService: HealthCardService,
    private notification: NzNotificationService,
    private pathservice : PathsegmentService,
    private dentalservice : DentalCertificateService,
    private personService : PersonService
  ) {
    this.route.params.subscribe(zxc => {
      //console.log("routee ",zxc)
      this.param = zxc['id']
    })
   }


  ngOnInit() {
    this.basepath_arr = this.pathservice.getPath();
    let editpath: string = this.basepath_arr[3].toString()
    if(this.param && editpath.includes("edit")){
      this.dentalservice.getDentalCertificateData(this.param).subscribe(data =>{
        this.proccedToAddNewForm(data[0].dc_person_id)
        console.log(data[0].dc_person_id)
      })
    }else{
      this.healthService.getPerson().subscribe(async data =>{
        this.listOfData_person = data[0];
        this.isLoading = false;

      }),
    this.healthService.getHealthCardList().subscribe(async value =>{
      this.listOfData = value;
      this.isLoading = false;
    })

    }
  }
  fromPersonId : any;
  showConfirm(dataid : any,
              applicantfname : any,
              applicantmname : any,
              applicantlname : any
    ){
    this.isLoading = true;

        this.dentalservice.getDentalCertificateListById(dataid).subscribe(data => {
          this.checkRes = data[0];
          this.fromPersonId = dataid

          if (data[0].length == 0) {
                this.proccedToAddNewForm(dataid)

          } else {
            this.checkPerson(dataid);
            this.isLoading = false;
          }
        });
      }


  checkPerson(dataid : any): void{
    const modal: NzModalRef = this.modal.create({

      nzTitle: 'Record Found!',
      nzContent: '<i>This person already has a Dental-Certificate!, </i>',
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
    if(this.param){
      this.router.navigate(["/"+this.basepath_arr[0]+"/"+this.basepath_arr[1]+"/"+this.basepath_arr[2]+"/"+this.basepath_arr[3]+"/"+this.param+"/"+data_id]);
      }else{
        this.router.navigate(["/"+this.basepath_arr[0]+"/"+this.basepath_arr[1]+"/"+this.basepath_arr[2]+"/"+this.basepath+"/"+data_id]);
      }
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


  search(event: Event) {
    this.searchData = event

    this.personService.getPerson().subscribe(data => {
      this.listOfData = data[0];
      this.isLoading = false;
      this.searchData.birth_date = new DatePipe('en-Us').transform(this.searchData.birth_date, 'yyyy-MM-dd' + 'T' +'00:00:00', 'GMT+0800');

      if (this.searchData.birth_date != null) {
        this.listOfData = this.listOfData.filter((data:any) =>
        data.first_name.toLowerCase() == this.searchData.first_name.trim().toLowerCase()
        && data.middle_name.toLowerCase() == this.searchData.middle_name.trim().toLowerCase()
        && data.last_name.toLowerCase() == this.searchData.last_name.trim().toLowerCase()
        && data.suffix.toLowerCase() == this.searchData.suffix.toLowerCase()
        && data.birth_date == this.searchData.birth_date)
      } else {
        this.listOfData = this.listOfData.filter((data:any) =>
        data.first_name.toLowerCase() == this.searchData.first_name.trim().toLowerCase()
        && data.middle_name.toLowerCase() == this.searchData.middle_name.trim().toLowerCase()
        && data.last_name.toLowerCase() == this.searchData.last_name.trim().toLowerCase()
        && data.suffix.toLowerCase() == this.searchData.suffix.toLowerCase())
      }

      if (!this.listOfData.length) {
        this.modal.confirm({
          nzTitle: 'Do you want to add this person?',
          nzContent: this.searchData.first_name + " " + this.searchData.middle_name + " " + this.searchData.last_name +  " is not on the persons list.",
          nzOnCancel:() => {
            this.listOfData = data[0];
          },
          nzOnOk: () => {
            this.router.navigate(["/main/admin-console/person/add-form"], { queryParams: { firstname: this.searchData.first_name, middlename: this.searchData.middle_name, lastname: this.searchData.last_name, suffix_name: this.searchData.suffix, birth_date: this.searchData.birth_date } })
          }
        });
      } else {
        if (this.listOfData[0].status == 'Deleted') {
          this.modal.confirm({
            nzTitle: 'Do you want to Activate this person?',
            nzContent: this.searchData.first_name + " " + this.searchData.middle_name + " " + this.searchData.last_name +  " has already been deleted.",
            nzOnCancel:() => {
                this.listOfData = data[0];
            },
            nzOnOk: () => {
              this.isLoading = true
              this.personService.activatePerson(this.listOfData[0].person_guid, this.listOfData[0]).subscribe(async data => {
                this.router.navigate(["/main/admin-console/person/edit-form/" + this.listOfData[0].person_guid])
                this.notification.create(
                  "success",
                  'Successfully Activated',
                  'Person Record has successfully activated.'
                );
              })
            }
          });
        }
      }
    })

  }

  clear(value: any) {
    this.isLoading = true
    if (value) {
      this.isLoading = false
      this.listOfData = value
    }
  }

  select(value: boolean) {
    this.isLoading = true
    if (value == true) {
      this.personService.getPerson().subscribe(data => {
        this.listOfData = data[0];
        this.isLoading = false;
      })
    } else {
      this.personService.getPersonActiveOnly().subscribe(async data => {
        this.listOfData = data[0];
        this.isLoading = false;
      })
    }
  }

}
