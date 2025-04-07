import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import AppRoutes from "./AppRoutes";
import AuthProvider, { AuthContext } from "../hooks/AuthProvider";

describe("AppRoutes", () => {
  it("should link to Login page when path /", () => {
    render(<AppRoutes />, { wrapper: MemoryRouter });

    expect(screen.getByTestId("LoginPage")).toBeInTheDocument();
  });

  it("should link to Login page when path /login", () => {
    const route = "/login";
    render(
      <MemoryRouter initialEntries={[route]}>
        <AppRoutes />
      </MemoryRouter>,
    );
    expect(screen.getByTestId("LoginPage")).toBeInTheDocument();
  });

  it("should link to Login page when path /welcome but user not login yet", () => {
    const route = "/welcome";
    render(
      <MemoryRouter initialEntries={[route]}>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </MemoryRouter>,
    );
    expect(screen.getByTestId("LoginPage")).toBeInTheDocument();
  });

  it("should link to Welcome page when path /welcome but user login yet", async () => {
    const route = "/welcome";
    const providerPropsValues = {
      user: "user",
      token: "123",
      login: jest.fn(),
      logout: jest.fn(),
    };
    render(
      <MemoryRouter initialEntries={[route]}>
        <AuthContext.Provider value={providerPropsValues}>
          <AppRoutes />
        </AuthContext.Provider>
      </MemoryRouter>,
    );
    await waitFor(() => {
      expect(screen.getByTestId("WelcomePage")).toBeInTheDocument();
    });
  });
});
