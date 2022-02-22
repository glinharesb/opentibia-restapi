import { Router } from 'express';
import { AccountsController } from './controllers/accounts/AccountsController';

const routes = Router();

routes.get('/accounts', new AccountsController().findAll);
routes.post('/accounts', new AccountsController().create);

export { routes };
