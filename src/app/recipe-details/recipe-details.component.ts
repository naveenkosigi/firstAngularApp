import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ingredient } from '../models/ingredient.model';
import {recipe} from '../models/recipe.model';
import {recipeService} from '../Services/recipe.service';
import {shoppingService} from '../Services/shopping.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit,OnDestroy {
  recipe:recipe;
  showRecipe:boolean=false;
  sub:any;
  constructor(private recipeService:recipeService,private shoppingService:shoppingService,public activatedRoute:ActivatedRoute,private router:Router){
  }

  ngOnInit(): void {
    /*
    this.recipeService.recipeSelected.subscribe((details:any[]) => {
      this.recipe=details[0];
      this.showRecipe=details[1];
    })
    */
    this.sub=this.activatedRoute.params.subscribe((params) => {
      let id=params["id"];
      this.recipe=this.recipeService.getRecipes().find((ele) => {
        return ele.id === Number(id)?ele:undefined; 
      });
      if(!this.recipe){
        this.router.navigate(['../'],{relativeTo:this.activatedRoute});
      }
    })
  }

  addToShoppingList():void{
    this.recipe.ingredients.forEach(ingredient => {
      this.shoppingService.addIngredient(ingredient);
    });
    this.shoppingService.updateIngredients.next(true);
  }

  ngOnDestroy():void{
    console.log("destroy");
    this.sub.unsubscribe();
  }
}
