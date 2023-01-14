import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExhumationPermitService {

  SERVER_ADDRESS : string = environment.apiUrl

  constructor(
    private http : HttpClient
  ){}

  public getList() : Observable<any>{
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/health/exhumation-permit`);
  }
  public getPerson(data: any): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/health/exhumation-permit/get-person-data/`+data);
  }

  public saveNewTransaction(data: any): Observable<any> {
    return this.http.post<any>(`${this.SERVER_ADDRESS}/health/exhumation-permit/add-new-exp`,data);
  }
  public getData(ID : any) : Observable<any>{
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/health/exhumation-permit/get-list-byid/`+ID);
  }
  public updateTransaction(id :string, data: any): Observable<any> {
    return this.http.put<any>(`${this.SERVER_ADDRESS}/health/exhumation-permit/update-exp/`+id ,data);
  }

  public deleteTrans(guid: any): Observable<any> {
    return this.http.delete<any[]>(`${this.SERVER_ADDRESS}/health/exhumation-permit/delete-details/`+ guid);
  }
  public revertTrans(guid: any): Observable<any> {
    return this.http.delete<any[]>(`${this.SERVER_ADDRESS}/health/exhumation-permit/revert-details/`+ guid);
  }

   //PAYMENTS ------------------
   public payedTransactions(GUID : any) : Observable<any>{
    return this.http.delete<any[]>(`${this.SERVER_ADDRESS}/health/exhumation-permit/payedTransaction/` +GUID);
  }
}

