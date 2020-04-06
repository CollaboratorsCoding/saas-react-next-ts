export interface IUser {
  email: string;
  password: string;
  _id: string;
  __v: number;
}

export interface IUserStore {
  user: IUser | null;
  checkedAuth: boolean;
  getMe: () => {};
  signIn: (form: { email: string; password: string }) => {};
  logout: () => {};
}
