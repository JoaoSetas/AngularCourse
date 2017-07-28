import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('numberInput') numberInput: ElementRef;
  @Output() ingredientEvent = new EventEmitter<Ingredient>();

  onSubmit(){
    const ingredient = new Ingredient(this.nameInput.nativeElement.value, this.numberInput.nativeElement.value);
    this.ingredientEvent.emit(ingredient);
  }

  constructor() { }

  ngOnInit() {
  }

}
