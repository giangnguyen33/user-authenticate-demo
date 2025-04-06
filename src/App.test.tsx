import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
describe("App", () => {
  it("render the App page", () => {
    render(<App />);
    expect(screen.getByText("User authenticate demo")).toBeInTheDocument();
  });
});
