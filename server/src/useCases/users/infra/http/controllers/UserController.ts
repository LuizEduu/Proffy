import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateUserService from '@useCases/users/services/CreateUserService';

export default class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { primaryName, secondaryName, email, password } = request.body;

    const createUserService = container.resolve(CreateUserService);

    const user = await createUserService.execute({
      primaryName,
      secondaryName,
      email,
      password,
    });

    delete user.password;

    return response.status(201).json(user);
  }
}
