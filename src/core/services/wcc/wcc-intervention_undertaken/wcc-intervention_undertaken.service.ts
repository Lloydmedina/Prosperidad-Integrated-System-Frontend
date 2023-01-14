import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WccIntervention_undertakenService {
  SERVER_ADDRESS : string = environment.apiUrl
  constructor(
    private http : HttpClient
  ){}
//get list
  public getList() : Observable<any>{
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/wcc/wcc-intervention-undertaken`);
  }
  public getIUSetupList() : Observable<any>{
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/wcc/wcc-intervention-undertaken/get-IUlist`);
  }
  //save transaction
  public saveNewTransaction(data: any): Observable<any> {
    return this.http.post<any>(`${this.SERVER_ADDRESS}/social_welfare/wcc/wcc-intervention-undertaken/add-new`,data);
  }
   //get data
   public getData(tid : any) : Observable<any>{
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/wcc/wcc-intervention-undertaken/get-data/`+tid);
  }
}
