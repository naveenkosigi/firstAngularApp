import { ingredient } from './../models/ingredient.model';
import { recipe } from './../models/recipe.model';
import { recipeService } from './../Services/recipe.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Form, FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {
  editMode:boolean=false;
  sub:any;
  id:number;
  form:FormGroup;
  constructor(private activatedRoute:ActivatedRoute,private recipeService:recipeService) { }

  ngOnInit(): void {
    this.sub=this.activatedRoute.params.subscribe(params => {
      this.id=params['id'];
      this.editMode= this.id!=null;
      console.log(this.editMode);
      this.createForm();
    });
  }

  createForm():void{
    let name:String="";
    let imagePath:String="";
    let description:String="";
    let ingredients;
    let formArray=new FormArray([]);

    if(this.editMode){
      ({name,imagePath,description,ingredients}=this.recipeService.getRecipeByIndex(this.id-1));
      if(ingredients){
        for(const ing of ingredients){
          formArray.push(new FormGroup({
            'name':new FormControl(ing.name,Validators.required),
            'cost':new FormControl(ing.cost,[Validators.required,Validators.pattern(/^[1-9]\d*$/)])
          }));
        }
      }
    }

    this.form=new FormGroup({
      'name':new FormControl(name,Validators.required),
      'imagePath':new FormControl(imagePath,Validators.required),
      'description':new FormControl(description,Validators.required),
      'ingredients':formArray
    })
  }

  submitForm():void{
    if(this.editMode){
      this.recipeService.addRecipeByIndex(this.form.value,this.id-1);
      return;
    }
    this.recipeService.addNewRecipe(this.form.value);
  }

  addIngredient():void{
    (<FormArray>this.form.get('ingredients')).push(
      new FormGroup({
        "name":new FormControl(null,Validators.required),
        "cost":new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]\d*$/)])
      })
    );
  }

}
