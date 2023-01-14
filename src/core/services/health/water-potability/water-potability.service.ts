import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WaterPotabilityService {

  SERVER_ADDRESS : string = environment.apiUrl

  constructor(
    private http : HttpClient
  ){}
  public getList() : Observable<any>{
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/health/water-potability`);
  }
public getBusinessData(ID : any) : Observable<any>{
  return this.http.get<any[]>(`${this.SERVER_ADDRESS}/health/water-potability/business_data/` +ID);
}
public saveNewTransaction(data: any): Observable<any> {
  return this.http.post<any>(`${this.SERVER_ADDRESS}/health/water-potability/add-new-wp`,data);
}
public getData(ID : any) : Observable<any>{
  return this.http.get<any[]>(`${this.SERVER_ADDRESS}/health/water-potability/get-list-byid/`+ID);
}
public updateTransaction(id :string, data: any): Observable<any> {
  return this.http.put<any>(`${this.SERVER_ADDRESS}/health/water-potability/update-wp/`+id ,data);
}
public deleteTrans(guid: any): Observable<any> {
  return this.http.delete<any[]>(`${this.SERVER_ADDRESS}/health/water-potability/delete-details/`+ guid);
}
public revertTrans(guid: any): Observable<any> {
  return this.http.delete<any[]>(`${this.SERVER_ADDRESS}/health/water-potability/revert-details/`+ guid);
}

 //PAYMENTS ------------------
 public payedTransactions(GUID : any) : Observable<any>{
  return this.http.delete<any[]>(`${this.SERVER_ADDRESS}/health/water-potability/payedTransaction/` +GUID);
}

}
