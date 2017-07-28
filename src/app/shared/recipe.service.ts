import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from "../recipes/recipe.model";

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe("Rena", "Directamente do polo norte <br> Top Speed: 60km/h", "http://www.achetudoeregiao.com.br/animais/gerais.gif/caribu.jpg"),
    new Recipe("Pai Natal", "Directamente do polo norte <br> Top Speed: 0km/h", "http://www.soglos.com/showimage.ashx?name=admin%2F10+children+family%2Fsg_child_santasafariatwestmidlandsafari_ec.jpg&size=carousel"),
  ]
  selected = new EventEmitter<Recipe>();

  constructor() { }

  getRecipes(){
    return this.recipes.slice();
  }

  getSelected(){
    return this.selected;
  }

}
