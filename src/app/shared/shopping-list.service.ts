import { Injectable } from '@angular/core';
import { Ingredient } from "./ingredient.model";
import { IngredientService } from "./ingredient.service";

@Injectable()
export class ShoppingListService {
  private ingredients: Ingredient[] = [];
  private selected: Ingredient[] = [];

  constructor(private ingredientService: IngredientService) { }

  addNewIngredient(name: string, number: number){
    this.ingredients.push(this.ingredientService.addIngredient(name, number));
    this.sort();
  }

  addIngredients(ingredients: Ingredient[]){
    for(let newIngredient of ingredients)
      this.ingredients.push(newIngredient);
    
    this.sort();
  }

  editIngredient(id: number, name: string, amount: number){
    this.ingredientService.editIngredient(id, name, amount);
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
