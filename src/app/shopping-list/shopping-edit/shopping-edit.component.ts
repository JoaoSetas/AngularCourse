import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { Ingredient } from "../../shared/ingredient.model";
import { ShoppingListService } from "../../shared/shopping-list.service";
import { FormSelectedService } from "../../shared/form-selected.service";

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

  onRemove()
  {
    const ingredient = new Ingredient(this.nameInput.nativeElement.value, Number.NEGATIVE_INFINITY );
    this.shoppingService.addIngredient(ingredient);
  }

  constructor(private shoppingService: ShoppingListService, public formSelected: FormSelectedService) {
    formSelected.onSubmit.subscribe((name: string) => {
      this.nameInput.nativeElement.value = name;
      this.numberInput.nativeElement.value = null;
    });
  }

  ngOnInit() {
  }

}
