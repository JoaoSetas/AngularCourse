import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from "./ingredient.model";

@Injectable()
export class ShoppingListService {
  private ingredients: Ingredient[] = [];
  onSubmit = new EventEmitter<Ingredient>();

  constructor() { }

  addIngredient(ingredient: Ingredient){
    let exists = false;
    for(let oldIngredient of this.ingredients)
        if(ingredient.name === oldIngredient.name){
          oldIngredient.amount = +ingredient.amount + +oldIngredient.amount;
          exists = true;
          break;
        }
    if(!exists)
      this.ingredients.push(Object.assign({}, ingredient));
  }

  addIngredients(ingredients: Ingredient[]){
    for(let newIngredient of ingredients){
      this.addIngredient(newIngredient);
    }
  }

  getIngredients(){
    return this.ingredients.slice();
  }

}
