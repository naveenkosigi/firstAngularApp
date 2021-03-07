import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

interface responseData{
    "idToken": string,
    "email": string,
    "refreshToken": string,
    "expiresIn": string,
    "localId": string
}

@Injectable({providedIn:'root'})
export class authenticateService{

  constructor(private http:HttpClient){

  }

  signUp(data : Object) : Observable<any>{
    return this.http.post<responseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBbW9wWOh0zG9Axt5VALU6kz-TnBdJkJLo',
      {
        ...data,
        returnSecureToken:true
      }
    );
  }

  logIn(data:Object) : Observable<any>{
    return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBbW9wWOh0zG9Axt5VALU6kz-TnBdJkJLo',
    {
      ...data,
      returnSecureToken:true
    });
  }
}
