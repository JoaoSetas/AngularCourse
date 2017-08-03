import { Component, OnInit, ViewEncapsulation, HostListener } from '@angular/core';
import { Recipe } from "./recipe.model";
import { RecipeService } from "../shared/recipe.service";
import { Ingredient } from "../shared/ingredient.model";
import { ActivatedRoute, Params } from "@angular/router";
import { IngredientService } from "../shared/ingredient.service";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {

  constructor(public recipeService: RecipeService, private route: ActivatedRoute, private ingredientService: IngredientService) { }

  ngOnInit() {    
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    event.key === 'º' ? this.recipeService.addRecipe(
        "Marta",
        "Amo-te Muito fofinha",
        ["Ir para a cama", "Baixar as luzes", "Acender as velas", "ect..."],
        "http://www.publicdomainpictures.net/pictures/90000/velka/red-scribble-heart.jpg",
        [this.ingredientService.addIngredient("Vela", 69), this.ingredientService.addIngredient("Cama Grade", 1), this.ingredientService.addIngredient("Lubrificante", 1)]) : null;
  }

}
