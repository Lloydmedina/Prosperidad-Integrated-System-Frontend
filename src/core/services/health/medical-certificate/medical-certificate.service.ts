import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MedicalCertificateService {

  SERVER_ADDRESS : string = environment.apiUrl

  constructor(
    private http : HttpClient
  ){}
  public getMedicalCertificateList() : Observable<any>{
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/health/medical-certificate`);
  }
  public getMedicalCertificateListById(ID : any) : Observable<any>{
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/health/medical-certificate/`+ID);
  }
  public getMedicalCertificateData(ID : any) : Observable<any>{
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/health/medical-certificate/medical-certificate-form-print/`+ID);
  }
  public setHealthCardTransactionExamList(GUID : any, med_id : any) : Observable<any>{
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/health/medical-certificate/medical_trans_exam_list?g=`+ GUID +`&med=`+ med_id);
  }
  public getMed_ExamList(code : any) : Observable<any>{
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/health/medical-certificate/medical_exam_list/`+code);
  }
  public getMed_ExamDtl(dtl_id : any) : Observable<any>{
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/health/medical-certificate/get-exam-dtl/`+dtl_id);
  }
  public saveNewTransaction(data: any): Observable<any> {
    return this.http.post<any>(`${this.SERVER_ADDRESS}/health/medical-certificate/add-new-mc`,data);
  }
  public deleteTrans(guid: any): Observable<any> {
    return this.http.delete<any[]>(`${this.SERVER_ADDRESS}/health/medical-certificate/delete-details/`+ guid);
  }
  public revertTrans(guid: any): Observable<any> {
    return this.http.delete<any[]>(`${this.SERVER_ADDRESS}/health/medical-certificate/revert-details/`+ guid);
  }
  public updateDtl(id:string, data:any) : Observable<any>{
    return this.http.put<any>(`${this.SERVER_ADDRESS}/health/medical-certificate/update-detail/`+ id, data);
  }
  public updateDtlById(id:string, data:any) : Observable<any>{
    return this.http.put<any>(`${this.SERVER_ADDRESS}/health/medical-certificate/update-detail-byId/`+ id, data);
  }
  public getDtlsById(id:string) : Observable<any>{
    return this.http.get<any>(`${this.SERVER_ADDRESS}/health/medical-certificate/get-details-byId/`+ id);
  }

  //PAYMENTS ------------------
  public payedTransactions(GUID : any) : Observable<any>{
    return this.http.delete<any[]>(`${this.SERVER_ADDRESS}/health/medical-certificate/payedTransaction/` +GUID);
  }
}
