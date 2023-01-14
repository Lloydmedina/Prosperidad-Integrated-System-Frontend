import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WccIncident_reportService {

  SERVER_ADDRESS : string = environment.apiUrl

  constructor(
    private http : HttpClient
  ){}
  //  WCC INCIDENT REPORT
  //LIST
  public getList() : Observable<any>{
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/wcc/wcc-incident-report`);
  }
   //CASE LIST
   public getCaseList() : Observable<any>{
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/wcc/wcc-incident-report/get-case-list`);
  }
  public getCaseData(caseid : any) : Observable<any>{
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/wcc/wcc-incident-report/get-case-byid/`+caseid);
  }
   //GET REPORT DATA
   public getReportData(tid : any) : Observable<any>{
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/wcc/wcc-incident-report/get-data/`+tid);
  }
  public getReportDataRID(rid : any) : Observable<any>{
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/wcc/wcc-incident-report/get-dataRID/`+rid);
  }
   //save new transaction
   public addNew(data: any): Observable<any> {
    return this.http.post<any>(`${this.SERVER_ADDRESS}/social_welfare/wcc/wcc-incident-report/add-new`,data);
  }

  //update data
  public updateData(id :string, data: any): Observable<any> {
    return this.http.put<any>(`${this.SERVER_ADDRESS}/social_welfare/wcc/wcc-incident-report/update-detail/`+id ,data);
  }
}
