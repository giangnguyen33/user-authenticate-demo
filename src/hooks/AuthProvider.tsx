import { createContext, useContext, useState, type ReactNode } from "react";
import * as authenticateApi from "../apis/authenticateApi";

type LoginType = {
  email: string;
  password: string;
};
interface AuthProviderProps {
  user: string;
  token: string;
  login(data: LoginType): void;
  logout(): void;
}

const AuthContext = createContext<AuthProviderProps>({
  user: "",
  token: "",
  login: () => {},
  logout: () => {},
});

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState("");
  const [token, setToken] = useState("");

  const resetUserToken = () => {
    setUser("");
    setToken("");
    localStorage.removeItem("user");
  };
  const login = (data: LoginType) => {
    const response = authenticateApi.authenticateUser(data);
    if (response) {
      setUser(response.username);
      setToken(response.token);
      localStorage.setItem("user", JSON.stringify(response));
    } else {
      resetUserToken();
    }
  };

  const logout = () => {
    resetUserToken();
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
