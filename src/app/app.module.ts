import { HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { recipeService } from './Services/recipe.service';
import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import {newColor} from './Directives/test.directive';
import {showAdmin} from './Directives/test.structural.directive';
import {dropDown} from './Directives/dropdown.directive'
import {demoService} from './Services/demo.service';
import { shoppingService } from './Services/shopping.service';
import { TestChildComponentComponent } from './test-child-component/test-child-component.component';
import { appRoutingModule } from './app.routing';
import { authService } from './authService';
import { authGuard } from './authGuard';
import { canDeactivateGuard } from './canDeactivate';
import { DefaultTemplateRecipeDetailComponent } from './default-template-recipe-detail/default-template-recipe-detail.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { LoaderComponent } from './loader/loader.component';
import { authenticateService } from './Services/auth.service';
import { authInterceptor } from './Services/auth.interceptor';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesListComponent,
    RecipeDetailsComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipeItemComponent,
    newColor,
    showAdmin,
    dropDown,
    TestChildComponentComponent,
    DefaultTemplateRecipeDetailComponent,
    EditRecipeComponent,
    NewRecipeComponent,
    AuthenticateComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    appRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [shoppingService,authService,authGuard,canDeactivateGuard,recipeService,{provide:HTTP_INTERCEPTORS,useClass:authInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
