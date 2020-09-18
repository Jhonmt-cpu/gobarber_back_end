import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateUserService from '@modules/users/services/CreateUserService';
import UserMap from '@modules/users/utils/UserMap';

const userMap = new UserMap();

export default class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const createUser = container.resolve(CreateUserService);

    const user = await createUser.execute({
      name,
      email,
      password,
    });

    const userWithoutPassword = userMap.toDTO(user);

    return response.json(userWithoutPassword);
  }
}