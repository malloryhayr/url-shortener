import fs from "fs";
import path from "path";

import { Server } from "./Server";
import Route from "./Route";

let port = 8080;
let defaultRedirect = 'https://igalaxy.dev';

const server = new Server({port: port, defaultRedirect: defaultRedirect});

fs.readFile(path.join(__dirname, '../routes.json'), async (err, data) => {
    if(err) return console.error(err);
    JSON.parse(await data.toString()).forEach((route: Route) => {
        server.register(route);
    });
    server.start();
});