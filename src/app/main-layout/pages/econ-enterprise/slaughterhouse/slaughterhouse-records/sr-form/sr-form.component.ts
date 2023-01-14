import { DatePipe } from '@angular/common';
import { Component, HostListener, OnInit, ViewContainerRef } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Subject } from 'rxjs';
import { PersonsBrowseComponent } from 'src/app/main-layout/template/persons-browse/persons-browse.component';
import { PathsegmentService } from 'src/core/services/pathsegment/pathsegment.service';
import { Slaughterhouse_recordsService } from 'src/core/services/slaughterhouse_records/slaughterhouse_records.service';

@Component({
  selector: 'app-sr-form',
  templateUrl: './sr-form.component.html',
  styleUrls: ['./sr-form.component.scss']
})
export class SrFormComponent implements OnInit {

  @HostListener("window:beforeunload", ["$event"]) unloadHandler(event: Event) {
    let result = confirm("Changes you made may not be saved.");
    if (result) {
      // Do more processing...
    }
    event.returnValue = false; // stay on same page
  }

  validateForm!: FormGroup;
  title = ""
  path: any;
  param: any;
  personList:any = []
  businessList: any = [];
  loading = true;
  saveLoading = false;
  buttonTitle: any;
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
    private srService: Slaughterhouse_recordsService,
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
      main_id: '',
      transaction_date: new Date(),
      status: 'Active',
      receiving_list: this.fb.array([])
    })
    console.log(this.param)
    if(!this.param){
      this.buttonTitle = "Save & Exit"
      let value:any = localStorage.getItem('receiving-data')
      if(value){
        let objList = JSON.parse(value)
        let list = objList.receiving_list
        this.validateForm.patchValue(objList)

         list.forEach((obj:any) => {
          this.arrayList().push(this.fb.group(obj))
         });
      
      }else{
        for(let i = 0; i < 10; i++){
          this.addRecord()
        }
      }
      this.validateForm.valueChanges.subscribe( async z => {
        localStorage.setItem('receiving-data', JSON.stringify(z))
        
      })
    }else{
      this.buttonTitle = "Update & Exit"
      this.srService.getById(this.param).subscribe(data => {
        console.log(data)
        this.validateForm.patchValue({
          main_id: data.main_id,
          transaction_date: data.transaction_date,
          status: data.status
        })
        let list = data.receiving_list
         list.forEach((obj:any) => {
          this.arrayList().push(this.fb.group(obj))
         });
      })
    }

    
    this.srService.getDropdown().subscribe(data => {
      this.animalList = data
      this.loading = false;

    })

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
          this.saveLoading = true;
          this.srService.insert(value).subscribe(async (data: any) => {
            this.saveLoading = false;

            localStorage.removeItem('receiving-data')
            this.router.navigate(["/"+this.path[0]+"/"+this.path[1]+"/"+this.path[2] + "/" + this.path[3]]);
            await this.notification.create(
              "success",
              'Successfully Saved',
              'Slaughterhouse Record has successfully saved.'
            );
          },
          async error => {
           await this.notification.create(
              "error",
              'Unsuccessfully Saved',
              'Slaughterhouse Record has not been saved.'
            );
          });
        }
      })
    }
    else{
      this.modal.confirm({
        nzTitle: 'Do you really want to Update this record?',
        nzOnOk: () => {
          this.saveLoading = true;
          this.srService.update(this.param, value).subscribe(async (data: any) => {
            this.saveLoading = false;
          localStorage.removeItem('receiving-data')
          this.router.navigate(["/"+this.path[0]+"/"+this.path[1]+"/"+this.path[2] + "/" + this.path[3]]);
            await this.notification.create(
              "success",
              'Successfully Updated',
              'Slaughterhouse Record has successfully updated.'
            );
          },
          async error => {
           await this.notification.create(
              "error",
              'Unsuccessfully Saved',
              'Slaughterhouse Record has not been updated.'
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

  arrayList() : FormArray{
    return this.validateForm.get("receiving_list") as FormArray
  }

  recordList: any = []
  addRecord(){
    this.recordList = this.arrayList().push(this.arrayDtl())
  }

  remove(i:number){
    this.arrayList().removeAt(i)
  }

  arrayDtl(): FormGroup{
    return this.fb.group({
      receiving_id: '',
      time: new Date(),
      client_name: '',
      client_id: '',
      address: '',
      animal_id: '',
      animal_kind: '',
      no_of_heads:'',
      kilos: '',
      slaughtering_date: new Date(),
      slaughtering_time: new Date(),
      purpose: '',
      lechonero: '',
      status: "Draft",
      animal_inspection: this.fb.group({
        findings: '',
        inspector_id: '',
        inspector_name: '',
        status: ''
      })
    })
  }

  save(val:any){
    val.isSaved = true
  }
  detectChange(index:number){
    this.arrayList().at(index).patchValue({
      hasChange: true
    })
    
  }
  
  modalInspect = false
  inspector_name = ''
  inspector_id = ''
  findings = ''
  recordIndex = 0
  receivingId = ''
  inspect(val:any, index:number){
    console.log(val)
    this.receivingId = val.value.receiving_id
    let rec = this.arrayList().at(index).value.animal_inspection
    if(rec){
      this.inspector_name = rec.inspector_name
      this.inspector_id = rec.inspector_id
      this.findings = rec.findings
    }
    this.recordIndex = index
    this.modalInspect = true
   
  }


  handleOk(){

    this.arrayList().at(this.recordIndex).patchValue({
      animal_inspection:{
        receiving_id: this.receivingId,
        findings: this.findings,
        inspector_id: this.inspector_id,
        inspector_name: this.inspector_name
      },
      status: 'Inspected'
    })
    this.modalInspect = false
    if(this.receivingId != ''){
      this.srService.inspect(this.arrayList().at(this.recordIndex).value.animal_inspection).subscribe(data => {
        console.log(data)
      })
    }
    this.clearInspect()

  }

  clearInspect(){
    this.inspector_name = ''
    this.inspector_id = ''
    this.findings = ''
    this.receivingId = ''
    this.recordIndex = -1
  }
  handleCancel(){
    this.modalInspect = false
    this.clearInspect()
    
  }

  
  openPersonBrowse(): void {
    const drawerRef = this.drawerService.create({
      nzTitle: 'Persons List',
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
        this.inspector_name = name
        this.inspector_id = data.person_guid
      }
    });

  }

}
