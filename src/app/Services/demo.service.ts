import { Injectable } from '@angular/core';

@Injectable({
    providedIn:'root'
})

export class demoService{
    currentUser:String;
    constructor(){
        this.currentUser="Naveen";
    }

    showUser(){
        console.log(this.currentUser);
    }
}
