import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DentalCertificateService {
  SERVER_ADDRESS : string = environment.apiUrl

  constructor(
    private http : HttpClient
  ){}
  public getDentalCertificateList() : Observable<any>{
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/health/dental-certificate`);
  }
  public getDentalCertificateListById(ID : any) : Observable<any>{
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/health/dental-certificate/`+ID);
  }
  public getDentalCertificateData(ID : any) : Observable<any>{
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/health/dental-certificate/dental-certificate-form-print/`+ID);
  }
  public setHealthCardTransactionExamList(GUID : any, med_id : any) : Observable<any>{
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/health/dental-certificate/dental_trans_exam_list?g=`+ GUID +`&med=`+ med_id);
  }
  public getDental_ExamList(code : any) : Observable<any>{
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/health/dental-certificate/dental_exam_list/`+code);
  }
  public getDental_ExamDtl(dtl_id : any) : Observable<any>{
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/health/dental-certificate/get-exam-dtl/`+dtl_id);
  }
  public getDataDtl(dtl_id : any) : Observable<any>{
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/health/dental-certificate/get-exam-dtlById/`+dtl_id);
  }
  public saveNewTransaction(data: any): Observable<any> {
    return this.http.post<any>(`${this.SERVER_ADDRESS}/health/dental-certificate/add-new-dc`,data);
  }
  public updateTransaction(id :string, data: any): Observable<any> {
    return this.http.put<any>(`${this.SERVER_ADDRESS}/health/dental-certificate/update-dc/`+id ,data);
  }

  public updateDtlById(id:string, data:any) : Observable<any>{
    return this.http.put<any>(`${this.SERVER_ADDRESS}/health/dental-certificate/update-detail-byId/`+ id, data);
  }

  public deleteTrans(guid: any): Observable<any> {
    return this.http.delete<any[]>(`${this.SERVER_ADDRESS}/health/dental-certificate/delete-details/`+ guid);
  }
  public revertTrans(guid: any): Observable<any> {
    return this.http.delete<any[]>(`${this.SERVER_ADDRESS}/health/dental-certificate/revert-details/`+ guid);
  }

   //PAYMENTS ------------------
   public payedTransactions(GUID : any) : Observable<any>{
    return this.http.delete<any[]>(`${this.SERVER_ADDRESS}/health/dental-certificate/payedTransaction/` +GUID);
  }
}
