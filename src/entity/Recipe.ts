import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import {Step} from "./Step";
import {IngredientList} from "./IngredientList";

@Entity()
export class Recipe {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false
    })
    name: string;

    @OneToMany(type => Step, step => step.recipe)
    steps: Step[];

    @OneToMany(type => IngredientList, ingredientLists => ingredientLists.recipe)
    ingredientLists: IngredientList[];
}
