/**
 *  @Ta0uf19
 *  Server application class
 */
import * as express from "express";
import * as http from "http"
import * as logger from "morgan"
import {createConnection, Connection} from "typeorm";
import {Routes} from "./Router";

export class App {

    private readonly app: express.Application;
    private readonly server: http.Server;

    constructor() {
        this.app = express();
        this.server = http.createServer(this.app);
    }

    /**
     * Start server
     */
    public async start(): Promise<http.Server> {
        this.configureExpress();
        this.configureRouter();

        // start connection
        await App.getConnection();
        return this.server;
    }

    /**
     * Get application instance
     */
    get App(): express.Application {
        return this.app;
    }

    /**
     * Configure connection to database
     */
    private static async getConnection(): Promise<Connection> {
        const connection: Connection = await createConnection({
            type: "mongodb",
            host: "localhost",
            port: 27017,
            database: "express",
            entities: [
                "./app/models/*.ts"
            ],
        });
        return connection;
    }

    /**
     * Config express middlewares
     */
    private configureExpress(): void {
        this.app.use(logger('dev'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use((req, res, next): void => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Authorization");
            res.header("Access-Control-Allow-Methods", "GET,PUT,PATCH,POST,DELETE,OPTIONS");
            next();
        });
        //this.app.use(cookieParser());
    }

    private configureRouter(): void {
        for(let route of Routes) {
            this.app.use(route.path, route.middleware, route.router)
        }

        this.app.use((req: express.Request, res: express.Response, next: express.NextFunction): void => {
            res.status(404);
            res.json({
                error: "Not found",
            });
            next();
        });

    }
}
