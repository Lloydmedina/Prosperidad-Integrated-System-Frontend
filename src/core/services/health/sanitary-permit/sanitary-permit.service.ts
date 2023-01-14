import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SanitaryPermitService {

  SERVER_ADDRESS : string = environment.apiUrl

  constructor(
    private http : HttpClient
  ){}
  public getList() : Observable<any>{
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/health/sanitary-permit`);
  }
  public getBusinessList() : Observable<any>{
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/health/sanitary-permit/business_list`);
  }
  public getBusinessData(id : any) : Observable<any>{
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/health/sanitary-permit/business_data/`+id);
  }
  public getData(id : any) : Observable<any>{
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/health/sanitary-permit/trans_data/`+id);
  }
  public saveNewTransaction(data: any): Observable<any> {
    return this.http.post<any>(`${this.SERVER_ADDRESS}/health/sanitary-permit/add-new-sp`,data);
  }
  public updateTransaction(id :string, data: any): Observable<any> {
    return this.http.put<any>(`${this.SERVER_ADDRESS}/health/sanitary-permit/update-sp/`+id ,data);
  }

  public deleteTrans(guid: any): Observable<any> {
    return this.http.delete<any[]>(`${this.SERVER_ADDRESS}/health/sanitary-permit/delete-details/`+ guid);
  }
  public revertTrans(guid: any): Observable<any> {
    return this.http.delete<any[]>(`${this.SERVER_ADDRESS}/health/sanitary-permit/revert-details/`+ guid);
  }

   //PAYMENTS ------------------
   public payedTransactions(GUID : any) : Observable<any>{
    return this.http.delete<any[]>(`${this.SERVER_ADDRESS}/health/sanitary-permit/payedTransaction/` +GUID);
  }

  //get inspector ------------
  public getInspectorList() : Observable<any>{
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/health/sanitary-permit/inspector_list`);
  }
  public getInspectorData(id : any) : Observable<any>{
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/health/sanitary-permit/inspector_data/`+id);
  }
}
