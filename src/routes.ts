import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => {
  response.send('Teste');
  response.end();
});

export { routes };
