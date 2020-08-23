import express, { NextFunction, Request, Response } from 'express';
import Route from './Route';
import ServerOptions from './ServerOptions';

const app = express();

export class Server {
    private port: number = 8080;
    private defaultRedirect: string = 'https://igalaxy.dev';

    constructor(options?: ServerOptions){
        this.port = options?.port || this.port;
        this.defaultRedirect = options?.defaultRedirect || this.defaultRedirect;
    }

    public register = (route: Route) => {
        app.get(`/${route.path}`, (req, res) => {
            return res.redirect(route.result);
        });
    }

    public start = () => {
        app.get('*', (req, res) => {
            return res.redirect(this.defaultRedirect);
        });
        
        app.listen(this.port, () => {
            console.log(`URL shortener started on port ${this.port}`);
        });
    }
}