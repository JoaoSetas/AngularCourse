import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-recipe-edit-instruction',
  templateUrl: './recipe-edit-instruction.component.html',
  styleUrls: ['./recipe-edit-instruction.component.css']
})
export class RecipeEditInstructionComponent implements OnInit {
  @Input() instruction: string;
  @ViewChild('instructionInput') instructionInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

}
