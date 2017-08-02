import { Injectable } from '@angular/core';
import { Ingredient } from "./ingredient.model";

@Injectable()
export class ShoppingListService {
  private ingredients: Ingredient[] = [];
  private incrementId: number = 29; 
  private selected: Ingredient[] = [];

  constructor() { }

  addNewIngredient(name: string, number: number){
    if(number <= 0)
        number = 1;
    this.ingredients.push(new Ingredient(this.incrementId++, name, number));
    this.sort();
  }

  addIngredients(ingredients: Ingredient[]){
    for(let newIngredient of ingredients){
      if(this.findIngredient(newIngredient.id)){
        console.log("Ingredient " + newIngredient.name + " exists");
        continue;
      }
      this.ingredients.push(newIngredient);
    }
  }

  editIngredient(id: number, name: string, amount: number){
    let foundIngredient = this.findIngredient(id);
    if(foundIngredient){
      foundIngredient.amount = amount;
      foundIngredient.name = name;
      if(foundIngredient.amount <= 0)
        foundIngredient.amount = 1;
      return;
    }
  }

  removeIngredient(id: number){
    this.ingredients.splice(this.ingredients.indexOf(this.findIngredient(id)), 1);
  }

  removeSelectedIngredient(id: number){
    this.selected.splice(this.selected.indexOf(this.findSelectedIngredient(id)), 1);
  }

  removeAllSelectedIngredients(){
    this.selected = [];
  }

  findIngredient(id: number){
    return this.ingredients.find((value) => {
      return value.id === id;
    })
  }

  findSelectedIngredient(id: number){
    return this.selected.find((value) => {
      return value.id === id;
    })
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
    let selectedIngredient = this.findSelectedIngredient(ingredient.id);

    if(selectedIngredient){
      this.removeSelectedIngredient(selectedIngredient.id);
      return;
    }
    this.selected.push(ingredient);
  }

}
