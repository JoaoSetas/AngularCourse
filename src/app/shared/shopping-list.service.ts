import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from "./ingredient.model";

@Injectable()
export class ShoppingListService {
  private ingredients: Ingredient[] = [];

  constructor() { }

  addIngredient(ingredient: Ingredient){

    for(let oldIngredient of this.ingredients)
        if(ingredient.name === oldIngredient.name){
          oldIngredient.amount = +ingredient.amount + +oldIngredient.amount;
          if(oldIngredient.amount <= 0)
            this.ingredients.splice(this.ingredients.indexOf(oldIngredient), 1);
          return;
        }

    this.ingredients.push(Object.assign({}, ingredient));

    this.ingredients.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
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
