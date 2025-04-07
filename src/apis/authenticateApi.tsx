import type { LoginType, UserAuthentication } from "../common/userTypes";

const authenticateUser = (user: LoginType): UserAuthentication | undefined => {
  //TODO: call api to get token
  const token = `token-${Math.random()}`;
  const obj = { username: user.email, token };
  return obj;
};

export { authenticateUser };
