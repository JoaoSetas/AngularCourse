import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Recipe } from "./recipe.model";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  recipeSelected: Recipe = null;

  onRecipeSelected(recipe: Recipe){
    this.recipeSelected = recipe;
  }

  constructor() { }

  ngOnInit() {
  }

}
