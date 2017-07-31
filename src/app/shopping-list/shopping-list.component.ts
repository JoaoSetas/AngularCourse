import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from "../shared/shopping-list.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  
  onSubmit(ingredient: Ingredient){
    this.shoppingService.addIngredient(ingredient);
  }

  constructor(public shoppingService: ShoppingListService) { }

  ngOnInit() {
  }

}
