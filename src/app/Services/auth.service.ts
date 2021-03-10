import { tap } from 'rxjs/operators';
import { user } from './../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable, Subject } from 'rxjs';

interface responseData{
    "idToken": string,
    "email": string,
    "refreshToken": string,
    "expiresIn": string,
    "localId": string
}

@Injectable({providedIn:'root'})
export class authenticateService{
  userTrigger = new Subject<user>();
  constructor(private http:HttpClient){

  }

  signUp(data : Object) : Observable<any>{
    return this.http.post<responseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBbW9wWOh0zG9Axt5VALU6kz-TnBdJkJLo',
      {
        ...data,
        returnSecureToken:true
      }
    )
    .pipe(
      tap(data => {
        let expDate=new Date(new Date().getTime() + +data.expiredsIn * 1000);
        let userData=new user(data.email,data.localId,data.idToken,expDate);
        this.userTrigger.next(userData);
      })
    );
  }

  logIn(data:Object) : Observable<any>{
    return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBbW9wWOh0zG9Axt5VALU6kz-TnBdJkJLo',
    {
      ...data,
      returnSecureToken:true
    }
    )
    .pipe(
      tap(data => {
        let expDate=new Date(new Date().getTime() + +data.expiredsIn * 1000);
        let userData=new user(data.email,data.localId,data.idToken,expDate);
        this.userTrigger.next(userData);
      })
    );
  }
}
