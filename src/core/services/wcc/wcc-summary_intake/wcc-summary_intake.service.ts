import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WccSummary_intakeService {

  SERVER_ADDRESS : string = environment.apiUrl

  constructor(
    private http : HttpClient
  ){}
  //WCC SUMMARY INTAKE ---------------------------------
    //wcc SUMMARY INTAKE list
  public getList() : Observable<any>{
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social-welfare/wcc/wcc-summary-intake`);
  }
   //GET SUMMARY INTAKE DATA
   public getSIData(tid : any) : Observable<any>{
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social-welfare/wcc/wcc-summary-intake/get-data/`+tid);
  }

   //GET CC DATA
   public getCCData(regid : any) : Observable<any>{
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social-welfare/wcc/wcc-summary-intake/get-cc-data/`+regid);
  }

  //save new transaction
  public addNew(data: any): Observable<any> {
    return this.http.post<any>(`${this.SERVER_ADDRESS}/social-welfare/wcc/wcc-summary-intake/add-new`,data);
  }
}
