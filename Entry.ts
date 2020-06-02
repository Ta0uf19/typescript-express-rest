import {App} from "./app/App";

const port: number = 3000;
new App().start().then((server) => {
    server.listen(port);
    server.on("error", (error: any) => {
        if (error.syscall !== "listen") {
            throw error;
        }
        switch (error.code) {
            case "EACCES":
                console.error("Port requires elevated privileges");
                process.exit(1);
                break;
            case "EADDRINUSE":
                console.error("Port is already in use");
                process.exit(1);
                break;
            default:
                throw error;
        }
    });
    server.on("listening", () => {
        console.log("Server is running in process " + process.pid + " listening on PORT " + port + "\n");
    });
});
