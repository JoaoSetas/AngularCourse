import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from "../../../shared/recipe.service";

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {
  @Input() recipe: Recipe;


  onRepipeSelected(){
    this.recipeService.select(this.recipe);
  }

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

}
