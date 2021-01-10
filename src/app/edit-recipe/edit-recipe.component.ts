import { recipe } from './../models/recipe.model';
import { recipeService } from './../Services/recipe.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FormControl, FormGroup} from '@angular/forms';

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

    if(this.editMode){
      ({name,imagePath,description}=this.recipeService.getRecipeByIndex(this.id-1));
    }

    this.form=new FormGroup({
      'name':new FormControl(name),
      'imagePath':new FormControl(imagePath),
      'description':new FormControl(description)
    })
  }

  submitForm():void{
    console.log(this.form);
  }

}
