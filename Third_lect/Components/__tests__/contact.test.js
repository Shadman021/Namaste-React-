import { render,screen } from "@testing-library/react"
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("Should load contact us component",() => {
    render(<Contact />);
    const button = screen.getByText("submit");
    // Assertion
    
    expect(button).toBeInTheDocument();
});