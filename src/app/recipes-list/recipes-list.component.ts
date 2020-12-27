import { Component, OnInit } from '@angular/core';
import {recipe} from '../models/recipe.model';
import {recipeService} from '../Services/recipe.service';
import { shoppingService } from '../Services/shopping.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
  providers:[recipeService]

})
export class RecipesListComponent implements OnInit {

  recipes:recipe[]=[];
  showRecipe:boolean=false;
  constructor(private recipeService:recipeService) {
    //console.log(recipeService);
    this.recipes=this.recipeService.getRecipes();
  }

  ngOnInit(){
    console.log(this.recipes);
  }

}
