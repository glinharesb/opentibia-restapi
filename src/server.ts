import 'reflect-metadata';
import express from 'express';

import { routes } from './routes';
import { connectToDatabase } from './database';

const app = express();

app.use(routes);

connectToDatabase();

const PORT = Number(process.env.APP_PORT) || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`~> Server listening on: http://localhost:${PORT}`);
});
