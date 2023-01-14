import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/core/services/auth/auth.service';
import { TokenStorageService } from 'src/core/services/token-storage/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(
    private tokenStorageService: TokenStorageService,
    private router: Router
  ) { }

   canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      
      //check some condition  
      if (this.tokenStorageService.getUser().length === undefined)  {
        this.router.navigate(['/login'])
        return false;
      }

      return true;

    }
  
}
