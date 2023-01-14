import { formatNumber } from '@angular/common';
import { Component, HostListener, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzFormatEmitEvent, NzTreeComponent, NzTreeNode } from 'ng-zorro-antd/tree';
import { throwError } from 'rxjs';
import { observeNotification } from 'rxjs/internal/Notification';
import { FeesChargesService } from 'src/core/services/fees-charges/fees-charges.service';
import { PathsegmentService } from 'src/core/services/pathsegment/pathsegment.service';

@Component({
  selector: 'app-fees-charges-form',
  templateUrl: './fees-charges-form.component.html',
  styleUrls: ['./fees-charges-form.component.css']
})
export class FeesChargesFormComponent implements OnInit {
  @ViewChild('nztree') nztree!: NzTreeComponent;
  @HostListener("window:beforeunload", ["$event"]) unloadHandler(event: Event) {
    let result = confirm("Changes you made may not be saved.");
    if (result) {
      // Do more processing...
    }
    event.returnValue = false; // stay on same page
  }

  validateForm!: FormGroup;
  
  defaultCheckedKeys: any = [];
  defaultSelectedKeys: any = [];
  valueChecked = [];
treeNode: any = {}
  // captchaTooltipIcon: NzFormTooltipIcon = {
  //   type: 'info-circle',
  //   theme: 'twotone'
  // };
  isAdd: boolean = true
  title = ""
  path: any;
  param: any;
  accountList:any = []
  parentList:any = []
  feesTypeList:any = []
  deptList:any = []
  formList:any = []
  loading = true;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private viewContainerRef: ViewContainerRef,
    private modal: NzModalService,
    private notification: NzNotificationService,
    private feesService: FeesChargesService,
    private pathService: PathsegmentService
    ) {this.route.params.subscribe(zxc => {
      this.param = zxc['id']
    }) }
    feesTypeDefault = "1"
  ngOnInit() {
    this.path = this.pathService.getPath();
    
    this.validateForm = this.fb.group({
      fees_pk_id: '',
      fees_code: ['', [Validators.required]],
      fees_name: ['', [Validators.required]],
      fees_desc: '',
      initial_amount: 0,
      parent_id: '',
      account_id: '',
      fees_type_id: '',
      dept_form: {},
      range_fees: this.fb.array([])
    })
    
    this.feesService.getDropdown().subscribe(data => {
      this.parentList = data[0].parent
      this.feesTypeList = data[0].feesType
      this.accountList = data[0].accounts
      this.treeNode = data[0].dept
      
    

      this.loading = false
    })


    if(this.param){
      this.isAdd = false;
      this.range_array().clear;
      this.feesService.getById(this.param).subscribe(obj => {
        this.defaultCheckedKeys = obj.dept_form.map((x:any) => x.form_id)
        this.defaultSelectedKeys = obj.dept_form.map((x:any) => x.form_id)
        this.key = obj.dept_form
        console.log(this.key)
        if(obj.range_fees.length > 0)
        {
          const rangeFees = obj.range_fees
          rangeFees.forEach((ob:any) => {
            console.log(ob)
            this.range_array().push(this.fb.group({
              amt_from: parseFloat(ob.amt_from).toFixed(2),
              amt_to: parseFloat(ob.amt_to).toFixed(2),
              fees: parseFloat(ob.fees).toFixed(2)
            }))
          });
        }
        
        this.validateForm.patchValue({
          parent_id: obj.parent_id,
          account_id: obj.account_id,
          fees_type_id: String(obj.fees_type_id),
          fees_code: obj.fees_code,
          fees_name: obj.fees_name,
          fees_desc: obj.fees_desc,
          initial_amount: parseFloat(obj.initial_amount).toFixed(2),
        })
     

      })
    }else{
      this.isAdd = true
    }
  }

  incomeAccSelect(val:any){

  }

  isPercent: any;
  isFixed: any;
  isRange: any;

  feeTypeSelect(val:any){
    this.validateForm.patchValue(
      {
        initial_amount: 0
      }
    )

    if(val == 1){
      this.isFixed = true
      this.isRange = false
      this.isPercent = false
    }else if (val == 2){
      this.isFixed = false
      this.isRange = true
      this.isPercent = false
      console.log(this.range_array().length)
      if(this.range_array().length == 0){
        this.addRow()
      }
    }else{
      this.isFixed = false
      this.isRange = false
      this.isPercent = true
    }
  }


  range_array(): FormArray {
    return this.validateForm.get("range_fees") as FormArray
  }
  
  remove() {
    this.range_array().removeAt(this.range_array().length - 1)

    if(this.range_array().length == 0){
      console.log(this.range_array().length)
      this.validateForm.patchValue({
        fees_type_id: '1'
      })
    }
  }

  addRow() {
    this.range_array().push(this.popRange());      
  }

  
  popRange(): FormGroup{
    return this.fb.group({
      amt_from: 0,
      amt_to: 0,
      fees: 0,
      fees_pk_id: ''
    });
  }

  changes(value:any){
    console.log(value)
  }


  submitForm(value:any){
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity();
    }
    if(this.key == undefined || this.key.length <= 0)
    {
      this.notification.create("error", "Incomplete Data", "No Forms Assigned!")
    }
    else{
      value.dept_form = this.key
      console.log(value)

      for(let i = 0; i < value.range_fees.length; i++){
        value.range_fees[i].amt_from = Number(value.range_fees[i].amt_from)
        value.range_fees[i].amt_to = Number(value.range_fees[i].amt_to)
        value.range_fees[i].fees = Number(value.range_fees[i].fees)
      }

      console.log(value)
    if(!this.param)
    {
      this.modal.confirm({
        nzTitle: 'Do you really want to Save this record?',
        nzOnOk: () => {
          this.feesService.insert(value).subscribe(async (data: any) => {
            console.log(data)

            this.router.navigate(["/"+this.path[0]+"/"+this.path[1]+"/"+this.path[2]]);
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
    }else{
      this.modal.confirm({
        nzTitle: 'Do you really want to Update this record?',
        nzOnOk: () => {
          this.feesService.update(this.param, value).subscribe(async (data: any) => {
            this.router.navigate(["/"+this.path[0]+"/"+this.path[1]+"/"+this.path[2]]);
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
  }


  cancel(e: MouseEvent){
    e.preventDefault();
    this.router.navigate(["/"+this.path[0]+"/"+this.path[1]+"/"+this.path[2]]);
  }


  key: any;
  accessData: any;
  deptForms: any = []
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
      if(node.origin.title.toLowerCase().includes("office"))
      {
        data.push({
          dept_id: node.key,
          form_id: ''
        })
      }else{
        data.push({
          form_id: node.key,
          dept_id: node.parentNode?.key
        })
      }
    }
    return data
  }

}
