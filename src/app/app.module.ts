import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingListComponent } from './components/shopping/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './components/shopping/shopping-list/shopping-list-edit/shopping-list-edit.component';
import { RecipeComponent } from './components/recipe/recipe/recipe.component';
import { IngredientComponent } from './components/shopping/ingredient/ingredient.component';
import { RecipieListComponent } from './components/recipe/recipe/recipie-list/recipie-list.component';
import { RecipieItemComponent } from './components/recipe/recipe/recipie-item/recipie-item.component';
import { RecipieDetailComponent } from './components/recipe/recipe/recipie-detail/recipie-detail.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeComponent,
    IngredientComponent,
    RecipieListComponent,
    RecipieItemComponent,
    RecipieDetailComponent,
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
