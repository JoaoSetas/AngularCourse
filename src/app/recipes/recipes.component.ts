import { Component, OnInit, ViewEncapsulation, HostListener } from '@angular/core';
import { Recipe } from "./recipe.model";
import { RecipeService } from "../shared/recipe.service";
import { Ingredient } from "../shared/ingredient.model";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {

  constructor(public recipeService: RecipeService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.fragment.subscribe((params: string) => {
        this.recipeService.onSelected(this.recipeService.findRecipe(params));            
    });      
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    console.log(event.key);
    event.key === 'm' ? this.recipeService.addRecipe(
      new Recipe(3,
        "Marta",
        "Amo-te Muito fofinha",
        ["Ir para a cama", "Baixar as luzes", "Acender as velas", "ect..."],
        "http://www.publicdomainpictures.net/pictures/90000/velka/red-scribble-heart.jpg",
        [new Ingredient(26, "Vela", 69), new Ingredient(27, "Cama Grade", 1), new Ingredient(28, "Lubrificante", 1)]
      )) : null;
  }

}
