import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SlaughteringService {

  SERVER_ADDRESS: string = environment.apiUrl

  constructor(
    private http: HttpClient
  ) { }
  
  public getList(): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/slaughterhouse/slaughtering`);
  }
  public getPrint(month: any): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/slaughterhouse/slaughtering/print?month=` + month);
  }
  

  public getPrintById(id: any): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/slaughterhouse/slaughtering/print` + id);
  }
  
  public getDropdown(): Observable<any> {
      return this.http.get<any[]>(`${this.SERVER_ADDRESS}/slaughterhouse/slaughtering/dropdown`);
    }
    
  public getById(id: string): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/slaughterhouse/slaughtering/` + id);
  }

  public insert(data: any): Observable<any> {
    return this.http.post<any>(`${this.SERVER_ADDRESS}/slaughterhouse/slaughtering`, data);
  }

  public update(id:string, data: any): Observable<any> {
    return this.http.put<any>(`${this.SERVER_ADDRESS}/slaughterhouse/slaughtering/` + id, data);
  }
  
  public delete(id: string): Observable<any> {
    return this.http.delete<any[]>(`${this.SERVER_ADDRESS}/slaughterhouse/slaughtering/` + id);
  }



}
