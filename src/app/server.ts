import express, { Application } from 'express';
import routes from './routes';

const app: Application = express();
const port = 1234;

app.use('/api', routes);

app.listen(port, () => {
    console.log('server run on port: ' + port);
});
