import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ElectedOfficialsService {


  SERVER_ADDRESS: string = environment.apiUrl

  constructor(
    private http: HttpClient
  ) { }

  public getList(): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/admin/elected-officials`);
  }


  public getById(id: string): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/admin/elected-officials/` + id);
  }

  public getPrint(id: string): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/admin/elected-officials/print/` + id);
  }

  public getEmployees(): Observable<any>{
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/admin/elected-officials/employees`)
  }
  
  public insert(data: any): Observable<any> {
    return this.http.post<any>(`${this.SERVER_ADDRESS}/admin/elected-officials`, data);
    
  }
  public update(id:string, data: any): Observable<any> {
    return this.http.put<any>(`${this.SERVER_ADDRESS}/admin/elected-officials/` + id, data);
    
  }
  
  public delete(id: string): Observable<any> {
    return this.http.delete<any[]>(`${this.SERVER_ADDRESS}/admin/elected-officials/` + id);
  }

}
