import { Component, OnInit, HostListener, ViewEncapsulation } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from "../shared/shopping-list.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ShoppingListComponent implements OnInit {
  size = 0;

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    this.size = event.key === '+' ? (this.size+1) % 13 : this.size;
  }

  constructor(public shoppingService: ShoppingListService) {

   }

  ngOnInit() {
  }

}
