import { Router } from 'express';
import { AccountsController } from './controllers/accounts/AccountsController';

const routes = Router();

routes.get('/accounts', new AccountsController().findAll);
routes.get('/accounts/:id', new AccountsController().findById);
routes.post('/accounts', new AccountsController().create);

export { routes };
