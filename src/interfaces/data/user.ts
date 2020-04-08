export interface IUserBasic {
  email: string;
}

export interface IUserExtended extends IUserBasic {
  adminonlyfield: number;
  adminonlyfield2: number;
  adminonlyfield3: number;
}
