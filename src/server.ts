import "reflect-metadata";
import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { useExpressServer, useContainer} from 'routing-controllers';
import {Container} from 'typedi';

dotenv.config();
const dev:boolean = process.env.NODE_ENV !== "production";
const port : number = parseInt(process.env.EXPRESS_PORT || '3000');

const app = express();
app.use(morgan());
    
//ROUTING-CONTROLLERS
useContainer(Container);
useExpressServer(app, { 
    controllers: [ __dirname + '/controllers/*.js'],
    middlewares: [__dirname + '/middlewares/*.js'],
})
// EXPRESS INIT
app.listen(port, ()=>{
    console.log(`Express iniciado en el puerto ${port}`);
});