import { User } from '@/types/user.d';
import { Request, Response } from 'express';

const user: { currentUser: User } = {
  currentUser: {
    isLoggedIn: false,
  },
};

const login = (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (email == 's.emelyanov@brterminal.ru' && password == '12345') {
    user.currentUser = {
      id: 0,
      name: 'Emelyanov Sergei',
      company: 'Rast',
      role: {
        id: 1,
        title: 'Tech Director',
      },
      isLoggedIn: true,
    };
    res.json(user.currentUser);
  } else if (email == 'iam@onnet.su' && password == '54321') {
    user.currentUser = {
      id: 1,
      name: 'Kirill Sysoev',
      company: 'Onnet',
      role: {
        id: 0,
        title: 'Developer',
      },
      isLoggedIn: true,
    };
    res.json(user.currentUser);
  } else {
    res.status(401).send();
  }
};

const logout = (_: any, res: Response) => {
  user.currentUser = { isLoggedIn: false };
  res.send({ success: true });
};
const getUser = (_: any, res: Response) => {
  if (!user.currentUser.isLoggedIn) {
    res.status(204).send();
  } else {
    res.json(user.currentUser);
  }
};
export default {
  'POST /api/login': login,
  'POST /api/logout': logout,
  '/api/currentUser': getUser,
};
