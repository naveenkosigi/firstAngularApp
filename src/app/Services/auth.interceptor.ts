import { HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { authenticateService } from "./auth.service";
import {exhaustMap, take} from 'rxjs/operators'

@Injectable()
export class authInterceptor implements HttpInterceptor{
  constructor(private authService : authenticateService){

  }
  intercept(req:HttpRequest<any>,next:HttpHandler){
    return this.authService.userTrigger.pipe(
      take(1),
      exhaustMap(userData => {
        if(!userData){
          return next.handle(req);
        }
        const modifiedReq=req.clone({
          params:new HttpParams().set("auth",userData.token)
        });
        return next.handle(modifiedReq);
      })
    )
  }
}
