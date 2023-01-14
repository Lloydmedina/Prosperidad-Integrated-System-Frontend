import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { FamilyCompositionService } from 'src/core/services/family-composition/family-composition.service';
import { PersonService } from 'src/core/services/person/person.service';
import { WccCaseConferenceService } from 'src/core/services/wcc/wcc-case_conference/wcc-case-conference.service';
import { WccIncident_reportService } from 'src/core/services/wcc/wcc-incident_report/wcc-incident_report.service';
import { WccIntervention_undertakenService } from 'src/core/services/wcc/wcc-intervention_undertaken/wcc-intervention_undertaken.service';
import { WccService } from 'src/core/services/wcc/wcc-registration/wcc.service';
import { WccSummary_intakeService } from 'src/core/services/wcc/wcc-summary_intake/wcc-summary_intake.service';
import * as XLSX from 'xlsx';
import jspdf from "jspdf";
import html2canvas from "html2canvas";

@Component({
  selector: 'app-wcciu-form-print',
  templateUrl: './wcciu-form-print.component.html',
  styleUrls: ['./wcciu-form-print.component.scss']
})
export class WcciuFormPrintComponent implements OnInit {

  isLoading = true;
  param: any;
  clientData : any;
  caseCData : any;
  familyData : any;
  reportData : any;
  caseDtlData : any = [];
  isData : any;
  desinatedOfficer  = 'CLARILIN P. SANTA, RSW, MPA';
  designation ='MSWDO Designate';
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private modal: NzModalService,
    private siService : WccSummary_intakeService,
    private wccCCService : WccCaseConferenceService,
    private personService : PersonService,
    private iuService : WccIntervention_undertakenService,
    private wccfamService : WccService,
    private famService : FamilyCompositionService,
    private wccIRServices : WccIncident_reportService

  ) {
    this.route.params.subscribe(params => {
      this.param = params['tId'];
    });
   }

  ngOnInit() {
    this.isLoading = true;
    this.loadDatas(this.param);

  }


  transData : any;
  depthead : any;
  loadDatas(id : any){
    console.log(this.param);
    this.iuService.getData(id).subscribe(data => {
      this.isData = data[0][0];
      console.log("iu data",this.isData);
      this.loadClientsInfo(this.isData.client_pid);
      this.loadCaseConData(this.isData.wcc_reg_id);
      this.loadIncidentReport(this.isData.wcc_reg_id);
    });
  }
  loadCaseConData(data : any){
    this.siService.getCCData(data).subscribe(cres => {
      this.caseCData = cres[0];
      this.loadCaseConferenceDtl(this.caseCData.case_dtl_id);
      console.log("CC data", this.caseCData);
    })
  }
  loadCaseConferenceDtl(cc_id : any){
    this.wccCCService.getCCDtls(cc_id).subscribe(dts => {
     this.caseDtlData = dts;
     this.isLoading = false;
    //  console.log("THE DATA ",dts);
    });
  }
  loadIncidentReport(caseid: any){
    this.wccIRServices.getReportDataRID(caseid).subscribe(report => {
      this.reportData = report[0];
      console.log("IR data ",this.reportData);
    });
  }
  loadClientsInfo(pid : any){
    this.personService.getPersonGUID(pid).subscribe(pdata =>{
      this.clientData = pdata[0];
      this.getFamilyId(pdata[0]);
      //console.log("Client data ",this.clientData);
    });
  }
  getFamilyId(perData : any){
    this.wccfamService.getFCid(perData.person_guid).subscribe(fam_id =>{
      if (fam_id) {
        this.getFamilyList(fam_id.main_guid);
      } else {
        console.log("no data");
      }
    })
  }

  getFamilyList(fam_id : any){
    this.wccfamService.getFClist(fam_id).subscribe(fdata =>{
      this.familyData = fdata;

      //console.log("Family data",this.familyData);
    });
  }

  print(){
    window.print();
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
        let str = "AICSIntake_Form_Worksheet.xlsx";
        XLSX.writeFile(wb, str);
        // this.isExcel = false
      }
    });
  }

  dataElement: any
  convertToPDF() {
    this.dataElement = document.getElementById("contentpdf");
    html2canvas(this.dataElement).then(canvas => {
      // Few necessary setting options
      var imgWidth = 208;
      var pageHeight = 295;
      var imgHeight = (canvas.height * imgWidth) / canvas.width;
      var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL("image/png");
      let pdf = new jspdf("p", "mm", "a4"); // A4 size page of PDF
      var position = 0;
      pdf.addImage(contentDataURL, "PNG", 0, position, imgWidth, imgHeight);
      pdf.save("WCC_INTERVENTION_UNDERTAKEN.pdf"); // Generated PDF
    });
  }

}
