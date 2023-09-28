export interface IUser {
  info: IUserInfo;
}

export interface IUserInfo {
  sub: string;
  email: string;
  name: string;
  picture: string;
}
