import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class DelinquentService {
    SERVER_ADDRESS: string = environment.apiUrl

    constructor(private http: HttpClient) { }
  
    public getList(): Observable<any> {
      return this.http.get<any[]>(`${this.SERVER_ADDRESS}/market/delinquent/`);
    }
    public getRecord(id:any): Observable<any> {
        return this.http.get<any[]>(`${this.SERVER_ADDRESS}/market/delinquent/` + id);
      }
  
  
    public saveRecord(data:any): Observable<any> {
        return this.http.post<any[]>(`${this.SERVER_ADDRESS}/market/delinquent`, data);
      }

      public generate(date:any): Observable<any> {
        return this.http.get<any[]>(`${this.SERVER_ADDRESS}/market/delinquent/generate?date=` + date,);
      }

}
