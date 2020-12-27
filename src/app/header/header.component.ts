import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() navigateTo:EventEmitter<any>=new EventEmitter<{page:String}>();
  constructor() { }

  ngOnInit(): void {
  }

  navigate(page){
    console.log(page);
    this.navigateTo.emit({page:page});
  }
}
