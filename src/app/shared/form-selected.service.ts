import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from "./ingredient.model";

@Injectable()
export class FormSelectedService {
  onSubmit = new EventEmitter<Ingredient>();

  constructor() { }

}
