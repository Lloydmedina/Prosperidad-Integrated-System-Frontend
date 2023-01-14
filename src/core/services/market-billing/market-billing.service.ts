import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MarketBillingService {
  SERVER_ADDRESS: string = environment.apiUrl

  constructor(
    private http: HttpClient
  ) { }
  

public getList(dateFrom:any, dateTo:any): Observable<any> {
  console.log(`${this.SERVER_ADDRESS}/market/market-billing?dateFrom=` + dateFrom + `&dateTo=` + dateTo)
  return this.http.get<any[]>(`${this.SERVER_ADDRESS}/market/market-billing?dateFrom=` + dateFrom + `&dateTo=` + dateTo);
}

public getProperties(): Observable<any> {
  return this.http.get<any[]>(`${this.SERVER_ADDRESS}/market/market-billing/tenant-profiles`);
}


public getUtilities(id: any): Observable<any> {
  return this.http.get<any[]>(`${this.SERVER_ADDRESS}/market/market-billing/utils?id=` + id);
}

public getPrintList(): Observable<any> {
  return this.http.get<any[]>(`${this.SERVER_ADDRESS}/market/market-billing/print-list`);
}
public getDropdown(): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/market/market-billing/dropdown`);
  }
  
public getById(id: string): Observable<any> {
  return this.http.get<any[]>(`${this.SERVER_ADDRESS}/market/market-billing/` + id);
}


public getPrintById(id: string): Observable<any> {
  return this.http.get<any[]>(`${this.SERVER_ADDRESS}/market/market-billing/print/` + id);
}


public insert(data: any): Observable<any> {
  return this.http.post<any>(`${this.SERVER_ADDRESS}/market/market-billing`, data);
  
}
public update(id:string, data: any): Observable<any> {
  return this.http.put<any>(`${this.SERVER_ADDRESS}/market/market-billing/` + id, data);
  
}


public post(id:string): Observable<any> {
  return this.http.put<any>(`${this.SERVER_ADDRESS}/market/market-billing/` + id + `/post`, null);
  
}

public delete(id: string, remarks:string): Observable<any> {
  return this.http.delete<any[]>(`${this.SERVER_ADDRESS}/market/market-billing/` + id + `?remarks=` + remarks);
}
}
