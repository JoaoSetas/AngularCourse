import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Ingredient } from "../../shared/ingredient.model";
import { ShoppingListService } from "../../shared/shopping-list.service";
import { FormSelectedService } from "../../shared/form-selected.service";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('numberInput') numberInput: ElementRef;
  onFormSelected: Subscription;
  warning: string = null;

  onSubmit(){
    this.shoppingService.addNewIngredient(this.nameInput.nativeElement.value, this.numberInput.nativeElement.value);
  }

  onEdit(){
    if(this.shoppingService.getSelected().length === 1)
      this.shoppingService.editIngredient(this.shoppingService.getSelected()[0].id, this.nameInput.nativeElement.value, this.numberInput.nativeElement.value); 
    else{
      this.onWarning(2, "Select only one to edit!");
    }
  }

  onRemove()
  {
    for(let ingredient of this.shoppingService.getSelected())
      this.shoppingService.removeIngredient(ingredient.id);
    
    this.shoppingService.removeAllSelectedIngredients();
  }

  onEnter(){
    if(this.shoppingService.getSelected().length === 1)
      this.onEdit();
    else if(this.shoppingService.getSelected().length === 0)
      this.onSubmit();
    else
      this.onWarning(2, "Select only one to edit!");
  }

  onWarning(sec: number, msg: string){
      this.warning = msg;
      setInterval(() => {
        this.warning = null;
      }, sec * 1000);
  }

  constructor(public shoppingService: ShoppingListService, public formSelected: FormSelectedService) {
  }

  ngOnInit() {
    //allways unsubscribe on destroy
    this.onFormSelected = this.formSelected.onSubmit.subscribe((ingredient: Ingredient) => {
      this.shoppingService.onSelected(ingredient);
      this.nameInput.nativeElement.value = ingredient.name;
      this.numberInput.nativeElement.value = ingredient.amount;
    });
  }

  ngOnDestroy(){
    this.onFormSelected.unsubscribe();
  }

}
