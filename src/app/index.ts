import dotenv from 'dotenv';
import express, { Application } from 'express';
import 'reflect-metadata';
import backofficeRoutes from './application/backoffice/routes';

dotenv.config({path: __dirname + '/../../.env'});

const app: Application = express();
const port = process.env.NODE_PORT;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

backofficeRoutes(app, '/backoffice');

app.listen(port, () => {
    console.log('server run on port: ' + port);
});
