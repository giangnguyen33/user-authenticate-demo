import type { LoginType, UserAuthentication } from "../common/userTypes";
import * as crypto from "crypto";

const authenticateUser = (user: LoginType): UserAuthentication | undefined => {
  //TODO: call api to get token
  const token = crypto.randomUUID();
  const obj = { username: user.email, token: token.toString() };
  return obj;
};

export { authenticateUser };
