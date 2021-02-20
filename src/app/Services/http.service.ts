import { recipe } from './../models/recipe.model';
import { recipeService } from './recipe.service';
import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http"
import {map,tap} from 'rxjs/operators';

@Injectable({providedIn:'root'})
export class httpService{
  url='https://recipe-project-5b3ad-default-rtdb.firebaseio.com/recipes.json';
  constructor(private httpClient:HttpClient,private recipeService:recipeService){

  }

  storeRecipes(){
    this.httpClient.put(this.url,this.recipeService.getRecipes()).subscribe(response => {
      console.log(response);
    });
  }

  getRecipes(){
    return this.httpClient.get<recipe[]>(this.url)
    .pipe(map(recipes => {
      return recipes.map(recipe => {
        return {...recipe,ingredients: recipe.ingredients ? recipe.ingredients : []}
      });
    }),tap(recipes => {
      this.recipeService.setRecipes(recipes);
    }));
  }
}
