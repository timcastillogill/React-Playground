import { render, screen } from "@testing-library/react";
import DesktopNavBar from "./DesktopNavBar";

describe("DesktopNavBar", () => {
  it("shows a hamburger menu in a horizontal position", () => {
    render(<DesktopNavBar />);
    const burgerMenuHorizontal = screen.getByRole("button", { name: "menu" });
    expect(burgerMenuHorizontal).toBeInTheDocument();
  });
});
