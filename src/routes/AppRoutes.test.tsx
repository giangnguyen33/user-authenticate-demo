import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import AppRoutes from "./AppRoutes";

describe.only("AppRoutes", () => {
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
});
