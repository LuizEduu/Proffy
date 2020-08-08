import ICreateUserDTO from '../dtos/ICreateUSerDTO';
import User from '../infra/typeorm/entities/user';

import { hash } from 'bcryptjs';
import IusersRepository from '../repositories/IUsersRepositories';
import { injectable, inject } from 'tsyringe';
import { response } from 'express';

@injectable()
export default class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IusersRepository,
  ) {}

  public async execute({
    primaryName,
    secondaryName,
    email,
    password,
  }: ICreateUserDTO): Promise<User> {
    const findUser = await this.usersRepository.findByEmail(email);

    if (findUser) {
      throw new Error('Email adress exists');
    }

    const hashedPassword = await hash(password, 8);

    const user = await this.usersRepository.create({
      primaryName,
      secondaryName,
      email,
      password: hashedPassword,
    });

    return user;
  }
}
