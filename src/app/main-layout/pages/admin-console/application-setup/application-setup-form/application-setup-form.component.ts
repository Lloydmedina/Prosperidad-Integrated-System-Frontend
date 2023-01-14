import { FormStyle } from '@angular/common';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faLessThanEqual } from '@fortawesome/free-solid-svg-icons';
import { NzTreeHigherOrderServiceToken } from 'ng-zorro-antd/core/tree';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ApplicationService } from 'src/core/services/application/application.service';
import { PathsegmentService } from 'src/core/services/pathsegment/pathsegment.service';
import { UserService } from 'src/core/services/user/user.service';

@Component({
  selector: 'app-application-setup-form',
  templateUrl: './application-setup-form.component.html',
  styleUrls: ['./application-setup-form.component.scss']
})

export class ApplicationSetupFormComponent implements OnInit {

  validateForm!: FormGroup;
  constructor(
    private router: Router,
    private userService: UserService,
    private fb: FormBuilder,
    private viewContainerRef: ViewContainerRef,
    private route: ActivatedRoute,
    private modal: NzModalService,
    private notification: NzNotificationService,
    private pathService: PathsegmentService,
    private formService: ApplicationService
  ) { this.route.params.subscribe(zxc => {
    this.param = zxc['id']

  }) }
  param = ""
  path = ""
domainList: any = [];
parentFolderList: any = []
labelName = "Folder Name";
title="";
radioValue = 'Form';

resetValue="Yearly";

seriesLength = 4;
seriesStart = "1";
seriesSeparator = "-";

filterList: any = []
filterValue = 1;
selectedIndex: number = 0;
form_Name: any;
formAlias: any;
actionTypeList: any = []
loading = true
  ngOnInit() {
    this.path = this.pathService.getPath();
    
    this.validateForm = this.fb.group({
      domain_guid: [, [Validators.required]],
      form_type:['',[Validators.required]],
      form_name:['', [Validators.required]],
      form_alias:[''],
      parent_guid: [''],
      form_guid: [''],
      form_icon: [''],
      form_status:[''],
      series_length:0,
      series_start:0,
      series_reset:'',
      series_separator:'',
      series_ref_no:[''],
      default_filter_id: 0,
      with_series: '',
      with_fees:'',
      allow_print: '',
      print_option: '',
      show_header:'',
      show_footer:'',
      show_signatory: '',
      form_series: this.fb.array([]),
      routes: this.fb.array([])
    })
    this.userService.getDomainList().subscribe(data => {
      console.log(data)
      this.domainList = data

      this.loading = false
    })

    if(this.param)
    {
      this.formService.getById(this.param).subscribe(data => {
        console.log(data)
        this.form_Name = data.form_name
        this.validateForm.patchValue({
          form_type: data.form_type,
          domain_guid: data.domain_guid,
          parent_guid: data.parent_guid,
          form_name: data.form_name,
          form_alias: data.form_alias,
          form_icon: data.form_icon,
          form_status: data.form_status,
          form_guid: data.form_guid
        })

        if(data.form_type == "Form")
        {

          if (data.form_series != null)
          {
            const seriesForm = data.form_series
            let check = false

            seriesForm.forEach((element:any )=> {
              if (element.series_include == "True") check = true

              this.seriesArray().push(
                this.fb.group({
                  form_guid: data.form_guid,
                  series_include: element.series_include,
                  series_format:  element.series_format,
                  series_order: element.series_order,
                  series_type: element.series_type,
                  checked: check
                })
              )
            })
          }

          if(data.routes != null)
          {
            const activities = data.routes
            activities.forEach((element:any) => {
              this.activity().push(this.fb.group({
                form_guid: data.form_guid,
                activity_name: element.activity_name,
                action_type_id : element.action_type_id,
                executable_path: element.executable_path,
              }))
            });
          }

          if (data.with_fees == "true") this.withFees = true
          if (data.with_series == "true") this.genFormNum = true
          if (data.allow_print == "true") this.allowPrint = true
          if (data.show_header == "true") this.showHeader = true
          if (data.show_footer == "true") this.showFooter = true
          if (data.show_signatory == "true") this.showSignatory = true
          this.feesChange();

          this.printOpt =  data.print_option
          this.validateForm.patchValue({
            series_ref_no: data.series_ref_no,
            series_length: data.series_length,
            series_start: data.series_start,
            series_separator: data.series_separator,
            default_filter_id: data.default_filter_id,
            print_option: data.print_option
          })
        }

      })
    }
  }
  nameChange(){
    this.formAlias = this.form_Name
  }
  //#region form-references
  allowPrint:any;
  withFees: any;
  genFormNum:any;
  printOpt = "Anytime"
  showHeader:any;
  showFooter:any;
  showSignatory:any;
//#endregion

  domainRoute: string = ""
domainFirstChar = "";
optWithFees = ['Anytime', 'Paid']
optNoFees = ['Anytime', 'Approved']
printOptions: any = []

  domainSelect(id:any){
    this.parentFolderList = []
  
    console.log(this.domainList)
    this.domainRoute = this.domainList.filter((x:any) => x.domain_guid === id).map((c:any) => c.route_reference)[0]
    // this.domainFirstChar = this.domainRoute.charAt(0).toUpperCase()
    console.log(this.domainRoute)
    
      this.formService.getDomainFolders(id).subscribe(data => {
        if(data){
          this.parentFolderList = data;
          this.validateForm.patchValue({
            parent_guid: ''
          })
        }
      })
  }

  folderName = ""
  folderFirstChar = ""
  parentSelect(value:any){
    this.folderName = this.parentFolderList.filter((x:any) => x.form_guid === value).map((z:any) => z.form_name)[0]
    // this.folderFirstChar = this.folderName.charAt(0).toUpperCase()
  }

  typeSelect(value:string)
  {
    console.log(value)
    if(value == "Form")
    {
      this.labelName = "Form Name"
      this.validateForm.addControl("form_series", this.fb.array([]))
      this.validateForm.addControl("routes", this.fb.array([]))
      this.validateForm.updateValueAndValidity()
    }else{
      this.labelName = "Folder Name"
      this.validateForm.removeControl("form_series")
      this.validateForm.removeControl("routes")
    }

  }
  submitForm(value:any){
  console.log(value)

  if(this.genFormNum) value.with_series = "true"
  if(this.withFees) value.with_fees = "true"

  if(this.allowPrint){
    value.allow_print = "true"
    if(this.showHeader) value.show_header = "true"
    if(this.showFooter) value.show_footer = "true"
    if(this.showSignatory) value.show_signatory = "true"
  }



  if (this.validateForm.valid) {
    if(!this.param)
    {
      this.modal.confirm({
        nzTitle: 'Do you really want to Save this record?',
        nzOnOk: () => {
          this.formService.insert(value).subscribe(async (data: any) => {
            console.log(data)

            this.router.navigate(["/"+this.path[0]+"/"+this.path[1]+"/"+this.path[2]]);
            await this.notification.create(
              "success",
              'Successfully Saved',
              'User Record has successfully saved.'
            );
          },
          async error => {
           await this.notification.create(
              "error",
              'Unsuccessfully Saved',
              'User Record has not been saved.'
            );
          });
        }
      })
    }else{
      this.modal.confirm({
        nzTitle: 'Do you really want to Update this record?',
        nzOnOk: () => {
          this.formService.update(this.param, value).subscribe(async (data: any) => {
            this.router.navigate(["/"+this.path[0]+"/"+this.path[1]+"/"+this.path[2]]);
            await this.notification.create(
              "success",
              'Successfully Updated',
              'User Record has successfully updated.'
            );
          },
          async error => {
           await this.notification.create(
              "error",
              'Unsuccessfully Saved',
              'User Record has not been updated.'
            );
          });
        }
      });

    }
  }
  }
  seriesFields(type: string = "", order: number = 0, formPrefix: string = ""): FormGroup{
    return this.fb.group({
      form_guid: '',
      series_include: 'True',
      series_format: formPrefix,
      series_order: order,
      series_type: type,
      checked: true
    })
  }

  cancel(e: MouseEvent): void {
    e.preventDefault();
    this.router.navigate(["/"+this.path[0]+"/"+this.path[1]+"/"+this.path[2]]);
  }
  seriesArray() : FormArray{
    return this.validateForm.get("form_series") as FormArray
  }

  populateFields(){
    // this.formFirstChar = this.validateForm.value.form_name.charAt(0).toUpperCase()
    this.formFirstChar = this.validateForm.value.form_name.toUpperCase()
    if(this.seriesArray().controls.length <= 0)
    {
      // let formPrefix = this.domainFirstChar + "" + this.folderFirstChar + "" + this.formFirstChar
      let formPrefix = this.formFirstChar.slice(0, 3)
      this.seriesArray().push(this.seriesFields("Prefix", 1 ,formPrefix))
      this.seriesArray().push(this.seriesFields("Month", 2, "MM"))
      this.seriesArray().push(this.seriesFields("Series", 3))
      this.seriesArray().push(this.seriesFields("Year", 4, "YYYY"))
    }

    if(this.filterList.length <= 0)
    {
      this.formService.getFilters().subscribe(data =>{
        this.filterList = data
      })
    }
  }



  seriesChange(index:number = 0){
    let separator = this.validateForm.value.series_separator
    let format = ""
    let i = 0;

    this.seriesArray().controls.forEach(x => {
      if(x.value.series_format != '' && x.value.checked){
        if(format == "")
        {
            format = x.value.series_format
        }else{
          format = format + "" + separator + "" + x.value.series_format
        }
      }
      i++
    })

    this.validateForm.patchValue({
      series_ref_no: format
    })

  }
  separatorChange(value:string){
    for(let i =0; i < this.seriesArray().length;i ++)
    {
      this.seriesChange(i)
    }
  }

  pad(){
    if(this.seriesLength && this.seriesStart)
    {
      let size = this.seriesLength
      let num = this.seriesStart
      num = num.toString()

       if(num && size)
       {
         while(num.length < size)
         {
         num = "0" + num;
         }

         this.seriesArray().at(2).patchValue({
           series_format: num
         })
       }
    }
  }

  activity(): FormArray {
    return this.validateForm.get("routes") as FormArray
  }

  delete(i:any) {
    this.activity().removeAt(i)
  }

  addRow() {
    this.activity().push(this.popActivity());
  }


  popActivity(): FormGroup{
    return this.fb.group({
      form_guid:[],
      activity_name: ['', [Validators.required]],
      action_type_id : [''],
      executable_path: ['', [Validators.required]],
    });
  }

  popActions(){
    if(this.actionTypeList.length <=0 ){
    this.formService.getActionType().subscribe(data => {
      this.actionTypeList = data

      this.fillActivity(data)
    })
    }
  }
counter = 0;
  nextTab(){
    if(this.validateForm.valid){
      this.counter+= 1
      this.selectedIndex +=1
      this.changeTab(this.selectedIndex)
    }
  }

  modalCheck = 0;
  back(){
      this.counter-= 1
      this.selectedIndex -=1
      this.changeTab(this.selectedIndex)
  }
  showBackBtn = false
  showNextBtn = true;
  changeTab(index:number){
    if(this.counter == 0)
    {
      this.showBackBtn = false
    }else if (this.counter == 1)
    {

      this.populateFields()
      this.seriesChange(0)
      this.showBackBtn = true
      this.showNextBtn = true
    }else
    {
      this.popActions()
      this.showNextBtn = false
    }
  }
formName:string = ""
formFirstChar = ""
formRoute:string = ""
activityRoute:string = ""
  fillActivity(data:any){
    this.formName = this.validateForm.value.form_name.toLowerCase()
    this.formRoute = this.formName.replace(" ", "-")
    if(this.activity().controls.length <= 0)
    {
      const actionList = data
      actionList.forEach((obj:any) => {

        if(obj.action_name.toLowerCase() == "list view"){
          this.activityRoute = ""
        }else if(obj.action_name.toLowerCase() == "add" || obj.action_name.toLowerCase() == "edit")
        {
          this.activityRoute = obj.action_name.toLowerCase() + "-form"
        }else{
          this.activityRoute = obj.action_name.toLowerCase()
        }

        this.activity().push(this.fb.group({
          form_guid:'',
          activity_name: this.validateForm.value.form_name + ' ' + obj.action_name + ' Record',
          action_type_id : String(obj.action_type_id),
          executable_path: '/main/' + this.domainRoute + "/" + this.formRoute + "/" + this.activityRoute,
        }))
      });
    }
  }

  feesChange(){
    this.printOpt = "Anytime"
    this.printOptions = []
    if(this.withFees){
      this.printOptions = this.optWithFees
    }else{
      this.printOptions = this.optNoFees
    }

  }
  allow(){

  }
}
