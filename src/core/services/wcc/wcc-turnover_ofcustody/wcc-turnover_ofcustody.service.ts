import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WccTurnover_ofcustodyService {
  SERVER_ADDRESS : string = environment.apiUrl

  constructor(
    private http : HttpClient
  ){}
  public getList() : Observable<any>{
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/wcc/custody-turnover`);
  }

   //save new acknowledgement
   public addNew(data: any): Observable<any> {
    return this.http.post<any>(`${this.SERVER_ADDRESS}/social_welfare/wcc/custody-turnover/add-new`,data);
  }
  //get data
  public getData(tid : any) : Observable<any>{
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/wcc/custody-turnover/get-data/`+tid);
  }

  //update data
  public updateData(id :string, data: any): Observable<any> {
    return this.http.put<any>(`${this.SERVER_ADDRESS}/social_welfare/wcc/custody-turnover/update-detail/`+id ,data);
  }
}
