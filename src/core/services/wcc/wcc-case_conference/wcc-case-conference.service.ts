import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WccCaseConferenceService {

  SERVER_ADDRESS : string = environment.apiUrl

  constructor(
    private http : HttpClient
  ){}
  //  WCC INCIDENT REPORT
  //LIST
  public getList() : Observable<any>{
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/wcc/wcc-case-conference`);
  }
   //GET REPORT DATA
   public getReportData(tid : any) : Observable<any>{
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/wcc/wcc-case-conference/get-irdata/`+tid);
  }
   //GET case conference DATA
   public getCCData(tid : any) : Observable<any>{
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/wcc/wcc-case-conference/get-data/`+tid);
  }

   //GET case details
   public getCCDtls(ccid : any) : Observable<any>{
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/wcc/wcc-case-conference/get-case-dtl/`+ccid);
  }
   //save new transaction
   public addNew(data: any): Observable<any> {
    return this.http.post<any>(`${this.SERVER_ADDRESS}/social_welfare/wcc/wcc-case-conference/add-new`,data);
  }
 //update data
 public updateData(id :string, data: any): Observable<any> {
  return this.http.put<any>(`${this.SERVER_ADDRESS}/social_welfare/wcc/wcc-case-conference/update-detail/`+id ,data);
}

}
