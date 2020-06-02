import {Controller} from "../core/Controller";
import { Request, Response } from "express";
import {Repository, getConnection, ObjectID} from "typeorm";
import {Garantie} from "../models/Garantie";
import {validate, ValidationError} from 'class-validator';
import {plainToClass} from "class-transformer";

export class GarantieController extends Controller {

    private garantieRepository : Repository<Garantie>;

    constructor(req: Request, res: Response) {
        super(req, res);
        this.garantieRepository = getConnection().getRepository(Garantie);
    }

    public async all(): Promise<Response> {
        const list = await this.garantieRepository.find();
        return this.res.send(list);
    }

    public async find(): Promise<Response> {
        const { id } = this.req.params as unknown as { id: string };

        const garantie = id.match(/^[0-9a-fA-F]{24}$/) && await this.garantieRepository.findOneOrFail(id);
        if (garantie) {
             return this.res.status(200).send(garantie);
        } else {
             return this.res.status(404).send({ text: "not found" });
        }
    }

    /**
     * Ajouter
     */
    public async add(): Promise<Response> {
        const garantie: Garantie = plainToClass(Garantie, this.req.body);
        const result = await this.garantieRepository.save(garantie);
        return this.res.status(200).send(result);
    }
    /**
     * Update
     */
    public async update(): Promise<Response> {
        const { id } = this.req.params as unknown as { id: string };
        const garantie: Garantie = id.match(/^[0-9a-fA-F]{24}$/) && await this.garantieRepository.findOneOrFail(id);

        if (garantie) {
            this.garantieRepository.merge(garantie, this.req.body);
            const results = await this.garantieRepository.save(garantie);

            return this.res.status(200).send(results);
        } else {
            return this.res.status(404).send({ message: "not found" });
        }
    }

    /**
     * Supprimer
     */
    public async delete(): Promise<Response> {
        const { id } = this.req.params as unknown as { id: string };
        const garantie: Garantie = id.match(/^[0-9a-fA-F]{24}$/) && await this.garantieRepository.findOneOrFail(id);
        if (garantie) {
            await this.garantieRepository.delete(garantie);
            return this.res.status(200).send({message: "Garantie a bien été supprimé"});
        } else {
            return this.res.status(404).send({ message: "not found" });
        }
    }


}
