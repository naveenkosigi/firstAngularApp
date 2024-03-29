import { tap } from 'rxjs/operators';
import { user } from './../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';

interface responseData{
    "idToken": string,
    "email": string,
    "refreshToken": string,
    "expiresIn": string,
    "localId": string
}

@Injectable({providedIn:'root'})
export class authenticateService{
  userTrigger = new BehaviorSubject<user>(null);
  constructor(private http:HttpClient,private router:Router){

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
        let expDate=new Date(new Date().getTime() + +data.expiresIn * 1000);
        let userData=new user(data.email,data.localId,data.idToken,expDate);
        this.userTrigger.next(userData);
        localStorage.setItem('auth',JSON.stringify(userData));
      })
    );
  }

  logOut(){
    this.userTrigger.next(null);
    this.router.navigateByUrl("/authenticate");
  }

  autoLogin(){
    const savedAuth=localStorage.getItem('auth');
    if(savedAuth){
      let userData=JSON.parse(savedAuth);
      userData=new user(userData.email,userData.id,userData._token,new Date(userData.tokenExp));
      if(userData.token){
        this.userTrigger.next(userData);
      }
    }
  }
}
