import fs from "fs";
import path from "path";

import { Server } from "./Server";
import Route from "./Route";

const server = new Server();

fs.readFile(path.join(__dirname, '../routes.json'), async (err, data) => {
    if(err) return console.error(err);
    JSON.parse(await data.toString()).forEach((route: Route) => {
        server.register(route);
    });
    server.start();
});