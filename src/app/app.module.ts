import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingListComponent } from './components/shopping/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './components/shopping/shopping-list/shopping-list-edit/shopping-list-edit.component';
import { RecipeComponent } from './components/recipe/recipe/recipe.component';
import { IngredientComponent } from './components/shopping/ingredient/ingredient.component';

import { HeaderComponent } from './components/header/header.component';
import { RecipeDetailComponent } from './components/recipe/recipe/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './components/recipe/recipe/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './components/recipe/recipe/recipe-item/recipe-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeComponent,
    IngredientComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
