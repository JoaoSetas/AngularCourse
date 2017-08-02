import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from "../recipe.model";
import { ShoppingListService } from "../../shared/shopping-list.service";
import { ActivatedRoute, Params } from "@angular/router";
import { RecipeService } from "../../shared/recipe.service";

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
  recipe: Recipe;

  addAllIngredients(){
    this.shoppingService.addIngredients(this.recipe.ingredients);
  }

  constructor(private shoppingService: ShoppingListService, private recipeService: RecipeService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
        this.recipe = this.recipeService.findRecipe(params['id']);            
    });  
  }

}
