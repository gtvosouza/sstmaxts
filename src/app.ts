import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import { router } from "./router";

export class App {
    public server: express.Application;

    constructor(){
        this.server = express();
        this.middleware();
        this.router();
        this.database();
    }

    private middleware(){
        this.server.use(express.json());
        this.server.use(cors());
    }

    private database() : void {
        const url = `mongodb+srv://doadmin:M2cj6m4R180lYA37@foodback-mongodb-307866dd.mongo.ondigitalocean.com/admin?authMechanism=DEFAULT`; 
                
        mongoose.connect(url, {}).then(function() {
            console.log('MongoDB is connected');
          }).catch( function(err) {
            console.log(err);
          });
    }

    public router() {
        this.server.use(router);
    }
}