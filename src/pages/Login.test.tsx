import { render, screen } from "@testing-library/react";
import Login from "./Login";

describe("Login Page", () => {
  it("should render Login Page", () => {
    render(<Login />);
    expect(screen.getByText("Email:")).toBeInTheDocument();
    const emailInput = screen.getByLabelText("Email:", { selector: "input" });
    expect(emailInput).toBeInTheDocument();
    expect(emailInput).toHaveAttribute(
      "placeholder",
      "Please enter your email",
    );

    expect(screen.getByText("Password:")).toBeInTheDocument();
    const passwordInput = screen.getByLabelText("Password:", {
      selector: "input",
    });
    expect(passwordInput).toBeInTheDocument();
    expect(passwordInput).toHaveAttribute(
      "placeholder",
      "Please enter your password",
    );
  });
});
