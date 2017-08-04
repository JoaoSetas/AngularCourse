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
import { GuardGuard } from './guard.guard';
import { RecipesEditComponent } from './recipes/recipes-edit/recipes-edit.component';
import { RecipeEditInstructionComponent } from './recipes/recipes-edit/recipe-edit-instruction/recipe-edit-instruction.component';
import { RecipesEditIngredientComponent } from './recipes/recipes-edit/recipes-edit-ingredient/recipes-edit-ingredient.component';
import { IngredientService } from './shared/ingredient.service';
import { ReactiveFormsModule } from "@angular/forms";

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full'},
  { path: 'recipes', component: RecipesComponent, children:[
    { path: 'new', component: RecipesEditComponent},
    { path: ':id', component: RecipesDetailComponent, },
    { path: ':id/edit', component: RecipesEditComponent, }
  ]},
  { path: 'shoppingList', component: ShoppingListComponent, canActivate: [GuardGuard]},
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
    ShoppingItemComponent,
    RecipesEditComponent,
    RecipeEditInstructionComponent,
    RecipesEditIngredientComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [RecipeService, ShoppingListService, FormSelectedService, GuardGuard, IngredientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
