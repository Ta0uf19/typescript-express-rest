/**
 * Validation error middlware
 * @Ta0uf19
 */
import * as express from 'express';
import {Validator} from 'class-validator';
import {plainToClass} from "class-transformer";


export function validator<T>(type: any): express.RequestHandler {

    return (req: express.Request, res: express.Response, next: express.NextFunction) => {
        const params = req.method === "GET" ? req.params : req.body;
        let input = plainToClass(type, params);
        let validator = new Validator();

        let errors = validator.validateSync(input);
        if (errors.length > 0) {
            res.status(400).json({errors: errors}).end();
        } else {
            next();
        }

    };
}
