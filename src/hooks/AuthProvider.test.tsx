import { act, renderHook } from "@testing-library/react";
import AuthProvider, { useAuth } from "./AuthProvider";
import * as authenticateApi from "../apis/authenticateApi";

describe("AuthProvider", () => {
  it("should return initial values empty for username, password", () => {
    const { result } = renderHook(() => useAuth());
    expect(result.current.user).toEqual("");
    expect(result.current.token).toEqual("");
    expect(localStorage.getItem("user")).toBeNull();
  });

  it("should update username and token when login succeeded", () => {
    jest
      .spyOn(authenticateApi, "authenticateUser")
      .mockReturnValue({ username: "email", token: "token" });

    const wrapper = ({ children }: any) => (
      <AuthProvider>{children}</AuthProvider>
    );

    const { result } = renderHook(() => useAuth(), { wrapper });

    const { login } = result.current;
    act(() => {
      login({ email: "email", password: "password" });
    });
    expect(result.current.user).toEqual("email");
    expect(result.current.token).toEqual("token");
    expect(localStorage.getItem("user")).toEqual(
      JSON.stringify({
        username: "email",
        token: "token",
      }),
    );
  });

  it("should return initial values empty for username, password when login failed", () => {
    jest.spyOn(authenticateApi, "authenticateUser").mockReturnValue(undefined);

    const wrapper = ({ children }: any) => (
      <AuthProvider>{children}</AuthProvider>
    );

    const { result } = renderHook(() => useAuth(), { wrapper });

    const { login } = result.current;
    act(() => {
      login({ email: "email", password: "password" });
    });
    expect(result.current.user).toEqual("");
    expect(result.current.token).toEqual("");
    expect(localStorage.getItem("user")).toBeNull();
  });
});
