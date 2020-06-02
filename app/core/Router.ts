/**
 * @Ta0uf19
 */
import * as express from "express";

export abstract class Router {

    public router: express.Router;
    private controller: any;

    constructor(controller: any) {
        this.controller = controller;
        this.router = express.Router();
    }

    /**
     * Passing method of a controller to call
     * @param action
     */
    protected handler(action: () => void): any {
        return (req: Request, res: Response) => action.call(new this.controller(req, res));
    }

}
