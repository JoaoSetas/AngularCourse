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
    this.shoppingService.addNewIngredient(this.nameInput.nativeElement.value, this.numberInput.nativeElement.value);
  }

  onEdit(){
    if(this.shoppingService.getSelected()){
      this.shoppingService.getSelected().amount = this.numberInput.nativeElement.value;
      this.shoppingService.getSelected().name = this.nameInput.nativeElement.value;
      this.shoppingService.addIngredient(this.shoppingService.getSelected());
    }
  }

  onRemove()
  {
    if(this.shoppingService.getSelected()){
      this.shoppingService.removeIngredient(this.shoppingService.getSelected().id);
      this.shoppingService.onSelected(null);
    }
  }

  constructor(public shoppingService: ShoppingListService, public formSelected: FormSelectedService) {
    formSelected.onSubmit.subscribe((ingredient: Ingredient) => {
      this.shoppingService.onSelected(ingredient);
      this.nameInput.nativeElement.value = ingredient.name;
      this.numberInput.nativeElement.value = ingredient.amount;
    });
  }

  ngOnInit() {
  }

}
