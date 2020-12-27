import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import {ingredient} from '../models/ingredient.model';
import {shoppingService} from '../Services/shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('name',{static:true}) name:ElementRef;
  @ViewChild('amount',{static:true}) amount:ElementRef;
  constructor(private shoppingService:shoppingService) { }

  ngOnInit(): void {
  }

  addIngredient(){
    let name=this.name.nativeElement.value;
    let amount=this.amount.nativeElement.value;
    this.shoppingService.addIngredient(new ingredient(name,amount));
    console.log(this.shoppingService);
  }

}
