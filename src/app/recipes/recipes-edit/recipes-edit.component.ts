import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { Recipe } from "../recipe.model";
import { RecipeService } from "../../shared/recipe.service";
import { Ingredient } from "../../shared/ingredient.model";

@Component({
  selector: 'app-recipes-edit',
  templateUrl: './recipes-edit.component.html',
  styleUrls: ['./recipes-edit.component.css']
})
export class RecipesEditComponent implements OnInit, OnDestroy {
  recipe: Recipe;
  saved: boolean = false;

  addInstruction(){
    this.recipe.instructions.push("");
  }

  addIngredient(){
    //TODO servico insgredients this.recipe.ingredients.push();
  }

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
        this.recipe = this.recipeService.findRecipe(params['id']);            
    }); 

    if(!this.recipe){
      this.recipe = this.recipeService.addRecipe("", "", [], "", []);
    }
  }

  ngOnDestroy(){
    //TODO apagar recipe do service se não for submetido
  }

}
