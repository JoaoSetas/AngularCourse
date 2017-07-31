import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from "../recipe.model";
import { ShoppingListService } from "../../shared/shopping-list.service";

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  addAllIngredients(){
    this.shoppingService.addIngredients(this.recipe.ingredients);
  }

  constructor(private shoppingService: ShoppingListService) { }

  ngOnInit() {
  }

}
