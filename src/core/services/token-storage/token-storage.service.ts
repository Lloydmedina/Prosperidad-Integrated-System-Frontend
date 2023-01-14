import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const REMEMBER_KEY = 'remember-key'

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

constructor() { }

signOut(): void {
  window.localStorage.clear();
  window.localStorage.removeItem(USER_KEY);
  window.localStorage.removeItem(TOKEN_KEY);
  const data = this.getRemember();
  if(data)
  {
    if (data.remember == false) {
      window.localStorage.removeItem(REMEMBER_KEY);
    }
  }
}

public saveToken(token: string): void {
  window.localStorage.removeItem(TOKEN_KEY);
  window.localStorage.setItem(TOKEN_KEY, token);
}

public getToken(): string {
  return JSON.parse(localStorage.getItem(TOKEN_KEY) || '{}');
}

public saveUser(user: any): void {
  window.localStorage.removeItem(USER_KEY);
  window.localStorage.setItem(USER_KEY, JSON.stringify(user));
}

public saveRemember(value: any): void {
  window.localStorage.removeItem(REMEMBER_KEY);
  window.localStorage.setItem(REMEMBER_KEY, JSON.stringify(value));
}

public getRemember(): any {
  return JSON.parse(localStorage.getItem('remember-key') || '{}');
}

public getUser(): any {
  return JSON.parse(localStorage.getItem(USER_KEY) || '{}');
}

public isLogin() : boolean {
  let user = JSON.parse(localStorage.getItem(USER_KEY) || '{}');
  if (user && user[0]) {
    if (user[0].users.expiryDate != undefined) {            
          let date = new Date().getTime();
      let expire = new Date(user[0].users.expiryDate).getTime()     
      if (date > expire) {
            window.localStorage.removeItem(USER_KEY);
            return false;
          }

          return true;
      }
  }
  
  return false;
}


// // SESSION

public saveTokenSession(token: string): void {
  window.sessionStorage.removeItem(TOKEN_KEY);
  window.sessionStorage.setItem(TOKEN_KEY, token);
}

public getTokenSession(): string {
  return JSON.parse(sessionStorage.getItem(TOKEN_KEY) || '{}');
}

public saveUserSession(user: any): void {
  window.sessionStorage.removeItem(USER_KEY);
  window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
}

// public getUserSession(): any {
//   return JSON.parse(sessionStorage.getItem(USER_KEY));
// }

}
