import express, { Request, Response, NextFunction } from 'express';

import 'reflect-metadata';
import 'express-async-errors';

import cors from 'cors';

import routes from './routes';

import '@shared/infra/typeorm';
import '@shared/container';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/* app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
}); */

app.listen(3333, () => console.log('Server Running'));
