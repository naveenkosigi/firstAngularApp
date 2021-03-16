import { authenticateService } from './../Services/auth.service';
import { httpService } from './../Services/http.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() navigateTo:EventEmitter<any>=new EventEmitter<{page:String}>();
  isLoggedIn:boolean=false;
  constructor(private httpService:httpService,private authService:authenticateService) { }

  ngOnInit(): void {
    this.authService.userTrigger.subscribe(userData => {
      this.isLoggedIn = !!userData;
    });
  }

  navigate(page){
    console.log(page);
    this.navigateTo.emit({page:page});
  }

  saveData(){
    this.httpService.storeRecipes();
  }

  getData(){
    this.httpService.getRecipes().subscribe();
  }

  logOut(){
    this.authService.logOut();
  }
}
