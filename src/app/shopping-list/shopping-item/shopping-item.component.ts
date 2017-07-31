import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Ingredient } from "../../shared/ingredient.model";
import { FormSelectedService } from "../../shared/form-selected.service";

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css']
})
export class ShoppingItemComponent implements OnInit {
  @Input() ingredient: Ingredient;

  onSelected(){
    this.formSelected.onSubmit.emit(this.ingredient.name);
  }

  constructor(private formSelected: FormSelectedService) { }

  ngOnInit() {
  }

}
