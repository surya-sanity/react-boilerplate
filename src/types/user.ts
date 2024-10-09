import { CommonModel } from "./common";

export interface User extends CommonModel {
  email: string;
  userName: string;
}
