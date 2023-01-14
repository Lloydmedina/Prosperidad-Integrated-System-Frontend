import { DatePipe } from '@angular/common';
import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faThList } from '@fortawesome/free-solid-svg-icons';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { PersonsBrowseComponent } from 'src/app/main-layout/template/persons-browse/persons-browse.component';
import { FormConfigService } from 'src/core/services/form-config/form-config.service';
import { MarketBillingService } from 'src/core/services/market-billing/market-billing.service';
import { PathsegmentService } from 'src/core/services/pathsegment/pathsegment.service';
import { PropertySetupService } from 'src/core/services/property-setup/property-setup.service';
import { TenantProfilingService } from 'src/core/services/tenant-profiling/tenant-profiling.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-market-billing-print',
  templateUrl: './market-billing-print.component.html',
  styleUrls: ['./market-billing-print.component.css']
})
export class MarketBillingPrintComponent implements OnInit {
  @ViewChild('tplContent', { static: true }) temp!: TemplateRef<{}>;
  
  count = 0;
  pageSize= 25
  listOfData: any[] = [];
  numPage: any = [];
  filteredList: any[] = []
  isLoading = true;
  formSetting: any = []
  showFooter: boolean = false;
  finalList: any[] = []
  param: any = ""
  constructor(
    private router: Router,
    private modalService: NzModalService,
    private modal: NzModalService,
    private route: ActivatedRoute,
    private billingService: MarketBillingService,
    private drawerService: NzDrawerService,
    private pathService: PathsegmentService,
    private propService: PropertySetupService,
    private tenantService: TenantProfilingService,
    private formConfig: FormConfigService,
    private notification: NzNotificationService,
    private datepipe: DatePipe) { 
      this.route.params.subscribe(zxc => {
        this.param = zxc['id']
      })
    }
printOpts = ['All', 'Per Tenant']
selectedOpt = "All"
billData:any = []
propDtl: any = []
bldgDtl: any = []
flrDtl: any = []
tntDtl: any = []
billMonth = new Date()
billByProp:any = []
waterBill:any = []

electBill:any = []
limitRow = 5
    isTenant = false
    isAll = false

  ngOnInit() {
    this.formConfig.itemValue.subscribe(dt => {
    this.billingService.getList(dt[0], dt[1]).subscribe(data => {
      console.log(dt)
        // this.populateRecord(data)
          
          // this.listOfData = data[0];
        })
      })
    if(this.param){
        this.billingService.getPrintById(this.param).subscribe(data => {
          this.waterBill = []
          this.electBill = []
          this.billByProp = []
          this.billData = data[0].billing
          this.propDtl = data[0].prop
          this.tntDtl = data[0].tenant
          
          this.bldgDtl = data[1].bldg
          this.flrDtl = data[1].floor

          this.billByProp.push({
            bldg_floor: this.bldgDtl.property_name + ", " + this.flrDtl.property_name,
            prop: this.propDtl.property_name,
            amt: this.billData.bill_amount
          })

          for(let i = 1; i <= this.limitRow; i++){
            if(i == this.limitRow){

              this.billByProp.push({
                bldg_floor: '',
                prop: 'TOTAL',
                amt: this.billData.bill_amount,
              })
            }else{
              this.billByProp.push({
                bldg_floor: '',
                prop: '',
                amt: '',
              })
            }
          }



          this.waterBill.push({
            bldg_floor: this.bldgDtl.property_name + ", " + this.flrDtl.property_name,
            prop: this.propDtl.property_name,
            prev: this.billData.billing_water.prev_reading,
            curr: this.billData.billing_water.curr_reading,
            cons: this.billData.billing_water.consumption,
            rateper: this.billData.billing_water.rate / this.billData.billing_water.consumption,
            amt: this.billData.billing_water.rate
          })

          for(let i = 1; i <= this.limitRow; i++){
            if(i == this.limitRow){

              this.waterBill.push({
                bldg_floor: '',
                prop: '',
                prev: '',
                curr: '',
                cons: '',
                rateper: 'TOTAL',
                amt: this.billData.billing_water.rate
              })
            }else{
              this.waterBill.push({
                bldg_floor: '',
                prop: '',
                prev: '',
                curr: '',
                cons: '',
                rateper: '',
                amt: ''
              })
            }
          }


          this.electBill.push({
            bldg_floor: this.bldgDtl.property_name + ", " + this.flrDtl.property_name,
            prop: this.propDtl.property_name,
            prev: this.billData.billing_electricity.prev_reading,
            curr: this.billData.billing_electricity.curr_reading,
            cons: this.billData.billing_electricity.consumption,
            rateper: this.billData.billing_electricity.rate / this.billData.billing_electricity.consumption,
            amt: this.billData.billing_electricity.rate
          })

          for(let i = 1; i <= this.limitRow; i++){
            if(i == this.limitRow){

              this.electBill.push({
                bldg_floor: '',
                prop: '',
                prev: '',
                curr: '',
                cons: '',
                rateper: 'TOTAL',
                amt: this.billData.billing_electricity.rate
              })
            }else{
              this.electBill.push({
                bldg_floor: '',
                prop: '',
                prev: '',
                curr: '',
                cons: '',
                rateper: '',
                amt: ''
              })
            }
          }

          console.log(this.billData)
        })
    }else{
      this.createTplModal(this.temp)
  }
  this.isLoading = false;
}

  printing = false

  populateRecord(data:any){
    let x = 1
    let rowCount = 1
    let counter = 0;
    let dtList: any[] = []
    this.listOfData = data[0]
    this.finalList = []
      this.listOfData.forEach((dt:any) => {
        dtList.push(dt)
      if(x == 23){
        x = 0
        this.finalList.push(dtList)
        dtList = []
        this.numPage.push(counter)
        counter++
      }else if(rowCount == this.listOfData.length){
        this.finalList.push(dtList)
        dtList = []
        this.numPage.push(counter)
      }
      x++
      rowCount++
    });
    
    if(this.listOfData.length < 23){
      let diff = 23 - this.listOfData.length
      for(let z = 1; z <= diff; z++){
        this.finalList[0].push({
          key: "",
          title: "",
          amt: ""
        })
      }
    }

      
      console.log( this.finalList[0])
      this.formSetting = data[1];
  
      if(this.formSetting.show_footer == "true"){
        this.showFooter = true
        console.log(this.showFooter)
      }
  }

  excel() {
    this.modal.confirm({
      nzTitle: 'Do you want to export this to excel?',
      nzOnOk: () => {
        // this.isExcel = true
        let element = document.getElementById('report-section'); 
        // console.log(element)
        const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
        /* generate workbook and add the worksheet */
        const wb: XLSX.WorkBook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
        /* save to file */
        let str = "Department_List_Worksheet.xlsx";
        XLSX.writeFile(wb, str);
        // this.isExcel = false
      }
    });
  }
  createTplModal(tplContent: TemplateRef<{}>): void {
    this.modal.create({
      nzTitle: "Print Billing",
      nzContent: tplContent,
      nzMaskClosable: false,
      nzClosable: false,
      nzComponentParams: {
        value: 'Template Context'
      },
      nzOnOk: () => {
        console.log(this.selectedOpt)
        if(this.selectedOpt.includes('All')){
          this.isAll = true
          this.isTenant = false
          this.finalList = []
          let from = new Date(this.billMonth.getFullYear(), this.billMonth.getMonth(), 1 )
          let to = new Date(this.billMonth.getFullYear(), this.billMonth.getMonth() + 1, 0 )
          let dtFrom = this.datepipe.transform(from, 'MM-dd-yyyy')
          let dtTo = this.datepipe.transform(to, 'MM-dd-yyyy')
          console.log(dtFrom, dtTo)
          this.billingService.getList(dtFrom, dtTo).subscribe(data => {
            console.log(data)
            if(data[0].length > 0){
              this.populateRecord(data)
            }else{
              this.popNoRecord()
            }
          })
        }else{
          this.isAll = false
          this.isTenant = true
          this.openPersonBrowse(null)
        }
       
      },
      nzOnCancel: () => {
        this.router.navigate([`/main/economic-enterprises/market/market-billing`]);
      }
    });
  }

  popNoRecord(){
    this.modal.error({
      nzTitle: 'Empty Record',
      nzContent: 'No record found!',
      nzOnOk: () => {
        this.router.navigate([`/main/economic-enterprises/market/market-billing`]);
      }
    
    });
  }
hasSelect = false

  openPersonBrowse(val:any): void {
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
      if (data) {
        this.hasSelect = true
        this.tntDtl = data
      }
    });

  }

  waterUtilSetting:any = []
  electUtilSetting:any = []

}
