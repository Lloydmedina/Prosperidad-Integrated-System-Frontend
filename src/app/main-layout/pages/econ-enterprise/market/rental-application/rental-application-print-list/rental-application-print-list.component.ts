import { DatePipe } from '@angular/common';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { faL } from '@fortawesome/free-solid-svg-icons';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { repeatWhen } from 'rxjs';
import { FormConfigService } from 'src/core/services/form-config/form-config.service';
import { MarketBillingService } from 'src/core/services/market-billing/market-billing.service';
import { PathsegmentService } from 'src/core/services/pathsegment/pathsegment.service';
import { PropertySetupService } from 'src/core/services/property-setup/property-setup.service';
import { RentalApplicationService } from 'src/core/services/rental-application/rental-application.service';
import { TenantProfilingService } from 'src/core/services/tenant-profiling/tenant-profiling.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-rental-application-print-list',
  templateUrl: './rental-application-print-list.component.html',
  styleUrls: ['./rental-application-print-list.component.scss']
})
export class RentalApplicationPrintListComponent implements OnInit {
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
    private rentAppService: RentalApplicationService,
    private tenantService: TenantProfilingService,
    private formConfig: FormConfigService,
    private datePipe: DatePipe,
    private notification: NzNotificationService,) { 
      this.route.params.subscribe(zxc => {
        this.param = zxc['id']
      })
    }
printOpts = ['Transient', 'Stall']
selectedOpt = "Transient"
billData:any = []
propDtl: any = []
bldgDtl: any = []
flrDtl: any = []
tntDtl: any = []
asOf = new Date()
billByProp:any = []
waterBill:any = []

electBill:any = []
limitRow = 5
    isTenant = false
    isAll = false

  ngOnInit() {
      this.createTplModal(this.temp)
    this.isLoading = false;
  }
  
  printing = false

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

  isTransient = false
  isStall = false
  createTplModal(tplContent: TemplateRef<{}>): void {
    this.modal.create({
      nzTitle: "Print Master List",
      nzContent: tplContent,
      nzMaskClosable: false,
      nzClosable: false,
      nzComponentParams: {
        value: 'Template Context'
      },
      nzOnOk: () => {
        if(this.selectedOpt.includes('Transient')){
          this.rentAppService.getTransientList(this.datePipe.transform(this.asOf, 'yyyy-MM-dd')).subscribe(data => {
            this.isTransient = true
            this.isStall = false
            // this.drawTbl(data, 'trans')
            console.log("yama", data)
          })
          
        }else if(this.selectedOpt.includes('Stall')){
          this.rentAppService.getStallList(this.datePipe.transform(this.asOf, 'yyyy-MM-dd')).subscribe(data => { 
            this.drawTbl(data, 'stall')
            this.isStall = true
            this.isTransient = false
          })
        }
       
      },
      nzOnCancel: () => {
        this.router.navigate([`/main/economic-enterprises/market/rental-application`]);
      }
    });
  }


  drawTbl(data:any, type:any){
    let x = 1
    let rowCount = 1
    let counter = 0;
    let dtList: any[] = []
    this.listOfData = data[0]
    this.finalList = []
    let tblDraw: any = []
    if(type == 'stall'){
      let i = 0;
      let count = 1
      this.listOfData.forEach((row:any) => {
        if(tblDraw.length == 0){
          tblDraw.push({
            section_name: row.section_name,
            applicant: '',
            property_name:  '',
            nature_of_business: '',
            remarks: '',
            isBlank: true
          })
          
          tblDraw.push({
            section_name: count.toString(),
            applicant: row.applicant,
            property_name: row.property_name,
            nature_of_business: row.nature_of_business,
            remarks: row.remarks,
            isBlank: false
          })
        }else{
          if(this.listOfData[i - 1].section_name != row.section_name){
            tblDraw.push({
              section_name: row.section_name,
              applicant:'',
              property_name: '',
              nature_of_business: '',
              remarks: '',
              isBlank: true
            })
           }
          tblDraw.push({
            section_name: count.toString(),
            applicant: row.applicant,
            property_name: row.property_name,
            nature_of_business: row.nature_of_business,
            remarks: row.remarks,
            isBlank: false
          })
          
        }
        count++
        i++
      })
      
      this.listOfData = tblDraw
    }



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



      if(type == 'trans'){
        if(this.listOfData.length < 23){
          let diff = 23 - this.listOfData.length
          for(let z = 1; z <= diff; z++){
            this.finalList[0].push({
              applicant_name: '',
              nature_of_business: '',
              transient_reg_no: '',
            })
          }
        }
      }else if (type == 'stall'){

        if(this.listOfData.length < 23){
          let diff = 23 - this.listOfData.length
          for(let z = 1; z <= diff; z++){
            this.finalList[0].push({
              section_name: '',
              applicant: '',
              property_name: '',
              nature_of_business: '',
              remarks: ''
            })
          }
        }
      }


        console.log( this.finalList[0])
        this.formSetting = data[1];
    
        if(this.formSetting.show_footer == "true"){
          this.showFooter = true
          console.log(this.showFooter)
        }
        
  }

}
