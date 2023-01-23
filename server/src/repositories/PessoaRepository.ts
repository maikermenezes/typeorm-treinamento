import { EntityRepository, Repository } from 'typeorm';
import { User } from '../models';
import { UpdateUser, UserType } from '../DTOs/User';

@EntityRepository(User)
export default class UserRepository extends Repository<User> {
  public async findById(id: string): Promise<User | false | string> {
    try {
      const user = await this.findOne(id);

      if (!user) {
        return false;
      }

      return user;
    } catch (error) {
      return error.severity || error;
    }
  }

  public async findByEmail(email: string): Promise<User | false | string> {
    try {
      const user = await this.findOne({ where: { email } });

      if (!user) {
        return false;
      }

      return user;
    } catch (error) {
      return error.severity || error;
    }
  }

  public async patch(
    id: string,
    user: UserType,
  ): Promise<User | string> {
    try {
      const auxUser = { ...user };
      await UpdateUser.validateAsync(auxUser);

      await this.update(id, auxUser);
      const updatedUser = await this.findOne(id);

      return updatedUser;
    } catch (error) {
      return error;
    }
  }
}
