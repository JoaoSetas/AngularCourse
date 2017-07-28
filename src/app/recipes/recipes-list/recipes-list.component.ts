import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Rena", "Directamente do polo norte <br> Top Speed: 60km/h", "http://www.achetudoeregiao.com.br/animais/gerais.gif/caribu.jpg"),
    new Recipe("Pai Natal", "Directamente do polo norte <br> Top Speed: 0km/h", "http://www.soglos.com/showimage.ashx?name=admin%2F10+children+family%2Fsg_child_santasafariatwestmidlandsafari_ec.jpg&size=carousel"),
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();

  onRepipeSelected(recipe: Recipe){
    this.recipeSelected.emit(recipe);
  }
  
  constructor() { }

  ngOnInit() {
  }

}
