import 'express-async-errors';
import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';

import { AppError } from './errors/AppError';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'Error',
      message: err.message
    });
  }

  return response.status(500).json({
    status: 'Error',
    message: 'Internal server error'
  });
});

export default app;
