import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Recipe } from "../recipe.model";
import { RecipeService } from "../../shared/recipe.service";
import { Ingredient } from "../../shared/ingredient.model";
import { IngredientService } from "../../shared/ingredient.service";

@Component({
  selector: 'app-recipes-edit',
  templateUrl: './recipes-edit.component.html',
  styleUrls: ['./recipes-edit.component.css']
})
export class RecipesEditComponent implements OnInit, OnDestroy {
  recipe: Recipe;
  saved: boolean = false;

  addName(value: string){
    this.recipe.name = value;
  }

  addDescription(value: string){
    this.recipe.description = value;
  }

  addInstruction(){
    this.recipe.instructions.push("");
  }

  addIngredient(){
    this.recipe.ingredients.push(this.ingredientService.addIngredient("", null));
  }

  addImage(target){
    this.recipe.imagePath = target.value;
    target.value = "";
  }

  onSave(){
    this.saved = true;
    this.router.navigate(['/recipes', this.recipe.id]);
  }

  constructor(private route: ActivatedRoute, private router: Router, private recipeService: RecipeService, private ingredientService: IngredientService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
        this.recipe = this.recipeService.findRecipe(params['id']);            
    }); 

    if(!this.recipe){
      this.recipe = this.recipeService.addRecipe("", "", [], "", []);
    }
  }

  ngOnDestroy(){
    /*if(!this.saved)
      this.recipeService.removeRecipe(this.recipe.id);*/
  }

}
