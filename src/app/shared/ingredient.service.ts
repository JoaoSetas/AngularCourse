import { Injectable } from '@angular/core';
import { Ingredient } from "./ingredient.model";

@Injectable()
export class IngredientService {
  private incrementId: number = 26
  private ingregients: Ingredient[] = [
                 new Ingredient(1, "medium red onions, thinly sliced", 2), 
                 new Ingredient(2, "tablespoons extra-virgin olive oil, plus more for brushing", 6),
                 new Ingredient(3, "cup mayonnaise", 1/2),
                 new Ingredient(4, "tablespoons fresh lemon juice", 2),
                 new Ingredient(5, "Salt and freshly ground pepper", 1),
                 new Ingredient(6 ,"slices of thick-cut bacon (12 ounces)", 8),
                 new Ingredient(7, "pounds mixed ground chuck and ground sirloin", 3),
                 new Ingredient(8, "ounces brie, sliced", 12),
                 new Ingredient(9, "brioche burger buns, split", 8),
                 new Ingredient(10, "tablespoon extra-virgin olive oil", 1),
                 new Ingredient(11, "medium yellow onion, finely chopped", 1),
                 new Ingredient(12, "garlic cloves, finely chopped", 2),
                 new Ingredient(13, "Kosher salt", 1),
                 new Ingredient(14, "Black pepper", 1),
                 new Ingredient(15, "cup chopped parsley, plus more for garnish", 1/4),
                 new Ingredient(16, "tablespoons chopped basil", 2),
                 new Ingredient(17, "pound ground turkey", 1),
                 new Ingredient(18, "pound sweet Italian turkey sausage, casings removed", 1),
                 new Ingredient(19, "Ritz crackers, crushed (1/2 cup)", 12),
                 new Ingredient(20, "cup freshly grated Parmigiano-Reggiano cheese", 1/2),
                 new Ingredient(21, "cup mayonnaise", 1/4),
                 new Ingredient(22, "large eggs, lightly beaten", 2),
                 new Ingredient(23, "teaspoon dried oregano", 1/2),
                 new Ingredient(24, "teaspoon crushed red pepper", 1/4),
                 new Ingredient(25, "cup jarred marinara sauce", 3/4)];

  addIngredient(name: string, amount: number){
    let ingredient = new Ingredient(this.incrementId++, name, amount <= 0 ? 1 : amount);
    this.ingregients.push(ingredient);
    return ingredient;
  }

  editIngredient(id: number, name: string, amount: number){
    let foundIngredient = this.findIngredient(id);
    if(foundIngredient){
      foundIngredient.amount = amount;
      foundIngredient.name = name;
      if(foundIngredient.amount <= 0)
        foundIngredient.amount = 1;
      else if(foundIngredient.amount >= 99999)
        foundIngredient.amount = 99999;
      return;
    }
  }

  removeIngredient(id: number){
    this.ingregients.splice(this.ingregients.indexOf(this.findIngredient(id)), 1);
  }

  findIngredient(id: number){
    return this.ingregients.find((value) => {
      return value.id === id;
    });
  }

  constructor() { }

}
