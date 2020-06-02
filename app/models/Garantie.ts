import {Entity, ObjectID, ObjectIdColumn, Column, BeforeInsert, BeforeUpdate, IsNull} from "typeorm";
import {IsNotEmpty, IsNumber} from 'class-validator';

@Entity({ name: "garantie" })
export class Garantie {

    @ObjectIdColumn()
    id: ObjectID;

    @Column({nullable: false})
    @IsNotEmpty()
    nom: string;

    @Column()
    @IsNumber({}, {
        message: "Le montant doit être un nombre"
    })
    montant: number;

    @Column()
    @IsNotEmpty()
    description: string;
}
