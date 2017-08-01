import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from "./ingredient.model";

@Injectable()
export class ShoppingListService {
  private ingredients: Ingredient[] = [];
  private incrementId: number = 29; 
  private selected: Ingredient;

  constructor() { }

  addIngredient(ingredient: Ingredient){

    let foundIngredient = this.ingredients.find((value) => {
      return value.id === ingredient.id;
    })

    if(foundIngredient){
      foundIngredient.amount = ingredient.amount;
      if(foundIngredient.amount <= 0)
        foundIngredient.amount = 1;
      return;
    }

    this.ingredients.push(Object.assign({}, ingredient));

    this.sort();
  }

  addNewIngredient(name: string, number: number){
    if(number <= 0)
        number = 1;
    this.ingredients.push(new Ingredient(this.incrementId++, name, number));
    this.sort();
  }

  addIngredients(ingredients: Ingredient[]){
    for(let newIngredient of ingredients){
      this.addIngredient(newIngredient);
    }
  }

  removeIngredient(id: number){
    this.ingredients.splice(this.ingredients.indexOf(this.ingredients.find((value) => {
      return value.id === id;
    })), 1);
  }

  sort(){
    this.ingredients.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
  }

  getIngredients(){
    return this.ingredients.slice();
  }

  getSelected(){
    return this.selected;
  }

  onSelected(ingredient: Ingredient){
    this.selected = ingredient;
  }

}
