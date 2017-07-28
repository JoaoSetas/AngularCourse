import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Recipe } from "./recipe.model";
import { RecipeService } from "../shared/recipe.service";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe = null;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.selected.subscribe((recipe: Recipe) => {
        this.selectedRecipe = recipe;
    })
  }

}
