import { Request, Response } from 'express';
import { AccountsService } from '../../services/accounts/AccountsService';

export class AccountsController {
  async create(request: Request, response: Response) {
    const service = new AccountsService();
    const result = await service.create(request.body);

    if (result instanceof Error) {
      return response.status(400).json({ message: result.message });
    }

    return response.json(result);
  }

  async findAll(request: Request, response: Response) {
    const service = new AccountsService();
    const result = await service.findAll();

    if (result instanceof Error) {
      return response.status(400).json({ message: result.message });
    }

    return response.json(result);
  }
}
