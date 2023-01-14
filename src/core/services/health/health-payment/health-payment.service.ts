import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HealthPaymentService {
  SERVER_ADDRESS : string = environment.apiUrl

  constructor(
    private http : HttpClient
  ){}

public addPayment(data : any) : Observable<any>{
  return this.http.post<any>(`${this.SERVER_ADDRESS}/health/health-payment/add-payment`,data);
}

}

