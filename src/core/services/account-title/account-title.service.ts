import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountTitleService {

  SERVER_ADDRESS: string = environment.apiUrl

  constructor(
    private http: HttpClient
  ) { }
  
  public getList(): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/accounting/account-title`);
  }

  public getHistory(id:any): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/accounting/account-title/history?ID=` + id);
  }
  
  public getById(id: string): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/accounting/account-title/` + id);
  }
  
  public getParent(): Observable<any>{
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/accounting/account-title/dropdown`);
  }
   
  public generateAccountCode(id:any): Observable<any>{
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/accounting/account-title/generate-code?parent_id=` + id);
  }
  
  
  public insert(data: any): Observable<any> {
    return this.http.post<any>(`${this.SERVER_ADDRESS}/accounting/account-title`, data);
    
  }
  public update(id:string, data: any): Observable<any> {
    return this.http.put<any>(`${this.SERVER_ADDRESS}/accounting/account-title/` + id, data);
    
  }
  
  public delete(id: string): Observable<any> {
    return this.http.delete<any[]>(`${this.SERVER_ADDRESS}/accounting/account-title/` + id);
  }

}
