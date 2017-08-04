import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Ingredient } from "../../shared/ingredient.model";
import { ShoppingListService } from "../../shared/shopping-list.service";
import { FormSelectedService } from "../../shared/form-selected.service";
import { Subscription } from "rxjs/Subscription";
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  onFormSelected: Subscription;
  ingredientForms: FormGroup; //import reactiveFromsModule in app.module

  onRemove()
  {
    for(let ingredient of this.shoppingService.getSelected())
      this.shoppingService.removeIngredient(ingredient.id);
    
    this.shoppingService.removeAllSelectedIngredients();
  }

  onSubmit(){
    if(this.ingredientForms.valid){
      if(this.shoppingService.getSelected().length === 1)
        this.shoppingService.editIngredient(this.shoppingService.getSelected()[0].id, this.ingredientForms.get('name').value, this.ingredientForms.get('number').value); 
      else
        this.shoppingService.addNewIngredient(this.ingredientForms.get('name').value, this.ingredientForms.get('number').value);      
    }
  }


  constructor(public shoppingService: ShoppingListService, public formSelected: FormSelectedService) {
  }

  ngOnInit() {
    //allways unsubscribe on destroy
    this.onFormSelected = this.formSelected.onSubmit.subscribe((ingredient: Ingredient) => {
      this.shoppingService.onSelected(ingredient);
      if(this.shoppingService.findSelectedIngredient(ingredient.id)){
        this.ingredientForms.get('name').setValue(ingredient.name);
        this.ingredientForms.get('number').setValue(ingredient.amount);
      }
    });

    this.ingredientForms = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'number': new FormControl(null, [Validators.max(99999), Validators.min(1)])
    })
  }

  ngOnDestroy(){
    this.onFormSelected.unsubscribe();
  }

}
