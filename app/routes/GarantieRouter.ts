import {Router} from "../core/Router";
import {GarantieController} from "../controllers/GarantieController";
import {validator} from "../middleware/Validator";
import {Garantie} from "../models/Garantie";

export class GarantieRouter extends Router {
    constructor() {
        super(GarantieController);
        this.router
            .get("/", this.handler(GarantieController.prototype.all))
            .post('/', validator(Garantie), this.handler(GarantieController.prototype.add))
            .get('/:id', this.handler(GarantieController.prototype.find))
            .put('/:id', validator(Garantie), this.handler(GarantieController.prototype.update))
            .delete('/:id', this.handler(GarantieController.prototype.delete))
    }
}
