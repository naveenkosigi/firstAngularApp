import { EventEmitter, Injectable } from '@angular/core';
import {recipe} from '../models/recipe.model';
import {ingredient} from '../models/ingredient.model';
import { Subject } from 'rxjs';

@Injectable()
export class recipeService{
    recipes:recipe[]=[];
    recipeSelected=new Subject<[recipe,true]>();
    showRecipeDetails:boolean=false;
    
    constructor() {
        let index=0;
        this.recipes.push(new recipe('Pizza',"American Pizza","https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/216054.jpg",[new ingredient("Bread",40)],++index));
        this.recipes.push(new recipe('Noodles','Chinese Special Cuisine','https://www.loveandoliveoil.com/wp-content/uploads/2015/03/soy-sauce-noodlesH2.jpg',[new ingredient("Dry noodles",60)],++index));
    }

    getRecipes():recipe[]{
        return this.recipes.slice();
    }
}