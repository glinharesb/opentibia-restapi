import { getRepository, Repository } from 'typeorm';
import { Accounts } from '../../entities/Accounts';

export class AccountsService {
  private readonly accountsRepository: Repository<Accounts>;

  constructor() {
    this.accountsRepository = getRepository(Accounts);
  }

  async create({
    name,
    password,
    secret,
    type,
    premium_ends_at,
    email,
    creation,
  }): Promise<Accounts | Error> {
    try {
      if (await this.accountsRepository.findOne({ name })) {
        throw new Error('account already exists');
      }

      const account = this.accountsRepository.create({
        name,
        password,
        secret,
        type,
        premium_ends_at,
        email,
        creation,
      });

      await this.accountsRepository.save(account);

      return account;
    } catch (error) {
      return error;
    }
  }

  async findById(id: any): Promise<Accounts | Error> {
    try {
      if (isNaN(id)) {
        throw new Error('param id must be a number');
      }

      const account = await this.accountsRepository.findOne({ id });

      if (!account) {
        throw new Error('account does not exists');
      }

      return account;
    } catch (error) {
      return error;
    }
  }

  async findAll(): Promise<Accounts[] | Error> {
    try {
      const accounts = await this.accountsRepository.find();

      return accounts;
    } catch (error) {
      return error;
    }
  }
}
