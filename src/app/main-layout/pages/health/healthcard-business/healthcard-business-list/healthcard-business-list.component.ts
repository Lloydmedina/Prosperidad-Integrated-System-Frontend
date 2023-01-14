import { Component, HostListener, OnInit, ViewContainerRef } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ActivatedRoute, Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { HealthCardService } from 'src/core/services/health/health-card/health-card.service';
import { environment } from 'src/environments/environment';
import { PersonService } from 'src/core/services/person/person.service';
import { DatePipe, getLocaleDateFormat } from '@angular/common';
import { PathsegmentService } from 'src/core/services/pathsegment/pathsegment.service';
import { differenceInCalendarDays, setHours } from 'date-fns';
import * as moment from 'moment'
import { TokenStorageService } from 'src/core/services/token-storage/token-storage.service';
import { HealthPaymentService } from 'src/core/services/health/health-payment/health-payment.service';

@Component({
  selector: 'app-healthcard-business-list',
  templateUrl: './healthcard-business-list.component.html',
  styleUrls: ['./healthcard-business-list.component.scss']
})
export class HealthcardBusinessListComponent implements OnInit {

  listURL = "/main/health/healthcard-business"
  addURL = "/main/health/health-card-individual/add-form"
  newURL = "/main/health/health-card-individual/add-form-new"
  printListURL = "/main/health/healthcard-business/healthcard-business-list-ptint"
  form_code = 'hc';
  startDateValue: Date | null = null;
  endDateValue = Date.now()+1;
  today = Date.now() ;
  txt_amount:any;
  selectedValue : any;
  selectedDate : any;
  basepath = "healthcard-business-form-print";
  basepath_arr : any;
  param: any;
  drawerVisible = false;
  paymentDrawer = false;
  isLoading = true;
  chk_txt = true;
  chk_payment = true;
  chk_arr = [1];
  err_res = false;
  err_message = '';
  date = null;
  show = true;
  show1 = false;
  show2 = false;
  show3 = false;
  currentUser: any;
  for_paymentId : any;
  for_payamount : any;

  listOfMedExam: any= [];
  expandSet = new Set<number>();
  expandSet_sub = new Set<number>();
  validateForm! : FormGroup;
  paymentForm! : FormGroup;
  listOfData: any [] = [];
  //listOfData_arr: any [] = [];
  personDetails_arr: any = [];
  listOfData_trans : any [] = [];
  searchData : any
  data_transs : any [] = [];
  paymentArr : any [] = [];
selectedIndex: any = -1
  SERVER_ADDRESS: string = environment.apiUrl;


  ngOnInit() {
    this.loadTransRecords()
    this.basepath_arr = this.pathservice.getPath();

    this.validateForm = this.fb.group({
      // MEDICAL TRANSACTIONS ------------------
        main_id: [''],
        dtl_id: [''],
        examiner_name : ['', [Validators.required]],
        lab_exam_id: ['',[Validators.required]],
        lab_exam_date : [null,  [Validators.required]],
        lab_exam_place : ['', [Validators.required]],
        lab_exam_result : ['', [Validators.required]],
        lab_exam_cause : ['', [Validators.required]],
        status : [''],
      })
      var sample = new DatePipe('en-Us').transform(this.today, 'yyyy-MM-dd', 'GMT+0800');
      this.paymentForm = this.fb.group({
        main_pk_id:' ',
        or_id : [null,[Validators.required]],
        or_date : [null,[Validators.required]],
        payment_status :' ',
        payment_type : ' ',
        amount_paid : ['',[Validators.min(10)]],
        total_fee:this.for_payamount,
      })

     // LIST OF SIDENAV FROM CURRENT USER
     var arrayItems = JSON.parse(localStorage.getItem('auth-user') || '{}');
     var aa = arrayItems[4].routes.filter((x:any) => x == this.addURL)

     if (aa.length > 0) {
       this.show1 = false;
     } else {
       this.show1 = true;
     }


    var nav_e = document.getElementById("sub_button1");
  }

  onExpandChange(p_id:any, id: number, checked: boolean , index : any): void {
    this.selectedIndex = index;
    if (checked) {
      this.expandSet.add(index);
      this.loadTransactionDetails(p_id,id,index);
    } else {
      this.expandSet.delete(index);
    }

  }

  showExamRes(ceckhed: boolean, en : any) : void{
    if (ceckhed) {
      this.expandSet_sub.add(en);
    } else {
      this.expandSet_sub.delete(en);
    }
  }

  loadRequestor(data : any){
    alert(data);
  }
  constructor(
    private router: Router,
    private modal: NzModalService,
    private healthService : HealthCardService,
    private notification : NzNotificationService,
    private fb: FormBuilder,
    private route : ActivatedRoute,
    private personService : PersonService,
    private pathservice : PathsegmentService,
    private token : TokenStorageService,
    private Hpayment : HealthPaymentService
  ) { }
  loadMedExam(){
    var guid = this.param;
    var med_id = this.validateForm.value.med_exam_id;
    this.healthService.setHealthCardTransactionExamList(guid , med_id).subscribe(data => {
      //this.listOfData_trans = data[0];
    });
  }



  loadTransRecords(){
    this.healthService.getHCBusinessList().subscribe( value =>{
      this.listOfData = value[0];
      console.log("this is the data",value);
     })
  }

  refreshRecort(){
    this.loadTransRecords()
  }

  //GET TRANSACTION DETAILS
  loadTransactionDetails(p_id : any , id : any ,index : any){
  this.healthService.getHealthCardTransactionList(id).subscribe(data_trans => {
    this.listOfData_trans[index] = data_trans;
    console.log(data_trans)
  })

}


getData(datas : any){
  this.healthService.getHealthCardTransactionList(datas).subscribe(data_ => {
    this.data_transs = data_;
  })
}
checkVal(element: any){
  var ev_ = element.target.getAttribute('formControlName')
    var a =  this.validateForm.controls[ev_].value;
   if (a == null) {
    this.chk_txt = true;

   } else {
     if (this.chk_arr.length > 3) {
       this.chk_txt = false;
     } else {
       this.chk_arr.push(1);
     }
   }

 }
 mid_exam_iid : any;
 updateExam(value : any, med_iid : any){
  console.log(med_iid)
  console.log(value)
  this.modal.confirm({
    nzTitle: '<i>Are you sure to update?</i>',
    nzContent: " ",
    nzOnOk: () =>{
      this.healthService.updateDtlById(med_iid , value).subscribe(data =>{
        this.loadTransRecords()
        this.expandSet.delete(this.selectedIndex)
        this.notification.create(
          "success",
          'Successfully Updated',
          'Health Card Record has successfully Updated.'
        );

       this.drawerVisible = false;
      },
      async error => {
        this.loadTransRecords()
        this.notification.create(
           "error",
           'Unsuccessfully',
           ' '
         );
         this.drawerVisible = false;
       });
    }
    });
 }

 showConfirm(dataid : any
): void {
this.modal.confirm({
nzTitle: '<i>Do you Want to proceed ?</i>',
nzContent: "",
nzOnOk: () =>{
this.proccedToPrintCard(dataid);
console.log("this trans id",dataid)
}
});
}
 proccedToPrintCard( data_id : any) {
  this.router.navigate(["/"+this.basepath_arr[0]+"/"+this.basepath_arr[1]+"/"+this.basepath_arr[2]+"/"+this.basepath+"/"+data_id]);
}

  delete(data : any) {
    this.modal.confirm({
      nzTitle: 'Do you Want to delete these transaction?',
      nzOnOk: () => {
        this.healthService.deleteTrans(data.pk_id).subscribe( async x =>{
          console.log(x)
          this.ngOnInit()
          await this.notification.create(
            "success",
            'Successfully Deleted',
            'Record has successfully deleted.'
          );
        },
        async error => {
          await this.notification.create(
             "error",
             'Unsuccessfully Saved',
             'Record has not been deleted.'
           );
         });
      }
    });
  }
  showPayment(per_id : any, fee : any){
    this.paymentDrawer = true;
    this.for_paymentId = per_id;
    this.for_payamount = fee;
  }
  closePayment(){
    this.paymentDrawer = false;
  }
  openDrawer( dtl_id : any): void {
    this.modal.confirm({
      nzTitle: 'Do you Want to update these record?',
      nzOnOk: () => {

      // GET MEDICAL EXAMINATION TITTLES
      this.healthService.getMed_ExamList(this.form_code).subscribe(data =>{
        this.listOfMedExam = data
     })
        this.healthService.getMed_ExamDtl(dtl_id).subscribe(async data => {
          this.validateForm.patchValue({
            dtl_id :data[0].dtl_id,
            main_id: data[0].main_id,
            examiner_name : data[0].examiner_name,
            lab_exam_id: data[0].lab_exam_id.toString(),
            lab_exam_date : data[0].lab_exam_date,
            lab_exam_place : data[0].lab_exam_place,
            lab_exam_result : data[0].lab_exam_result,
            lab_exam_cause : data[0].lab_exam_cause,
            status: data[0].status
          });
        },
              async error => {
                await this.notification.create(
                  "error",
                  ' ',
                  ' '
           );
         });
         this.drawerVisible = true
      }
    });
  }

  // data[0].lab_exam_id.toString()
  open(): void {
    this.drawerVisible = true;
  }

  close(): void {
    this.drawerVisible = false;
  }


  //FILTER MODULE
  filterTerm!: string;
  filter(e : Event){
    if (this.selectedValue === "date") {

    } else if (this.selectedValue === "week"){
      let start = new Date(this.selectedDate);
      start.setDate(start.getDate() - start.getDay());
      let end = new Date(start);
      end.setDate(start.getDate() + 6);

    } else if (this.selectedValue === "month") {
      let month = new Date(this.selectedDate)
      month.setDate(month.getMonth())

    }else if (this.selectedValue === "year"){
      let year = new Date(this.selectedDate)
      year.setDate(year.getDate())

    }else{

    }
  }



    search(event: Event) {
    this.searchData = event

    this.personService.getPerson().subscribe(async data => {
      this.listOfData = data;
      this.isLoading = false;

      this.listOfData = this.listOfData.filter((data:any) =>
      data.first_name.toLowerCase() == this.searchData.first_name.trim().toLowerCase()
      && data.middle_name.toLowerCase() == this.searchData.middle_name.trim().toLowerCase()
      && data.last_name.toLowerCase() == this.searchData.last_name.trim().toLowerCase()
      && data.suffix.toLowerCase() == this.searchData.suffix.toLowerCase())

      if (!this.listOfData.length) {
        this.modal.confirm({
          nzTitle: 'Do you want to add this person?',
          nzContent: this.searchData.first_name + " " + this.searchData.middle_name + " " + this.searchData.last_name +  " is not on the persons list.",
          nzOnCancel:() => {
            this.isLoading = true
            this.personService.getPerson().subscribe(async data => {
              this.isLoading = false
              this.listOfData = data;
            })
          },
          nzOnOk: () => {
            this.router.navigate(["/main/admin-console/person/add-form"], { queryParams: { firstname: this.searchData.first_name, middlename: this.searchData.middle_name, lastname: this.searchData.last_name, suffix_name: this.searchData.suffix } })
          }
        });
      }

      if (this.listOfData[0].status == 'Deleted') {
        this.modal.confirm({
          nzTitle: 'Do you want to Activate this person?',
          nzContent: this.searchData.first_name + " " + this.searchData.middle_name + " " + this.searchData.last_name +  " has already been deleted.",
          nzOnCancel:() => {
            this.isLoading = true
            this.personService.getPerson().subscribe(async data => {
              this.isLoading = false
              this.listOfData = data;
            })
          },
          nzOnOk: () => {
            this.isLoading = true
            this.personService.activatePerson(this.listOfData[0].person_guid, this.listOfData[0]).subscribe(async data => {
              this.router.navigate(["/main/admin-console/person/edit-form/" + this.listOfData[0].person_guid])
              this.notification.create(
                "success",
                'Successfully Activated',
                'Person Record has successfully activated.'
              );
            })
          }
        });
      }
    })

  }

  clear(value: any) {
    this.isLoading = true
    if (value) {
      this.isLoading = false
      this.listOfData = value
    }
  }

  select(value: any) {
    this.isLoading = true
    if (value == true) {
      this.personService.getPerson().subscribe(async data => {
        this.listOfData = data;
        this.isLoading = false;
      })
    } else {
      this.personService.getPersonActiveOnly().subscribe(async data => {
        this.listOfData = data;
        this.isLoading = false;
      })
    }
  }

  disabledStartDate = (current: Date): boolean =>
  // Can not select days before today and today
  differenceInCalendarDays(current, this.today) > 0;



  disabledEndDate = (endValue: Date): boolean => {
    if (!endValue || !this.startDateValue) {
      return false;
    }
    return endValue.getTime() <= this.startDateValue.getTime();
  }

selectedPayment : any
  waivedPayment(e : any) : void{
    this.txt_amount = true
    this.chk_payment = false
    this.selectedPayment = "Waived"
    this.paymentForm.patchValue({
      main_pk_id : this.for_paymentId,
      amount_paid : 0,
      payment_type :'waived' ,
      total_fee : this.for_payamount,
      payment_status :'1',
    })

  }
  overridePayment(e : any) : void{
    this.txt_amount = false
    this.chk_payment = true
    this.selectedPayment = "Override"
    this.paymentForm.patchValue({
      main_pk_id : this.for_paymentId,
      amount_paid : ' ',
      payment_type :'override' ,
      total_fee : this.for_payamount,
      payment_status :'1',
    })

  }
  fullPayment(e : any) : void{
    this.txt_amount = true
    this.chk_payment = false
    this.selectedPayment = "Full_Paymen"
      this.paymentForm.patchValue({
        main_pk_id : this.for_paymentId,
        amount_paid : '100',
        payment_type :'full payment' ,
        total_fee : this.for_payamount,
        payment_status :'1',
      })
  }

  amount_inputed : any;
  amountInputed(event: any) {
    this.amount_inputed = event;
  }

  validateValue(e : any){
      var slctd = this.selectedPayment
      var ev_ = e.target.getAttribute('formControlName')
      var a =  this.paymentForm.controls[ev_].value;
      var p = this.for_payamount * .10;
      var  pa = this.for_payamount - p;
        if(a >= p ){
          this.chk_payment = false
        }else{
          this.chk_payment = true
        }

  }

  saveConfirm(value:any): void {
    console.log(value)
      this.modal.confirm({
        nzTitle: '<i>Do you Want to proceed?</i>',
        nzOnOk: () =>{
          this.isLoading = true;
        this.healthService.payedTransactions(value.main_pk_id).subscribe(res =>{
            if (res) {
              console.log(res)
                  this.Hpayment.addPayment(value).subscribe(data => {
                if (data){
                  this.loadTransRecords()
                  this.closePayment()
                  this.notification.create(
                    "success",
                    'Successfully Added',
                    'Payment for Added.'
                  );

                } else {
                  this.loadTransRecords()
                  this.isLoading =false;

                  this.notification.create(
                    "error",
                    'Unsuccessfully Added',
                    ' ',
                  );
                }
              })

            } else {
              this.loadTransRecords()
              this.isLoading =false;

              this.notification.create(
                "error",
                'Unsuccessfully Added',
                ' ',
              );
            }
          })
        }
        });
  }

  backRoute(){
    this.router.navigate([this.listURL]);
  }

  edit(data:any){
    console.log("DATA", data)
    this.router.navigate(["/main/health/healthcard-business/edit-form/" + data.pk_id+"/"+data.business_id])
  }
}

