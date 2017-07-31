import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { Ingredient } from "../../shared/ingredient.model";
import { ShoppingListService } from "../../shared/shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('numberInput') numberInput: ElementRef;

  onSubmit(){
    const ingredient = new Ingredient(this.nameInput.nativeElement.value, this.numberInput.nativeElement.value);
    this.shoppingService.addIngredient(ingredient);
  }

  constructor(private shoppingService: ShoppingListService) { }

  ngOnInit() {
  }

}
