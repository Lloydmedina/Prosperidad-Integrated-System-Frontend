import { Component, HostListener, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzFormatEmitEvent, NzTreeComponent, NzTreeNode } from 'ng-zorro-antd/tree';
import { DomainService } from 'src/core/services/domain/domain.service';
import { PathsegmentService } from 'src/core/services/pathsegment/pathsegment.service';
import { RoleTypeService } from 'src/core/services/role-type/role-type.service';

@Component({
  selector: 'app-role-type-form',
  templateUrl: './role-type-form.component.html',
  styleUrls: ['./role-type-form.component.scss']
})
export class RoleTypeFormComponent implements OnInit {
  @ViewChild('nztree') nztree!: NzTreeComponent;
  @HostListener("window:beforeunload", ["$event"]) unloadHandler(event: Event) {
    let result = confirm("Changes you made may not be saved.");
    if (result) {
      // Do more processing...
    }
    event.returnValue = false; // stay on same page
  }
  selectedValue = null

  defaultCheckedKeys: any = [];
  defaultSelectedKeys: any = [];
  validateForm!: FormGroup;
  valueChecked = [];
param:any;
title:any;
path: any;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private viewContainerRef: ViewContainerRef,
    private modal: NzModalService,
    private notification: NzNotificationService,
    private domainService: DomainService,
    private pathService: PathsegmentService,
    private roletypeService: RoleTypeService
    ) {this.route.params.subscribe(zxc => {
      this.param = zxc['id']
    }) }
treeNode: any = {}
domainList: any = []
loading = true
  ngOnInit() {
    

    this.path = this.pathService.getPath();
    this.validateForm = this.fb.group({
      domain_guid: ['', [Validators.required]],
      rolename: ['', [Validators.required]],
      activity_guid: {},
      status: ''
    })
    let domain_id = ""
   
    
    if(this.param)
    {
      this.roletypeService.getById(this.param).subscribe( (value: any) => {
     
       
        this.valueChecked = value.activity_guid;
        this.validateForm.patchValue({
          domain_guid: value.domain_guid,
          rolename: value.rolename,
          activity_guid: value.activity_guid,
          status: value.status
        });
        
      this.loading = false
      })

      this.title = "Update Record"
      this.domainChange("")
      
    }else{


      this.loading = false
      this.title = "Add Record"
      
      this.domainChange("")
    }

  }
  
  domainChange(domain_id:string){
    this.roletypeService.getActivity(domain_id).subscribe( (data:any) => {
      this.treeNode = data
      this.defaultCheckedKeys = this.valueChecked
      this.defaultSelectedKeys = this.valueChecked;
      
    })
  }
 
  key: any;
  accessData: any;
  nzEvent(event: NzFormatEmitEvent): void {
    var body = [];
    this.accessData =  this.nztree.getCheckedNodeList();
    var id: any = [];
    this.accessData.forEach((element:any) => {
      body.push(this.returnCheck(element, id))
    });
    
    this.key = id;
  }
  returnCheck(node: NzTreeNode, data:any) {
    let result: any; 
    // console.log("ELEMENT", node.key)
    if (node.children.length > 0) {
      node.children.forEach(value => {
        result = this.returnCheck(value, data)
      }) 
    } else {
      result = node.key;
      data.push(node.key)
    }
    return data
  }
  
  submitForm(value:any){
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity();
    }

    value.activity_guid = this.key
    if(!this.param)
    {
      this.modal.confirm({
        nzTitle: 'Do you really want to Save this record?',
        nzOnOk: () => {
          this.roletypeService.insert(value).subscribe(async (data: any) => {
            
            this.router.navigate(["/"+this.path[0]+"/"+this.path[1]+"/"+this.path[2]]);
            await this.notification.create(
              "success",
              'Successfully Saved',
              'RoleType Record has successfully saved.'
            );
          },
          async error => {
           await this.notification.create(
              "error",
              'Unsuccessfully Saved',
              'RoleType Record has not been saved.'
            );
          });
        }})
    }else{
      this.modal.confirm({
        nzTitle: 'Do you really want to Update this record?',
        nzOnOk: () => {
          this.roletypeService.update(this.param, value).subscribe(async (data: any) => {
            this.router.navigate(["/"+this.path[0]+"/"+this.path[1]+"/"+this.path[2]]);
            await this.notification.create(
              "success",
              'Successfully Updated',
              'RoleType Record has successfully updated.'
            );
          },
          async error => {
           await this.notification.create(
              "error",
              'Unsuccessfully Saved',
              'RoleType Record has not been updated.'
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
