import { fireEvent, render, screen } from "@testing-library/react";
import AuthProvider, { AuthContext } from "../hooks/AuthProvider";
import Welcome from "./Welcome";

describe("Welcome Page", () => {
  it("should render Welcome Page", () => {
    const providerPropsValues = {
      user: "user",
      token: "123",
      login: jest.fn(),
      logout: jest.fn(),
    };
    render(
      <AuthContext.Provider value={providerPropsValues}>
        <Welcome />
      </AuthContext.Provider>,
    );
    expect(screen.getByText("Welcome user")).toBeInTheDocument();
    expect(screen.getByText("Logout")).toBeInTheDocument();
  });

  it("should call logout when user clicks on Logout button", async () => {
    localStorage.setItem(
      "user",
      JSON.stringify({ user: "user", token: "123" }),
    );

    render(
      <AuthProvider>
        <Welcome />
      </AuthProvider>,
    );

    const button = screen.getByText("Logout");
    fireEvent.click(button);
    expect(localStorage.getItem("user")).toBeNull();
  });
});
