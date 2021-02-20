import { httpService } from './../Services/http.service';
import { recipeService } from './../Services/recipe.service';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve,RouterStateSnapshot } from "@angular/router";
import {recipe} from '../models/recipe.model'

@Injectable({providedIn:'root'})
export class RecipeResolver implements Resolve<recipe[]>{
  constructor(private httpService:httpService){

  }

  resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
    return this.httpService.getRecipes();
  }
}
