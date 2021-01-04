import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AppComponent } from '../app.component';
import { AppModule } from '../app.module';
import {ingredient} from '../models/ingredient.model';

@Injectable()
export class shoppingService{
    updateIngredients=new Subject<boolean>();
    editIngredient=new Subject<Number>();
    ingredients : ingredient[]=[];

    constructor(){
        this.ingredients.push(new ingredient('Onion',10));
        this.ingredients.push(new ingredient('Tomato',20));
    }

    addIngredient(ingredient:ingredient):void{
        this.ingredients.push(ingredient);
        this.updateIngredients.next(true);
    }

    getIngredients():ingredient[]{
        return this.ingredients.slice();
    }

    getIngredientByIndex(index:number):ingredient{
      return this.ingredients[index];
    }

    updateIngredientByIndex(index:number,ingredient:ingredient):void{
      this.ingredients[index]=ingredient;
      this.updateIngredients.next(true);
    }

    deleteIngredientByIndex(index:number):void{
      this.ingredients.splice(index,1);
      this.updateIngredients.next(true);
    }
}
