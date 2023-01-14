import { DatePipe } from '@angular/common';
import { Component, OnInit, Input, SimpleChanges, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ApplicationService } from 'src/core/services/application/application.service';
import { FormConfigService } from 'src/core/services/form-config/form-config.service';
import { PathsegmentService } from 'src/core/services/pathsegment/pathsegment.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-date-filter',
  templateUrl: './date-filter.component.html',
  styleUrls: ['./date-filter.component.scss']
})
export class DateFilterComponent implements OnInit {

  @Input() formOptions: any;
  @Output() generate = new EventEmitter();
  selectedValue: any;
  thisDateMonth = new Date();
  thisDateYear = new Date();
  dateFrom = new Date();
  dateTo = new Date();
  dateMonthly = new Date();
  dateYearly = new Date();
  dateThisYearQuarterly = new Date();
  defaultQuarter: any = "1";

  path: any = []
  filterList:any = []
  validateForm!: FormGroup;

  constructor(
    private pathService: PathsegmentService,
    private formConfig: FormConfigService,
    private formService: ApplicationService,
    private datepipe: DatePipe,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.path = this.pathService.getPath()

    this.validateForm = this.fb.group({
      filter_type: [null],
      thisMonth: [""],
      thisYear: [""],
      monthly: [""],
      monthlyYear: [""],
      yearQuarterly: [""],
      quarter: [0],
      yearly: [""],
      from: [""],
      to: [""]
    });
  }

  ngOnChanges() {
    this.selectedValue = this.formOptions.toString();
    // this.filterSelect(this.selectedValue)
  }

  dtFromTo?: String[] = []
  date = new Date()

  thisMonth = false;
  thisYearly = false;
  hideMonthly = false;
  hideQuarterly = false;
  hideYearly = false;
  hideRange = false;

  filterSelect(val:any){
    // console.log("Value", val)
    if(val == 1){
      // this.dateFrom = new Date(this.date.getFullYear(), this.date.getMonth(), 1)
      // this.dateTo = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0);
      // let from = this.datepipe.transform(this.dateFrom, 'MM-dd-yyyy')
      // let to = this.datepipe.transform(this.dateTo, 'MM-dd-yyyy')
      // this.dtFromTo = [from == null ? "" : from, to == null ? "" : to]
      // this.formConfig.dateFilter =  this.dtFromTo

      // HIDE
      this.hideMonthly = false;
      this.hideQuarterly = false;
      this.hideYearly = false;
      this.hideRange = false;
    } else if (val == 2) {
      // this.dateFrom = new Date(this.date.getFullYear(), this.date.getMonth(), 1)
      // this.dateTo = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0);
      // let from = this.datepipe.transform(this.dateFrom, 'MM-dd-yyyy')
      // let to = this.datepipe.transform(this.dateTo, 'MM-dd-yyyy')
      // this.dtFromTo = [from == null ? "" : from, to == null ? "" : to]
      // this.formConfig.dateFilter =  this.dtFromTo
      
      // HIDE
      this.hideMonthly = false;
      this.hideQuarterly = false;
      this.hideYearly = false;
      this.hideRange = false;
    } else if (val == 3) {

      // HIDE
      this.hideMonthly = true;
      this.hideQuarterly = false;
      this.hideYearly = false;
      this.hideRange = false;
    } else if (val == 4) {

      // HIDE
      this.hideMonthly = false;
      this.hideQuarterly = true;
      this.hideYearly = false;
      this.hideRange = false;
    } else if (val == 5) {

      // HIDE
      this.hideMonthly = false;
      this.hideQuarterly = false;
      this.hideYearly = true;
      this.hideRange = false;
    } else if (val == 6) {
      this.dateFrom = new Date(this.date.getFullYear(), this.date.getMonth(), 1)
      this.dateTo = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0);

      // HIDE
      this.hideMonthly = false;
      this.hideQuarterly = false;
      this.hideYearly = false;
      this.hideRange = true;
    }
  }

  generateButton(value: any) {
    let thisMonth = this.datepipe.transform(this.thisDateMonth, 'MM')
    let thisYear = this.datepipe.transform(this.thisDateYear, 'yyyy')
    let monthly = this.datepipe.transform(value.monthly, 'MM')
    let monthlyYear = this.datepipe.transform(value.monthly, 'yyyy')
    let yearQuarterly = this.datepipe.transform(value.yearQuarterly, 'yyyy')
    let yearly = this.datepipe.transform(value.yearly, 'yyyy')
    let from = this.datepipe.transform(value.from, 'yyyy-MM-dd')
    let to = this.datepipe.transform(value.to, 'yyyy-MM-dd')

    value.thisMonth = thisMonth
    value.thisYear = thisYear
    value.monthly = monthly;
    value.monthlyYear = monthlyYear;
    value.yearQuarterly = yearQuarterly;
    value.yearly = yearly;
    value.from = from;
    value.to = to;

    this.generate.emit(value);
  }

  // filterSelect(val:any){
  //   console.log("Value", val)
  //   if(val == 1){
  //     this.dateFrom = new Date(this.date.getFullYear(), this.date.getMonth(), 1)
  //     this.dateTo = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0);
  //     let from = this.datepipe.transform(this.dateFrom, 'MM-dd-yyyy')
  //     let to = this.datepipe.transform(this.dateTo, 'MM-dd-yyyy')
  //     this.dtFromTo = [from == null ? "" : from, to == null ? "" : to]
  //     this.formConfig.dateFilter =  this.dtFromTo
  //     this.thisMonth = true
  //   } else if (val == 2) {
  //     this.dateFrom = new Date(this.date.getFullYear(), this.date.getMonth(), 1)
  //     this.dateTo = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0);
  //     let from = this.datepipe.transform(this.dateFrom, 'MM-dd-yyyy')
  //     let to = this.datepipe.transform(this.dateTo, 'MM-dd-yyyy')
  //     this.dtFromTo = [from == null ? "" : from, to == null ? "" : to]
  //     this.formConfig.dateFilter =  this.dtFromTo
  //     this.thisMonth = true
  //   } else if (val == 3) {

  //   } else if (val == 4) {

  //   } else if (val == 5) {

  //   } else if (val == 6) {

  //   }
  // }
}
