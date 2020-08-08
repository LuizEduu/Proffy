import User from '../infra/typeorm/entities/user';
import ICreateUserDTO from '../dtos/ICreateUSerDTO';

export default interface IusersRepository {
  create(data: ICreateUserDTO): Promise<User>;
  findById(id: string): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
}
