import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { DentalCertificateService } from 'src/core/services/health/dental-certificate/dental-certificate.service';
import { HealthCardService } from 'src/core/services/health/health-card/health-card.service';
import { HealthPaymentService } from 'src/core/services/health/health-payment/health-payment.service';
import { PathsegmentService } from 'src/core/services/pathsegment/pathsegment.service';
import { PersonService } from 'src/core/services/person/person.service';
import { TokenStorageService } from 'src/core/services/token-storage/token-storage.service';
import { environment } from 'src/environments/environment';
import { differenceInCalendarDays, setHours } from 'date-fns';
import { MedicalAbstractService } from 'src/core/services/health/medical-abstract/medical-abstract.service';


@Component({
  selector: 'app-clinical-abstract-list',
  templateUrl: './clinical-abstract-list.component.html',
  styleUrls: ['./clinical-abstract-list.component.scss']
})
export class ClinicalAbstractListComponent implements OnInit {
  listURL = "/main/health/medical-abstract"
  addURL = "/main/health/medical-abstract/add-form"
  newURL = "/main/health/dmedical-abstract/add-form/"
  printListURL = "/main/health/medical-abstract/medical-abstract-list-print"
  form_code = 'dc';
  startDateValue: Date | null = null;
  endDateValue = Date.now()+1;
  today = Date.now() ;
  txt_amount:any;
  selectedValue = null;
  basepath = "medical-abstract-form-print";
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
  listHpiData : any [] = [];
  listPeData : any [] = [];
  listDxData : any [] = [];
  listMedsData : any [] = [];
  searchData : any
  data_transs : any [] = [];
  paymentArr : any [] = [];

  SERVER_ADDRESS: string = environment.apiUrl;

  onExpandChange(p_id:any, id: number, checked: boolean , index : any): void {

    if (checked) {
      this.expandSet.add(index);
      //this.loadTransactionDetails(p_id,id,index);
      console.log(id)
    } else {
      this.expandSet.delete(index);
    }

  }

  showExamRes(checked: boolean, en : any) : void{
    if (checked) {
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
    private MedicalAbstractServices : MedicalAbstractService,
    private Hpayment : HealthPaymentService
  ) { }

  ngOnInit() {

    this.basepath_arr = this.pathservice.getPath();
    this.loadTransRecords()
    this.validateForm = this.fb.group({
      // MEDICAL TRANSACTIONS ------------------
        med_exam_id: [' ', [Validators.required]],
        examiner_name : [' ', [Validators.required]],
        examination_date : [null,  [Validators.required]],
        examination_address : [' ', [Validators.required]],
        examination_finding : [' ', [Validators.required]],
        examination_cause : [' ', [Validators.required]],
        status : [' ']
      })
      var sample = new DatePipe('en-Us').transform(this.today, 'yyyy-MM-dd', 'GMT+0800');
      this.paymentForm = this.fb.group({
        main_pk_id:[''],
        or_id : [null,[Validators.required]],
        or_date : [null,[Validators.required]],
        payment_status :' ',
        payment_type : ' ',
        amount_paid : ['',[Validators.min(10)]],
        total_fee:'',
      })

      // GET MEDICAL EXAMINATION TITTLES
      this.MedicalAbstractServices.getMedTypes().subscribe(data =>{
       this.listOfMedExam = data
    })

     // LIST OF SIDENAV FROM CURRENT USER
     var arrayItems = JSON.parse(localStorage.getItem('auth-user') || '{}');
     // console.log(arrayItems[4], this.addURL)
     var aa = arrayItems[4].routes.filter((x:any) => x == this.addURL)
     // console.log(aa)
     if (aa.length > 0) {
       this.show1 = false;
     } else {
       this.show1 = true;
     }


    var nav_e = document.getElementById("sub_button1");
  }

  showPayment(per_id : any, fee : any){
    this.paymentDrawer = true;
    this.for_paymentId = per_id;
    this.for_payamount = fee;
    console.log(this.for_payamount)
  }
  loadTransRecords(){
    this.MedicalAbstractServices.getMedAbstractList().subscribe( data =>{
      this.listOfData = data[0];
       this.isLoading = false;
       this.listHpiData = this.listOfData.map((hpi : any) => hpi.ma_hpi_data)
       this.listPeData = this.listOfData.map((pe : any) => pe.ma_pe_data)
       this.listDxData = this.listOfData.map((dx : any) => dx.ma_dx_data)
       this.listMedsData = this.listOfData.map((meds : any) => meds.ma_meds_data)
      console.log("this-->",data)
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
   //console.log(this.chk_arr)

 }

 showConfirm(dataid : any,
  applicantfname : any,
  applicantmname : any,
  applicantlname : any,
): void {
this.modal.confirm({
nzTitle: '<i>Do you Want to proceed?</i>',
nzContent: "<b>Applicant's Name: "+applicantlname+", "+ applicantfname+" "+ applicantmname+"</b>",
nzOnOk: () =>{
console.log(dataid);
this.proccedToPrintCard(dataid);
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
        this.MedicalAbstractServices.deleteTrans(data.ma_pk_id).subscribe( async x =>{
          console.log(x)
          this.loadTransRecords()
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

  closePayment(){
    this.clearFeilds();
    this.paymentDrawer = false;

  }
  openDrawer( dtl_id : any): void {
    this.modal.confirm({
      nzTitle: 'Do you Want to update these record?',
      nzOnOk: () => {

        this.healthService.getMed_ExamDtl(dtl_id).subscribe(async data => {
          this.validateForm.patchValue({
            med_exam_id: data[0].lab_exam_id.toString(),
            examiner_name : data[0].examiner_name,
            examination_date : data[0].lab_exam_date,
            examination_address : data[0].lab_exam_place,
            examination_finding : data[0].lab_exam_result,
            examination_cause : data[0].lab_exam_cause,
            status: data[0].status
          });
          console.log(data)
        },
              async error => {
                await this.notification.create(
                  "error",
                  'Unsuccessfully Saved',
                  'Domain Record has not been deleted.'
           );
         });
         this.drawerVisible = true
      }
    });
  }


  open(): void {
    this.drawerVisible = true;
  }

  close(): void {
    this.drawerVisible = false;
  }


  //FILTER MODULE

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
              // this.personService.getPerson().subscribe(async data => {
              //   this.isLoading = false
              //   this.listOfData = data;
              //   if (this.listOfData) {
              //     this.notification.create(
              //       "success",
              //       'Successfully Activated',
              //       'Person Record has successfully activated.'
              //     );
              //   } else {
              //     this.notification.create(
              //       "error",
              //       'Unsuccessfully Activated',
              //       'Person Record unsuccessfully activated.'
              //     );
              //   }
              // })
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
        amount_paid : this.for_payamount,
        payment_type :'full payment' ,
        total_fee : this.for_payamount,
        payment_status :'1',
      })
  }

  amount_inputed : any;
  amountInputed(event: any) {
    this.amount_inputed = event;
    console.log(event)
  }

  validateValue(e : any){
      var slctd = this.selectedPayment
      var ev_ = e.target.getAttribute('formControlName')
      var a =  this.paymentForm.controls[ev_].value;
      var p = this.for_payamount * .10;
      var  pa = 1;
      console.log(p)
        if(a >= p ){
          this.chk_payment = false
        }else{
          this.chk_payment = true
        }

  }

  saveConfirm(value:any): void {
    this.modal.confirm({
      nzTitle: '<i>Do you Want to proceed?</i>',
      nzOnOk: () =>{
        this.isLoading = true;
      // this.MedicalAbstractServices.payedTransactions(value.main_pk_id).subscribe(res =>{
      //     if (res) {
            //console.log(res)
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

        //   } else {
        //     this.loadTransRecords()
        //     this.isLoading =false;

        //     this.notification.create(
        //       "error",
        //       'Unsuccessfully Added',
        //       ' ',
        //     );
        //   }
        // })
      }
      });
  }

  clearFeilds(){
    this.paymentForm.patchValue({
      main_pk_id : null,
      amount_paid : null,
      payment_type :null ,
      total_fee : null,
      payment_status :null,
    })
  }
  backRoute(){
    this.router.navigate([this.listURL]);
  }

  edit(data:any){

    this.router.navigate(["/main/health/medical-abstract/edit-form/" + data.ma_person_id+"/"+data.ma_pk_id])
  }
}

