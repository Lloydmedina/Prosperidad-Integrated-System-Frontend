import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WccDischargeService {

  SERVER_ADDRESS : string = environment.apiUrl

  constructor(
    private http : HttpClient
  ){}
  public getList() : Observable<any>{
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/wcc/wcc-discharge`);
  }
   //save new transaction
   public addNew(data: any): Observable<any> {
    return this.http.post<any>(`${this.SERVER_ADDRESS}/social_welfare/wcc/wcc-discharge/add-new`,data);
  }
  //get data
  public getData(tid : any) : Observable<any>{
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/wcc/wcc-discharge/get-data/`+tid);
  }

  //update data
  public updateData(id :string, data: any): Observable<any> {
    return this.http.put<any>(`${this.SERVER_ADDRESS}/social_welfare/wcc/wcc-discharge/update-detail/`+id ,data);
  }

}
