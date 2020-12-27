import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {
  editMode:boolean=false;
  sub:any;
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.sub=this.activatedRoute.params.subscribe(params => {
      let id=params['id'];
      this.editMode= id!=null;
      console.log(this.editMode);
    });
  }

}
