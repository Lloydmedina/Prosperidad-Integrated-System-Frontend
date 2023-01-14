import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn : 'root'
})
export class HealthCardService {
  SERVER_ADDRESS : string = environment.apiUrl

  constructor(
    private http : HttpClient
  ){}

  public getHealthCardList() : Observable<any>{
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/health/health-card`);
  }
  public getDentalCertificateList() : Observable<any>{
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/health/dental-certificate`);
  }
  public getGenratedGuid() : Observable<any>{
    return this.http.get<any>(`${this.SERVER_ADDRESS}/health/health-card/get-guid`);
  }
  public getTransactionData(GUID : any) : Observable<any>{
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/health/health-card/get-trans-data/` +GUID);
  }
  public getHealthCardTransactionList(GUID : any) : Observable<any>{
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/health/health-card/transactions/` +GUID);
  }
  public checkTransactionList(GUID : any) : Observable<any>{
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/health/health-card/checkTransactions/` +GUID);
  }
  public checkTransactionHistory(GUID : any) : Observable<any>{
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/health/health-card/transactionsHistory/` +GUID);
  }
  public getPersonData(GUID : any) : Observable<any>{
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/health/health-card/get-person-data/` +GUID);
  }

  public getMed_ExamList(code : any) : Observable<any>{
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/health/health-card/medical_exam_list/`+code);
  }
  public getMed_ExamDtl(dtl_id : any) : Observable<any>{
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/health/health-card/get-exam-dtl/`+dtl_id);
  }
  public setHealthCardTransactionExamList(GUID : any, med_id : any) : Observable<any>{
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/health/health-card/medical_trans_exam_list?g=`+ GUID +`&med=`+ med_id);
  }

  public getPerson(): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/admin/person`);
  }

  public getById(id : string) : Observable<any>{
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/health/health-card/`+ id);
  }


  public saveNewTransaction(data: any): Observable<any> {
    return this.http.post<any>(`${this.SERVER_ADDRESS}/health/health-card/add-new`,data);
  }
  public saveNewMedExam(data: any): Observable<any> {
    return this.http.post<any>(`${this.SERVER_ADDRESS}/health/health-card/add-new-med-exam`,data);
  }

  public updateDtl(id:string, data:any) : Observable<any>{
    return this.http.put<any>(`${this.SERVER_ADDRESS}/health/health-card/update-detail/`+ id, data);
  }
  public updateDtlById(id:string, data:any) : Observable<any>{
    return this.http.put<any>(`${this.SERVER_ADDRESS}/health/health-card/update-detail-byId/`+ id, data);
  }
  public deleteTrans(guid: any): Observable<any> {
    return this.http.delete<any[]>(`${this.SERVER_ADDRESS}/health/health-card/delete-details/`+ guid);
  }
  public revertTrans(guid: any): Observable<any> {
    return this.http.delete<any[]>(`${this.SERVER_ADDRESS}/health/health-card/revert-details/`+ guid);
  }

  //BUSINESS - HEALTH CARD --------------------
  public getHCBusinessList() : Observable<any>{
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/health/healthcard-business`);
  }
  public getBusinessData(ID : any) : Observable<any>{
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/health/healthcard-business/business_data/` +ID);
  }
  public checkTransactionListBusiness(GUID : any) : Observable<any>{
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/health/healthcard-business/checkBusiness/` +GUID);
  }
  //PAYMENTS ------------------
  public payedTransactions(GUID : any) : Observable<any>{
    return this.http.delete<any[]>(`${this.SERVER_ADDRESS}/health/health-card/payedTransaction/` +GUID);
  }
}

