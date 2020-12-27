import { ingredient } from './ingredient.model';

export class recipe{
    name:String;
    description:String;
    imagePath:String;
    ingredients:ingredient[]=[];
    id:number;

    constructor(name:String,description:String,imagePath:String,ingredients:ingredient[],id:number){
        this.name=name;this.description=description;this.imagePath=imagePath;this.ingredients=ingredients;this.id=id;
    }
}