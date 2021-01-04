import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ingredient} from '../models/ingredient.model';
import {shoppingService} from '../Services/shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  editMode:boolean=false;
  editedIndex:number=-1;
  @ViewChild('f',{static:false}) form:NgForm;

  constructor(private shoppingService:shoppingService) { }

  ngOnInit(): void {
    this.shoppingService.editIngredient.subscribe((index:number) => {
      this.editMode=true;
      let ingredient=this.shoppingService.getIngredientByIndex(index);
      this.form.setValue({
        name:ingredient.name,
        amount:ingredient.cost
      });
      this.editedIndex=index;
    });
  }

  addIngredient(form:NgForm){

    if(this.editMode){
      this.shoppingService.updateIngredientByIndex(this.editedIndex,new ingredient(form.value.name,form.value.amount));
      this.shoppingService.updateIngredients.next(true);
    }
    else{
      this.shoppingService.addIngredient(new ingredient(form.value.name,form.value.amount));
      console.log(this.shoppingService);
    }
    this.editMode=false;
    this.editedIndex=-1;
    this.form.reset();
  }

  deleteIngredient(){
    if(this.form.valid && this.editMode){
      this.shoppingService.deleteIngredientByIndex(this.editedIndex);
    }
  }

}
