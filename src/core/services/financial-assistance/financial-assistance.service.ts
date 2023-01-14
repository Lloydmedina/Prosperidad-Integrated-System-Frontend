import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FinancialAssistanceService {

  SERVER_ADDRESS: string = environment.apiUrl
    
  constructor(private http: HttpClient) { }
  
  public getFinancialAssistance(filter_type_status_id: number, rec_id: any, this_month?: any, this_year?: any, monthly?: any, monthlyYear?: any, year_quarterly?: string, quarter?: number, yearly?: any, from?: any, to?: any): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/financial_assistance?filter_type_status_id=`+ filter_type_status_id + "&rec_id=" + rec_id + "&this_month=" + this_month + "&this_year=" + this_year + "&monthly=" + monthly + "&year_quarterly=" + year_quarterly + "&quarter=" + quarter + "&yearly=" + yearly + "&from=" + from + "&to=" + to );
  }

  public getFinancialAssistanceFormSettings() {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/financial_assistance/get_form_settings`);
  }


}
