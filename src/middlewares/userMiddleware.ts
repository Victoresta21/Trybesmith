import { Response, Request, NextFunction } from 'express';
import validateUser from './validateUser';

class UserMiddleware {
  public validationUser = (req: Request, res: Response, next: NextFunction) => {
    const { username, classe, level, password } = req.body;
    const { error } = validateUser.validate({ username, classe, level, password });
    if (error?.message.includes('is required')) {
      return res.status(400).json({ message: error.message });
    }
    if (error?.message.includes('must be')) {
      return res.status(422).json({ message: error.message });
    }

    if (error?.message.includes('length must be')) {
      return res.status(422).json({ message: error.message });
    }

    if (error?.message.includes('must be greater')) {
      return res.status(422).json({ message: error.message });
    }

    next();
  };
}

export default UserMiddleware;
