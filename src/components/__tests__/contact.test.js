import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("testing contact render", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    // Assertion
    expect(heading).toBeInTheDocument();
});

test("Button load check", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    // Assertion
    expect(button).toBeInTheDocument();
});

it("Input 2 boxes load", () => {
    render(<Contact />);
    const input = screen.getAllByRole("textbox");
    // Assertion
    expect(input.length).toBe(2);
    // console.log(input);
});