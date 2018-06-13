import {Entity, PrimaryGeneratedColumn, ManyToOne, Column} from "typeorm";
import {Ingredient} from './Ingredient';
import {Recipe} from './Recipe';
import {Unit} from './Unit';

@Entity()
export class IngredientList {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false})
    amount: number

    @ManyToOne(type => Recipe, recipe => recipe.ingredientLists, {nullable: false})
    recipe: Recipe

    @ManyToOne(type => Ingredient, ingredient => ingredient.ingredientLists, {nullable: false})
    ingredient: Ingredient

    @ManyToOne(type => Unit, unit => unit.ingredientLists, {nullable: false})
    unit: Unit
}
