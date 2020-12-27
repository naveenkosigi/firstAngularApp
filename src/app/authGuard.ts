import { Injectable } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { authService } from './authService';

@Injectable()
export class authGuard implements CanActivate{
    constructor(private authService:authService,private route:Router){

    }

    canActivate(route:ActivatedRouteSnapshot,snapShot:RouterStateSnapshot):Observable<boolean>|Promise<boolean>|boolean{
        return this.authService.isAuthenticated()
                .then((allowed:boolean) => {
                    if(allowed){
                        return true;
                    }
                    this.route.navigate(['/']);
                })
    }
}