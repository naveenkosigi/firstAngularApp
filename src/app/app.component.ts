import { Component, OnInit } from '@angular/core';
import { authenticateService } from './Services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'recipeApp';
  currentPage="recipes";

  constructor(private authService:authenticateService){

  }

  ngOnInit(){
    this.authService.autoLogin();
  }

  setPage(page){
    console.log("clicked",page);
    this.currentPage=page.page;
  }
/*
  authenticate(){
    if(this.authService.loggedIn){
      this.authService.logOut();
      return;
    }
    this.authService.logIn();
  }
  */
}
