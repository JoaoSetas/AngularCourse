import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { RecipesItemComponent } from './recipes/recipes-list/recipes-item/recipes-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipeService } from './shared/recipe.service';
import { ShoppingListService } from './shared/shopping-list.service';
import { ShoppingItemComponent } from './shopping-list/shopping-item/shopping-item.component';
import { Routes, RouterModule } from '@angular/router';
import { FormSelectedService } from './shared/form-selected.service';

const appRoutes: Routes = [
  { path: '', component: RecipesComponent, pathMatch: 'full' },
  { path: 'shoppingList', component: ShoppingListComponent},
  { path: '**', redirectTo: ''},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipesDetailComponent,
    RecipesItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    ShoppingItemComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [RecipeService, ShoppingListService, FormSelectedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
