import { authenticateService } from './../Services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css']
})
export class AuthenticateComponent implements OnInit {
  isLoading:Boolean;
  constructor(private authService:authenticateService) { }

  ngOnInit(): void {
    this.isLoading=false;
  }

  authAction(authForm:NgForm){
    this.isLoading=true;
    this.authService.signUp(authForm.value).subscribe(
      response => {
        console.log(response);
      },
      err => {
        console.log(err);
        authForm.reset();
        this.isLoading=false;
      },
      () => {
        console.log("done");
        authForm.reset();
        this.isLoading=false;
      }
    );
  }
}
