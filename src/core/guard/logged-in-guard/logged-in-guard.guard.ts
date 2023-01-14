import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from 'src/core/services/token-storage/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedInGuardGuard implements CanActivate {
  
  constructor(
    private tokenStorageService: TokenStorageService,
    private router: Router
  ) { }

   canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      
      //check some condition  
      if (this.tokenStorageService.getUser().length > 0)  {
        this.router.navigate(['/main'])
        return false;
      }

      return true;

    }
  
}
