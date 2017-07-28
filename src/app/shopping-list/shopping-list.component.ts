import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient("Maça", 10),
    new Ingredient("Castanha", 5)
  ];

  onSubmit(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  }

  constructor() { }

  ngOnInit() {
  }

}
