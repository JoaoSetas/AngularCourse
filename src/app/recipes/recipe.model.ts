import { Ingredient } from "../shared/ingredient.model";

export class Recipe {

    constructor(public name: string, 
                public description: string,
                public instructions: string[], 
                public imagePath: string,
                public ingredients: Ingredient[]){

    }
}
