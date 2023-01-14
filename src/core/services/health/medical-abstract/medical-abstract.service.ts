import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MedicalAbstractService {

  SERVER_ADDRESS : string = environment.apiUrl

  constructor(
    private http : HttpClient
  ){}

  public saveNewTransaction(data: any): Observable<any> {
    return this.http.post<any>(`${this.SERVER_ADDRESS}/health/medical-abstract/add-new-ma`,data);
  }
  public getMedAbstractList() : Observable<any>{
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/health/medical-abstract`);
  }

  public getMedAbstractData( id : any) : Observable<any>{
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/health/medical-abstract/`+id);
  }

  public getSignatory() : Observable<any>{
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/health/medical-abstract/signatory`);
  }
  public getMedTypes() : Observable<any>{
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/health/medical-abstract/medicine-type`);
  }
  public updateTransaction(id :string, data: any): Observable<any> {

    console.log(data)
    return this.http.put<any>(`${this.SERVER_ADDRESS}/health/medical-abstract/update-ma/`+id , data);
  }

  public deleteTrans(guid: any): Observable<any> {
    return this.http.delete<any[]>(`${this.SERVER_ADDRESS}/health/medical-abstract/delete-details/`+ guid);
  }
  public revertTrans(guid: any): Observable<any> {
    return this.http.delete<any[]>(`${this.SERVER_ADDRESS}/health/medical-abstract/revert-details/`+ guid);
  }

   //PAYMENTS ------------------
   public payedTransactions(GUID : any) : Observable<any>{
    return this.http.delete<any[]>(`${this.SERVER_ADDRESS}/health/medical-abstract/payedTransaction/` +GUID);
  }
}
