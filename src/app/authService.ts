import { Injectable } from '@angular/core';
@Injectable()
export class authService{
    loggedIn:boolean;
    
    constructor(){
        this.loggedIn=true;
    }

    isAuthenticated(){
        const promise=new Promise((res,rej) => {
            setTimeout(() => {
                res(this.loggedIn);
            },1000)
        })
        return promise;
    }

    logIn(){
        this.loggedIn=true;
    }

    logOut(){
        this.loggedIn=false;
    }

}