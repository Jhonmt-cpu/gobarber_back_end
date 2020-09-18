import User from '@modules/users/infra/typeorm/entities/User';

export default class UserMap {
  public toDTO(user: User): any {
    return {
      id: user.id,
      name: user.name,
      avatar: user.avatar,
      created_at: user.created_at,
      updated_at: user.updated_at,
    };
  }
}
