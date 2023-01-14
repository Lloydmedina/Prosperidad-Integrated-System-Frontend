import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { PersonService } from 'src/core/services/person/person.service';
import { RentalApplicationService } from 'src/core/services/rental-application/rental-application.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-rental-application-print',
  templateUrl: './rental-application-print.component.html',
  styleUrls: ['./rental-application-print.component.scss']
})
export class RentalApplicationPrintComponent implements OnInit {
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
  constructor(
    private router: Router,
    private modal: NzModalService,
    private rentalService: RentalApplicationService,
    private personService: PersonService,
    private notification: NzNotificationService,
    private route: ActivatedRoute,
  ) {this.route.params.subscribe(zxc => {
    this.param = zxc['id']
  }) }
param = ""
personDtl:any = []
applicationDtl: any = []
reqList:any = []
isContract?:boolean
appType = ""
firstLoad = true
  ngOnInit() {
    this.rentalService.getById(this.param).subscribe(data => {
      this.personService.getPersonGUID(data.applicant_id).subscribe(person => {
        this.applicationDtl = data
        if(data.application_type_id == 1){
          this.appType == "stalls"
        }else{
          this.appType == "transient"
        }
        console.log(this.appType)
        this.personDtl = person[0]
      })
      this.rentalService.getReqs(data.application_type_id).subscribe(reqs => {
        this.reqList = reqs
      })
      
    this.createTplModal(this.temp)
    })
    this.isLoading = false
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
  selectedOpt="Lease of Contract"
printOpts = ['Lease of Contract', 'Lease Requirements']
mayor = ""
  createTplModal(tplContent: TemplateRef<{}>): void {
    this.modal.create({
      nzTitle: "Print Application",
      nzContent: tplContent,
      nzMaskClosable: false,
      nzClosable: false,
      nzComponentParams: {
        value: 'Template Context'
      },
      nzOnOk: () => {
        if(this.selectedOpt.toLowerCase() == 'lease of contract'){
          this.rentalService.getMayor().subscribe(data => {
            this.mayor = data[0].employee_name
            this.isContract = true
          })
        }else if (this.selectedOpt.toLowerCase() == 'lease requirements'){
          this.isContract = false
        }
        this.firstLoad = false
      },
      nzOnCancel: () => {
        this.router.navigate([`/main/economic-enterprises/market/rental-application`]);
      }
    });
  }

}
