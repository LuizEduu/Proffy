import IUsersRepository from '@useCases/users/repositories/IUsersRepositories';
import User from '../infra/typeorm/entities/user';
import { injectable, inject } from 'tsyringe';
import { compare } from 'bcryptjs';

import authConfig from '@config/authConfig';
import { sign } from 'jsonwebtoken';

interface IResponse {
  user: User;
  token: string;
}

@injectable()
export default class AuthenticateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute(email: string, password: string): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new Error('Incorrect email, password combination');
    }

    const comparePassword = await compare(password, user.password);

    if (!comparePassword) {
      throw new Error('Incorrect email, password combination');
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    });

    return {
      user,
      token,
    };
  }
}
