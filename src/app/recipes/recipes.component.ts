import { Component, OnInit, ViewEncapsulation, HostListener } from '@angular/core';
import { Recipe } from "./recipe.model";
import { RecipeService } from "../shared/recipe.service";
import { Ingredient } from "../shared/ingredient.model";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {

  constructor(public recipeService: RecipeService) { }

  ngOnInit() {
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    console.log(event.key);
    event.key === 'm' ? this.recipeService.addRecipe(
      new Recipe(
        "Marta",
        "Amo-te Muito fofinha",
        ["Ir para a cama", "Baixar as luzes", "Acender as velas", "ect..."],
        "http://www.publicdomainpictures.net/pictures/90000/velka/red-scribble-heart.jpg",
        [new Ingredient("Vela", 69), new Ingredient("Cama Grade", 1), new Ingredient("Lubrificante", 1)]
      )) : null;
  }

}
