import { Repository, getRepository } from 'typeorm';

import IUsersRepository from '@useCases/users/repositories/IUsersRepositories';
import ICreateUserDTO from '@useCases/users/dtos/ICreateUSerDTO';
import User from '../entities/user';

export default class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const findUserByEmail = await this.repository.findOne({
      where: { email },
    });

    return findUserByEmail;
  }

  public async findById(id: string): Promise<User | undefined> {
    const findUserById = await this.repository.findOne({ where: { id } });

    return findUserById;
  }

  public async create(userData: ICreateUserDTO): Promise<User> {
    const user = this.repository.create(userData);

    await this.repository.save(user);

    return user;
  }
}
