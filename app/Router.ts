import * as express from "express";
import { GarantieRouter } from "./routes/GarantieRouter";

interface IRouter {
    path: string;
    middleware: any[];
    router: express.Router;
}

export const Router: IRouter[] = [
    {
        path: "/api/garantie",
        middleware: [],
        router: (new GarantieRouter()).router,
    }
];
