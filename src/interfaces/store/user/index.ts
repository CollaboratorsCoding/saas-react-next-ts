import { signInType } from '@schemas/auth';
export interface IUserMe {
  email: string;
  password: string;
  _id: string;
  __v: number;
}

export interface IUserStore<T = IUserMe | null> {
  currentUser: T;
  checkedAuth: boolean;
  error: string;
  getMe(): void;
  signIn(form: signInType): void;
  logout(): void;
  me: T;
}

export interface IUserStoreInitialData {
  currentUser: IUserMe | null;
  checkedAuth: boolean;
}
