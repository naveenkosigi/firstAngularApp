import { Component, OnInit } from '@angular/core';
import {ingredient} from '../models/ingredient.model';
import { shoppingService } from '../Services/shopping.service';
import {ActivatedRoute, Params} from '@angular/router';
import { alertPrompt } from '../canDeactivate';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit,alertPrompt {
  ingredients : ingredient[]=[];

  constructor(private shoppingService:shoppingService,private route:ActivatedRoute) {
    this.ingredients=shoppingService.getIngredients();
  }

  ngOnInit(): void {
    this.shoppingService.updateIngredients.subscribe((bool:boolean) => {
      this.ingredients=this.shoppingService.getIngredients();
    })

    /*
    this.route.queryParams.subscribe((params:Params) => {
      console.log(params);
      if(params.ingredients && params.cost){
        let item=params["ingredients"];
        let cost=params["cost"];
        this.shoppingService.addIngredient(new ingredient(item,cost,this.shoppingService.getIngredients.length-1));
      }

    })*/

  }

  addIngredient(ingredient){
    this.ingredients.push(ingredient);
  }

  canDeactivate():boolean{
    return confirm("Are you sure few items may be discarded");
  }

  editItem(i:number){
    this.shoppingService.editIngredient.next(i);
  }

}
