import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Login from "./Login";
import { BrowserRouter } from "react-router";
import * as Router from "react-router";

const mockedNavigator = jest.fn();

jest.mock("react-router", () => {
  // Require the original module to not be mocked...
  const originalModule = jest.requireActual("react-router");

  return {
    __esModule: true,
    ...originalModule,
    // add your noops here
    useNavigate: () => mockedNavigator,
  };
});

describe("Login Page", () => {
  it("should render Login Page", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>,
    );
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

  it("should stay in login when user not enter info and click login", async () => {
    // jest.spyOn(Router, "useNavigate");
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>,
    );
    const button = screen.getByText("Login");
    fireEvent.submit(button);

    expect(mockedNavigator).not.toHaveBeenCalledWith("/welcome");
  });

  it("should navigate to welcome when user enter valid info and click login", async () => {
    jest.spyOn(Router, "useNavigate");
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>,
    );
    const emailInput = screen.getByLabelText("Email:", { selector: "input" });
    const passwordInput = screen.getByLabelText("Password:", {
      selector: "input",
    });
    const button = screen.getByText("Login");
    fireEvent.change(emailInput, { target: { value: "hello@134" } });
    fireEvent.change(passwordInput, { target: { value: "134" } });
    fireEvent.submit(button);

    await waitFor(() => {
      expect(mockedNavigator).toHaveBeenCalledWith("/welcome");
    });
  });
});
