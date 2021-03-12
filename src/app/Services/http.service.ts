import { recipe } from './../models/recipe.model';
import { recipeService } from './recipe.service';
import { Injectable } from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http"
import {exhaustMap, map,tap,take} from 'rxjs/operators';
import { authenticateService } from './auth.service';

@Injectable({providedIn:'root'})
export class httpService{
  url='https://recipe-project-5b3ad-default-rtdb.firebaseio.com/recipes.json';
  constructor(private httpClient:HttpClient,private recipeService:recipeService,private authService:authenticateService){

  }

  storeRecipes(){
    this.httpClient.put(this.url,this.recipeService.getRecipes()).subscribe(response => {
      console.log(response);
    });
  }

  getRecipes(){
    return this.authService.userTrigger.pipe(take(1),exhaustMap(userData => {
      return this.httpClient.get<recipe[]>(this.url)
    }),
    map(recipes => {
      return recipes.map(recipe => {
        return {...recipe,ingredients: recipe.ingredients ? recipe.ingredients : []}
      });
    }),tap(recipes => {
      this.recipeService.setRecipes(recipes);
    })
    )
  }
}
