import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesSetupService {
  SERVER_ADDRESS: string = environment.apiUrl

  constructor(
    private http: HttpClient
  ) { }
  
  public getListWater(): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/market/utilities-setup/water`);
  }

  public getActiveListWater(): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/market/utilities-setup/water/get_active_list`);
  }

  public getListElectricity(): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/market/utilities-setup/electricity`);
  }

  public getActiveListElectricity(): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/market/utilities-setup/electricity/get_active_list`);
  }
  
  public getPrintList(): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/market/utilities-setup/print-list`);
  }
  public getDropdown(): Observable<any> {
      return this.http.get<any[]>(`${this.SERVER_ADDRESS}/market/utilities-setup/dropdown`);
    }
    
  public getById(id: string): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/market/utilities-setup/` + id);
  }

  public insert(data: any): Observable<any> {
    return this.http.post<any>(`${this.SERVER_ADDRESS}/market/utilities-setup`, data);
    
  }
  public update(id:string, data: any): Observable<any> {
    return this.http.put<any>(`${this.SERVER_ADDRESS}/market/utilities-setup/` + id, data);
    
  }
  
  public delete(id: string, remarks:string): Observable<any> {
    return this.http.delete<any[]>(`${this.SERVER_ADDRESS}/market/utilities-setup/` + id + `?remarks=` + remarks);
  }

  public getBrgy(brgy_id: any): Observable<any> {
      return this.http.get<any[]>(`${this.SERVER_ADDRESS}/market/utilities-setup/lgu-details?brgy_id=` + brgy_id);
    }

}
