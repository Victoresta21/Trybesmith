import UserModel from '../models/userModel';

class UserService {
  public model = new UserModel();

  public create = async (
    username: string,
    classe: string,
    level: number,
    password: string,
  ): Promise<{ token: string }> => {
    const token = await this.model.create(username, classe, level, password);
    return token;
  };
}

export default UserService;
