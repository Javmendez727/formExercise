import React from "react";
import { render, screen } from "@testing-library/react";
import Inputs from "./Inputs";

describe("Inputs component", () => {
  test("should render the text passed as prop", () => {
    const InputsProps = {
      title: "First Name",
      testId: "input1_form",
    };
    render(<Inputs {...InputsProps} />);
    const firstButton = screen.getByText(/First Name/i);
    expect(firstButton).toBeInTheDocument();
    const secondButton = screen.getByTestId("input1_form");
    expect(secondButton).toBeInTheDocument();
  });

  test("should render the input with normal state", () => {
    const errorStateData = {
      title: "Nombre",
      testId: "input1_form",
      state: "error",
    };

    render(<Inputs {...errorStateData} />);

    const errorHelperElement = screen.getByTestId("error-helper");
    const inputElement = screen.getByTestId('input1_form');
    expect(errorHelperElement).toBeInTheDocument();
    expect(inputElement).toHaveClass("large_error");
  });
});