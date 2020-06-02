import {Entity, ObjectID, ObjectIdColumn, Column, BeforeInsert, BeforeUpdate} from "typeorm";
import {IsNumber} from 'class-validator';

@Entity({ name: "garantie" })
export class Garantie {

    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    nom: string;

    @Column()
    @IsNumber({}, {
        message: "Le montant doit être un nombre"
    })
    montant: number;

    @Column()
    description: string;


}
