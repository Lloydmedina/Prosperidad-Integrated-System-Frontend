import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { DafacIntakeService } from 'src/core/services/dafac-intake/dafac-intake.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-dafac-intake-print-list',
  templateUrl: './dafac-intake-print-list.component.html',
  styleUrls: ['./dafac-intake-print-list.component.scss']
})
export class DafacIntakePrintListComponent implements OnInit {

  listOfData: any[] = [];
  isLoading = true;
  localStorageStatus: any;
  localStorageDeletedStatus: any;
  localStorageFilterValue: any;
  filterValue: any;
  filterValueText: any;
  quarterText: any;

  constructor(
    private router: Router,
    private modal: NzModalService,
    private dafacIntakeService: DafacIntakeService,
    private datepipe: DatePipe
  ) { }

  ngOnInit() {
    this.localStorageStatus = localStorage.getItem("fc_status")
    this.localStorageDeletedStatus = localStorage.getItem("fc_status_deleted")
    this.localStorageFilterValue = localStorage.getItem("filterValue");
    this.filterValue = JSON.parse(this.localStorageFilterValue)
    const currentYear = new Date().getFullYear()

    if (this.filterValue.filter_type == 1) {
      this.filterValueText = "Month of " + this.toMonthName(this.filterValue.thisMonth) + " " + currentYear;
    } else if (this.filterValue.filter_type == 2) {
      this.filterValueText = "Year of " + currentYear;
    } else if (this.filterValue.filter_type == 3) {
      this.filterValueText = "Month of " + this.toMonthName(this.filterValue.monthly) + " " + this.filterValue.monthlyYear;
    } else if (this.filterValue.filter_type == 4) {
      if (this.filterValue.quarter != null) {
        if (this.filterValue.quarter == "1") {
          this.quarterText = "1st Quarter";
          this.filterValueText = "As Year of " + this.filterValue.yearQuarterly + " " + this.quarterText;
        } else if (this.filterValue.quarter == "2") {
          this.quarterText = "2nd Quarter";
          this.filterValueText = "As Year of " + this.filterValue.yearQuarterly + " " + this.quarterText;
        } else if (this.filterValue.quarter == "3") {
          this.quarterText = "3rd Quarter";
          this.filterValueText = "As Year of " + this.filterValue.yearQuarterly + " " + this.quarterText;
        } else if (this.filterValue.quarter == "4") {
          this.quarterText = "4th Quarter";
          this.filterValueText = "As Year of " + this.filterValue.yearQuarterly + " " + this.quarterText;
        }
      }
    } else if (this.filterValue.filter_type == 5) {
      this.filterValueText = "Year of " + this.filterValue.yearly;
    } else if (this.filterValue.filter_type == 6) {
      let latest_date_from = this.datepipe.transform(this.filterValue.from, 'MMMM dd yyyy');
      let latest_date_to = this.datepipe.transform(this.filterValue.to, 'MMMM dd yyyy');
      this.filterValueText = "As of " + latest_date_from + " to " + latest_date_to;
    }

    this.dafacIntakeService.getDafacIntakeGenerated(this.filterValue.filter_type, this.localStorageStatus, this.localStorageDeletedStatus, this.filterValue.thisMonth, this.filterValue.thisYear, this.filterValue.monthly, this.filterValue.monthlyYear, this.filterValue.yearQuarterly, this.filterValue.quarter, this.filterValue.yearly, this.filterValue.from, this.filterValue.to).subscribe(data => {
      this.isLoading = false;
      this.listOfData = data[0]
    })
    // this.dafacIntakeService.getDafacIntake().subscribe(data => {
    //   this.listOfData = data[0];
    //   this.isLoading = false;
    // })
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
        let str = "DAFAC_Intake_List_Worksheet.xlsx";
        XLSX.writeFile(wb, str);
        // this.isExcel = false
      }
    });
  }

  toMonthName(monthNumber: any) {
    const date = new Date();
    date.setMonth(monthNumber - 1);
  
    return date.toLocaleString('en-US', {
      month: 'long',
    });
  }

}
