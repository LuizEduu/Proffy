import { container } from 'tsyringe';
import IUsersRepository from '@useCases/users/repositories/IUsersRepositories';
import UsersRepository from '@useCases/users/infra/typeorm/repositories/UsersRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);
