import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from "./ingredient.model";

@Injectable()
export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient("Maça", 10),
    new Ingredient("Castanha", 5)
  ];
  onSubmit = new EventEmitter<Ingredient>();

  constructor() { }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  }

  getIngredients(){
    return this.ingredients.slice();
  }

}
