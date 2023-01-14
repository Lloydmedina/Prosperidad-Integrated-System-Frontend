import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReceivingService {
  
  SERVER_ADDRESS: string = environment.apiUrl

  constructor(
    private http: HttpClient
  ) { }
  
  public getList(status_id: any): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/slaughterhouse/receiving`);
  }

  public getRecList(): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/slaughterhouse/receiving/list`);
  }
  
  public getPrintById(id: any): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/slaughterhouse/receiving/print/` + id);
  }
  
  public getDropdown(): Observable<any> {
      return this.http.get<any[]>(`${this.SERVER_ADDRESS}/slaughterhouse/receiving/dropdown`);
    }
    
  public getById(id: string): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/slaughterhouse/receiving/` + id);
  }

  public insert(data: any): Observable<any> {
    return this.http.post<any>(`${this.SERVER_ADDRESS}/slaughterhouse/receiving`, data);
  }

  public inspect(data: any): Observable<any> {
    return this.http.post<any>(`${this.SERVER_ADDRESS}/slaughterhouse/receiving/inspect`, data);
  }


  public update(id:string, data: any): Observable<any> {
    return this.http.put<any>(`${this.SERVER_ADDRESS}/slaughterhouse/receiving/` + id, data);
  }
  
  public delete(id: string): Observable<any> {
    return this.http.delete<any[]>(`${this.SERVER_ADDRESS}/slaughterhouse/receiving/` + id);
  }



}
