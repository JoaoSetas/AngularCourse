import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from "./ingredient.model";
import { Subject } from "rxjs/Subject";

@Injectable()
export class FormSelectedService {
  onSubmit = new Subject<Ingredient>();

  constructor() { }

}
