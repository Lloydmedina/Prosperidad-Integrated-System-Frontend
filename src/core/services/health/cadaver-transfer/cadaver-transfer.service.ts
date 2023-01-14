import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CadaverTransferService {

  SERVER_ADDRESS : string = environment.apiUrl

  constructor(
    private http : HttpClient
  ){}

  public getList() : Observable<any>{
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/health/cadaver-transfer`);
  }
  public getPerson(data: any): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/health/cadaver-transfer/get-person-data/`+data);
  }

  public saveNewTransaction(data: any): Observable<any> {
    return this.http.post<any>(`${this.SERVER_ADDRESS}/health/cadaver-transfer/add-new-ctp`,data);
  }
  public getData(ID : any) : Observable<any>{
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/health/cadaver-transfer/get-list-byid/`+ID);
  }
  public updateTransaction(id :string, data: any): Observable<any> {
    return this.http.put<any>(`${this.SERVER_ADDRESS}/health/cadaver-transfer/update-ctp/`+id ,data);
  }

  public deleteTrans(guid: any): Observable<any> {
    return this.http.delete<any[]>(`${this.SERVER_ADDRESS}/health/cadaver-transfer/delete-details/`+ guid);
  }
  public revertTrans(guid: any): Observable<any> {
    return this.http.delete<any[]>(`${this.SERVER_ADDRESS}/health/cadaver-transfer/revert-details/`+ guid);
  }

   //PAYMENTS ------------------
   public payedTransactions(GUID : any) : Observable<any>{
    return this.http.delete<any[]>(`${this.SERVER_ADDRESS}/health/cadaver-transfer/payedTransaction/` +GUID);
  }
}
