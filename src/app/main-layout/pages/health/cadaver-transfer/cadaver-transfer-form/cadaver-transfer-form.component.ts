import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { CadaverTransferService } from 'src/core/services/health/cadaver-transfer/cadaver-transfer.service';
import { ExhumationPermitService } from 'src/core/services/health/exhumation-permit/exhumation-permit.service';
import { HealthCardService } from 'src/core/services/health/health-card/health-card.service';
import { PathsegmentService } from 'src/core/services/pathsegment/pathsegment.service';
import { PersonService } from 'src/core/services/person/person.service';

@Component({
  selector: 'app-cadaver-transfer-form',
  templateUrl: './cadaver-transfer-form.component.html',
  styleUrls: ['./cadaver-transfer-form.component.scss']
})
export class CadaverTransferFormComponent implements OnInit {

  basepath = "add-form";
  basepath_arr : any;
  isLoading = true;
  hc_tittle : any;
  expandSet = new Set<number>();
  validateForm! : FormGroup;
  listOfData: any [] = [];
  listOfData_cadaver: any [] = [];
  listOfData_person: any;
  data_transs : any = [];
  searchData: any;
  visible = false;
  size = 'large';
  sample: any;
param: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private modal: NzModalService,
    private healthService : HealthCardService,
    private notification : NzNotificationService,
    private pathservice : PathsegmentService,
    private personService : PersonService,
    private expServices : ExhumationPermitService,
 

  ) { this.route.params.subscribe(zxc => {
    //console.log("routee ",zxc)
    this.param = zxc['id']
  })
}


  ngOnInit() {

    this.basepath_arr = this.pathservice.getPath();
    let editpath: string = this.basepath_arr[3].toString()
    this.loadList();
  }
  loadList(){
    this.expServices.getList().subscribe(async cdata =>{
      //console.log(cdata)
      this.listOfData_cadaver = cdata[0];
    });
    this.healthService.getPerson().subscribe(data =>{
      this.listOfData_person = data[0];
       this.isLoading = false;
       console.log(data)
     });
  }

  showConfirm(dataid : any) {
    console.log(dataid)
    this.proccedToAddNewForm(dataid)
    // this.healthService.checkTransactionList(dataid).subscribe(data => {
      //  this.data_transs = data[0];
      //   if (data[0].length == 0) {
      //     this.proccedToAddNewForm(dataid)
      //   } else {
      //     this.checkPerson(dataid);
      //   }
       // });

      }

  checkPerson(dataid : any): void{
    const modal: NzModalRef = this.modal.create({

      nzTitle: 'Record Found!',
      nzContent: '<i>This person already has a helth-card!, </i>',
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
            setTimeout(() => {
              modal.destroy();
              this.showDrawer();
            }, 2000);

          }
        }
      ]
    });
  }
  showDrawer(): void {
    this.size = 'large';
    this.open();
  }


  //re route to health-card printing module
  proccedToAddNewForm( data_id : any) {
    if(this.param){
    this.router.navigate(["/"+this.basepath_arr[0]+"/"+this.basepath_arr[1]+"/"+this.basepath_arr[2]+"/"+this.basepath_arr[3]+"/"+this.param+"/"+data_id]);
    }else{
      this.router.navigate(["/"+this.basepath_arr[0]+"/"+this.basepath_arr[1]+"/"+this.basepath_arr[2]+"/"+this.basepath+"/"+data_id]);
    }
  }
  //SEARCH FILTER --------------------
  search(event: Event) {
    this.searchData = event

    this.personService.getPerson().subscribe(data => {
      this.listOfData = data;
      this.isLoading = false;

      this.listOfData = this.listOfData.filter((data:any) =>
      data.first_name.toLowerCase() == this.searchData.first_name.trim().toLowerCase()
      && data.middle_name.toLowerCase() == this.searchData.middle_name.trim().toLowerCase()
      && data.last_name.toLowerCase() == this.searchData.last_name.trim().toLowerCase()
      && data.suffix.toLowerCase() == this.searchData.suffix.toLowerCase())

      if (!this.listOfData.length) {
        this.modal.confirm({
          nzTitle: 'Do you want to add this person?',
          nzContent: this.searchData.first_name + " " + this.searchData.middle_name + " " + this.searchData.last_name +  " is not on the persons list.",
          nzOnCancel:() => {
            this.listOfData = data;
          },
          nzOnOk: () => {
            this.router.navigate(["/main/admin-console/person/add-form"], { queryParams: { firstname: this.searchData.first_name, middlename: this.searchData.middle_name, lastname: this.searchData.last_name, suffix_name: this.searchData.suffix } })
          }
        });
      }

      if (this.listOfData[0].status == 'Deleted') {
        this.modal.confirm({
          nzTitle: 'Do you want to Activate this person?',
          nzContent: this.searchData.first_name + " " + this.searchData.middle_name + " " + this.searchData.last_name +  " has already been deleted.",
          nzOnCancel:() => {
              this.listOfData = data;
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
              // this.personService.getPerson().subscribe(async data => {
              //   this.isLoading = false
              //   this.listOfData = data;
              //   if (this.listOfData) {
              //     this.notification.create(
              //       "success",
              //       'Successfully Activated',
              //       'Person Record has successfully activated.'
              //     );
              //   } else {
              //     this.notification.create(
              //       "error",
              //       'Unsuccessfully Activated',
              //       'Person Record unsuccessfully activated.'
              //     );
              //   }
              // })
            })
          }
        });
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

  select(value: any) {
    this.isLoading = true
    if (value == true) {
      this.personService.getPerson().subscribe(data => {
        this.listOfData = data;
        this.isLoading = false;
      })
    } else {
      this.personService.getPersonActiveOnly().subscribe(async data => {
        this.listOfData = data;
        this.isLoading = false;
      })
    }
  }


  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }


//end
}


