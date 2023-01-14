import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ApplicationService } from 'src/core/services/application/application.service';
import { PathsegmentService } from 'src/core/services/pathsegment/pathsegment.service';
import { RoleTypeService } from 'src/core/services/role-type/role-type.service';
import { UserService } from 'src/core/services/user/user.service';

interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
}

@Component({
  selector: 'app-application-setup-list',
  templateUrl: './application-setup-list.component.html',
  styleUrls: ['./application-setup-list.component.scss']
})
export class ApplicationSetupListComponent implements OnInit {

listOfData:any = []
dataStore!: any[]
listOfDomain!:any[]
selectedDomain!: string
  constructor( private router: Router,
    private userService: UserService,
    private fb: FormBuilder,
    private viewContainerRef: ViewContainerRef,
    private route: ActivatedRoute,
    private modal: NzModalService,
    private notification: NzNotificationService,
    private pathService: PathsegmentService,
    private formService: ApplicationService,
    private roleTypeService: RoleTypeService
    ) { }
    gridStyle = {
      width: '100%',
      textAlign: 'center'
    }
    control ={
      edit: false,
      delete: false
    }
    isLoading = true
  ngOnInit() {
    
    this.formService.getList().subscribe(data => {
      this.dataStore = data
      this.userService.getDomainList().subscribe(data => {
        this.listOfDomain = data
        
        let domain_guid = this.listOfDomain.map(c => c.domain_guid)[0]
        let domain_name = this.listOfDomain.map(c => c.domain_name)[0]
        this.getForms(domain_guid, domain_name)
        this.isLoading = false
      })
    })
   
  }
  getForms(id:string, name:string){

   this.listOfData = this.dataStore.filter(x => x.domain_guid == id)
   this.selectedDomain = name
  }


  edit(data: any) {
    this.router.navigate(["/main/admin-console/form/edit-form/", data.form_guid])
  }

  delete(data: any) {
    this.modal.confirm({
      nzTitle: 'Do you want to delete this record?',
      nzOnOk: () => 
      {
        this.formService.delete(data.form_guid).subscribe(async x => {
          this.ngOnInit()
          await this.notification.create(
            "success",
            'Successfully Deleted',
            'Form Record has successfully deleted.'
          );
        },
        async error => {
         await this.notification.create(
            "error",
            'Unsuccessfully Saved',
            'Form Record has not been deleted.'
          );
        })
      }
    });
  }
}
