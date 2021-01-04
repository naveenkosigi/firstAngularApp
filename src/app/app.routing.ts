import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './authGuard';
import { canDeactivateGuard } from './canDeactivate';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import {DefaultTemplateRecipeDetailComponent} from './default-template-recipe-detail/default-template-recipe-detail.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';


const routes:Routes=[
    { path:'', redirectTo:'recipes',pathMatch:"full"},
    {path:'recipes',component:RecipesListComponent,
        children:[
            {path:"" , component:DefaultTemplateRecipeDetailComponent},
            {path:"new", component:EditRecipeComponent},
            {path:':id' , component:RecipeDetailsComponent},
            {path:':id/edit', component:EditRecipeComponent}
        ]
    },    
    { path:'shoppinglist',canActivate:[authGuard], canDeactivate:[canDeactivateGuard], component:ShoppingListComponent},
    { path:'**', redirectTo:'recipes'}
];


@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[RouterModule]
})

export class appRoutingModule{

}