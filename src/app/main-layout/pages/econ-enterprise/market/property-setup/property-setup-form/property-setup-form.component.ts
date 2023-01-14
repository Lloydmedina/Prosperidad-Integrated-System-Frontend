import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { PathsegmentService } from 'src/core/services/pathsegment/pathsegment.service';
import { PropertySetupService } from 'src/core/services/property-setup/property-setup.service';
@Component({
  selector: 'app-property-setup-form',
  templateUrl: './property-setup-form.component.html',
  styleUrls: ['./property-setup-form.component.scss']
})
export class PropertySetupFormComponent implements OnInit {

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
  brgyList: any = []
  sectionList: any = []
  floorSections: any = []
  loading = true;
  buttonTitle: any;

  propertyData: any;
  unitStallNoData: any;
  minimumUnitStallNo: any = 0;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private viewContainerRef: ViewContainerRef,
    private modal: NzModalService,
    private notification: NzNotificationService,
    private propService: PropertySetupService,
    private pathService: PathsegmentService
    ) {this.route.params.subscribe(zxc => {
      this.param = zxc['id']
    }) }
    feesTypeDefault = "1"
  ngOnInit() {
    this.path = this.pathService.getPath();

    this.propService.getDropdown().subscribe(data => {
      this.brgyList = data[0].brgy
      this.sectionList = data[0].section


      if(this.param){
        this.buttonTitle = "Update & Exit"
        this.propService.getById(this.param).subscribe(data =>{
          // console.log("UPDATE VALUE", data)
          this.validateForm.patchValue({
            property_id: data.property_id,
            property_name: data.property_name,
            property_area: data.property_area,
            property_bldg_id: data.property_bldg_id,
            property_brgy_id: String(data.property_brgy_id),
            property_type_id: data.property_type_id,
            property_amount:{
              initial_amount: parseFloat(data.property_amount.initial_amount).toFixed(2),
              property_id: data.property_amount.property_id,
              fees_pk_id: data.property_amount.fees_pk_id
            },
            property_desc: data.property_desc
          })
        const floorTbl = data.property_floor
        let index = 0;
          if(floorTbl != null && floorTbl.length > 0){
          floorTbl.forEach((x:any) => {

            let selectedSections:any = []
            this.propertyData = ['']
            this.floorArray().push(this.fb.group({
              parent_id: x.parent_id,
              property_id: x.property_id,
              property_name: x.property_name,
              property_area: x.property_area,
              property_bldg_id: x.property_bldg_id,
              property_brgy_id: x.property_brgy_id,
              property_type_id: x.property_type_id,
              property_amount: this.fb.group({
                initial_amount: parseFloat(x.property_amount.initial_amount).toFixed(2),
                property_id: x.property_amount.property_id,
                fees_pk_id: x.property_amount.fees_pk_id
              }),
              property_section: [[]],
              unit_stall: this.fb.array([])
            }))
            console.log(this.floorArray().at(index))
            x.property_section.forEach((sec:any) => {
              let secObj = this.sectionList.filter((z:any) => z.section_id == sec.section_id)[0]
              this.floorArray().at(index).value.property_section.push(secObj)
            });
            
            const unitSt = x.unit_stall
            if(unitSt != null && unitSt.length > 0)
            {
              unitSt.forEach((obj:any) => {
                this.unitStallArray(index).push(this.fb.group({
                  parent_id: obj.parent_id,
                  property_amount:{
                    initial_amount: parseFloat(obj.property_amount.initial_amount).toFixed(2),
                    property_id: obj.property_amount.property_id,
                    fees_pk_id: obj.property_amount.fees_pk_id
                  },
                  property_id: obj.property_id,
                  property_name: obj.property_name,
                  property_area: obj.property_area,
                  property_bldg_id: obj.property_bldg_id,
                  property_brgy_id: obj.property_brgy_id,
                  property_type_id: obj.property_type_id,
                  property_section: this.sectionList.filter((o:any) => o.section_id == obj.property_section.section_id)[0]
                }))
              });
            }

            index++
          });
        }
        
    this.loading = false
      })
      }else{
        this.buttonTitle = "Save & Exit"
        this.loading = false
      }


    })

    this.validateForm = this.fb.group({
      property_id: '',
      property_desc: '',
      property_brgy_id: '',
      property_area: null,
      property_name: '',
      property_amount: this.fb.group({
        initial_amount:0,
        property_id: '',
        fees_pk_id: ''
      }),
      property_floor: this.fb.array([]),
      property_prefix: '',
      property_series: '',
    })
  }

  sectionSelectFloor(index:any){
    console.log(this.floorArray().at(index).value.property_section)
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
          this.propService.insert(value).subscribe(async (data: any) => {
            console.log(data)

            this.router.navigate(["/"+this.path[0]+"/"+this.path[1]+"/"+this.path[2] + "/" + this.path[3]]);
            await this.notification.create(
              "success",
              'Successfully Saved',
              'Property Setup has successfully saved.'
            );
          },
          async error => {
           await this.notification.create(
              "error",
              'Unsuccessfully Saved',
              'Property Setup has not been saved.'
            );
          });
        }
      })
    }
    else{
      this.modal.confirm({
        nzTitle: 'Do you really want to Update this record?',
        nzOnOk: () => {
          this.propService.update(this.param, value).subscribe(async (data: any) => {
            this.router.navigate(["/" + this.path[0] + "/" + this.path[1] + "/" + this.path[2] + "/" + this.path[3]]);
            await this.notification.create(
              "success",
              'Successfully Updated',
              'Property Setup has successfully updated.'
            );
          },
          async error => {
           await this.notification.create(
              "error",
              'Unsuccessfully Saved',
              'Property Setup has not been updated.'
            );
          });
        }
      });
    }
  }

  floorArray() : FormArray{
    return this.validateForm.get("property_floor") as FormArray
  }

  floorList: any = []
  addFloor(){
    this.floorList = this.floorArray().push(this.floorDtl())
    this.propertyData = ['']
  }

  remove(i:number){
    this.floorArray().removeAt(i)
    console.log("INDEX", i)
    if (i == 0) {
      this.propertyData = []
      this.floorIndex = null
      this.stallArea = null
      this.stallAmount = null
      this.stallRemarks = ""
      this.stallSection = null
      this.stallSeries = ""
    }
  }
  view(i:number){
    this.floorIndex = String(i)
    this.floorSelect()
  }

  sectionArray(index:any): FormArray{
    return this.floorArray().at(index).get("property_section") as FormArray
  }


  floorDtl(): FormGroup{
    return this.fb.group({
      property_id: '',
      property_brgy_id: this.validateForm.value.property_brgy_id,
      property_area: 0,
      property_name: '',
      property_amount: this.fb.group({
        initial_amount: null,
        property_id: '',
        fees_pk_id: ''
      }),
      property_section: [],
      unit_stall: this.fb.array([])
    })
  }
  



  cancel(e: MouseEvent){
    e.preventDefault();
    this.router.navigate(["/"+this.path[0]+"/"+this.path[1]+"/"+this.path[2] +"/"+ this.path[3]]);
  }




  floorSelect(){
    if(this.floorIndex != null){
      this.stallSectionList = this.floorArray().at(this.floorIndex).value.property_section
      this.stallTitle = this.floorArray().at(this.floorIndex).value.property_name
    }
    console.log(this.stallSection)
  }

  stallTitle = ""
  stallSectionList: any =[]
  stallArea = null;
  stallAmount = null;
  stallRemarks = "";
  stallSection:any = null;
  stallSeries = "0";
  stallPrefix = "sn";
  srs: number = 0;



  unitStallArray(i:any): any{
    if(i == -1)
    {
      return undefined
    }
    return this.floorArray().at(i).get("unit_stall") as FormArray
  }

  stallDtl(): FormGroup{
    if(this.unitStallArray(this.floorIndex).length <= 0)
    {
      this.srs = Number(this.stallSeries)
    }else{
      this.srs = this.unitStallArray(this.floorIndex).length
    }



    this.srs++

    return this.fb.group({
      property_id: '',
      property_floor: this.floorArray().at(this.floorIndex).value.property_name,
      property_brgy_id: this.validateForm.value.property_brgy_id,
      property_area: this.stallArea,
      property_name: this.stallPrefix + " " + String(this.srs).padStart(this.stallSeries.length, '0'),
      property_amount: this.fb.group({
        initial_amount: this.stallAmount,
        property_id: '',
        fees_pk_id: ''
      }),
      property_section: this.stallSection,
      property_remarks: this.stallRemarks
    })
  }
  
  floorIndex:any;


  removeUnit(index:any){
    this.unitStallArray(this.floorIndex).removeAt(index)
    if (index == 0) {
      this.unitStallNoData = []
    }
  }
  
  popStall(){
    this.unitStallArray(this.floorIndex).push(this.stallDtl())
    this.unitStallNoData = ['']
    // this.minimumUnitStallNo = this.stallSeries
    this.stallArea = null;
    this.stallAmount = null;
    this.stallRemarks = "";
    this.stallSection = null
  }

  editIndex = -1;
  rowFocused = -1
  editUnit(i:any){
    this.rowFocused = i
    this.editIndex = i
    this.stallArea =  this.unitStallArray(this.floorIndex).at(i).value.property_area;
    this.stallAmount = this.unitStallArray(this.floorIndex).at(i).value.property_amount.initial_amount;
    let selectedStall = this.sectionList.filter((z:any) => z.section_id == this.unitStallArray(this.floorIndex).at(i).value.property_section.section_id)[0]
    console.log("AHAY", this.stallArea)
    this.stallSection =  selectedStall
    this.stallRemarks = this.unitStallArray(this.floorIndex).at(i).value.property_remarks;
  }

  updateStall(){
    this.modal.confirm({
      nzTitle: 'Do you really want to Update this record?',
      nzCentered:true,
      nzOnOk: () => {
        this.unitStallArray(this.floorIndex).at(this.editIndex).patchValue({
          property_area: this.stallArea,
          property_amount:{
            initial_amount: this.stallAmount,
            property_id: '',
            fees_pk_id: ''
          },
          property_section: this.stallSection,
        })
        this.stallArea = null;
        this.stallAmount = null;
        this.stallRemarks = "";
        this.stallSection = null
        this.editIndex = -1

      }})
  }
  cancelStall(){
    this.stallArea = null;
    this.stallAmount = null;
    this.stallRemarks = "";
    this.stallSection = null
    this.editIndex = -1
  }

}