import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenStorageService } from '../token-storage/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  SERVER_ADDRESS: string = environment.apiUrl

  constructor(
    private http: HttpClient,
    private tokenStorageService: TokenStorageService,
  ) { }

  public signIn(value: any): Observable<any> {
    console.log(this.SERVER_ADDRESS)
    return this.http.post<any>(`${this.SERVER_ADDRESS}/login`, value)
    .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse){
    return throwError(error);
  }

  public async logout() {

    this.tokenStorageService.signOut();
  }

}
