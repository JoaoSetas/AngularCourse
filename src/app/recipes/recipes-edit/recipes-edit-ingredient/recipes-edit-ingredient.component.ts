import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from "../../../shared/ingredient.model";

@Component({
  selector: 'app-recipes-edit-ingredient',
  templateUrl: './recipes-edit-ingredient.component.html',
  styleUrls: ['./recipes-edit-ingredient.component.css']
})
export class RecipesEditIngredientComponent implements OnInit {
  @Input() ingredient: Ingredient;

  constructor() { }

  ngOnInit() {
  }

}
