import { Component, OnInit, Input, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Recipe } from "../../recipe.model";

@Component({
  selector: 'app-recipe-edit-instruction',
  templateUrl: './recipe-edit-instruction.component.html',
  styleUrls: ['./recipe-edit-instruction.component.css']
})
export class RecipeEditInstructionComponent implements OnInit, OnDestroy {
  @Input() index: number;
  @Input() recipe: Recipe;
  instruction: string;

  onInstruction(value: string){
    this.instruction = value;
  }

  constructor() { }

  ngOnInit() {
    this.instruction = this.recipe.instructions[this.index];
  }

  ngOnDestroy(){
    this.recipe.instructions[this.index] = this.instruction;
  }

}
