import express from 'express'
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from './lib/dotenv'
import authenticate from './middlewares/authenticate'

import routes from './routes'

const logger = morgan('dev');

const app = express()
app.use(cors());
app.use(logger);
app.use(bodyParser.json())

app.use('/', authenticate, routes)

app.listen(8888)