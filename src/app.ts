import express, { Application, NexFunction, Port, Router } from 'express';
import bodyParser  from 'body-parser';

import { dbConnect } from './db/db';

const router = require('./network/routers')

//Connecting to MongoDb
dbConnect();

const app: Application = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

router(app);


app.use('/app', express.static('public'))

const port: Port = 3000;
app.listen(port, () => console.log(`Server runing on port ${port}`))
