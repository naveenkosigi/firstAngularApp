import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import {recipe} from '../models/recipe.model';
import {recipeService} from '../Services/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe:recipe;
  @ViewChild('recipeName',{static:true}) recipeName;
  constructor(private recipeService:recipeService) { }

  ngOnInit(): void {
    console.log(recipe);
  }

  clickedRecipe(){
    this.recipeService.showRecipeDetails=true;
    this.recipeService.recipeSelected.next([this.recipe,true]);
  }

}
