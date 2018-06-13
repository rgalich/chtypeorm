import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import {IngredientList} from "./IngredientList";

@Entity()
export class Unit {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false,
        unique: true
    })
    name: string;

    @OneToMany(type => IngredientList, ingredientLists => ingredientLists.ingredient)
    ingredientLists: IngredientList[]

}
