// Test away
import React from "react";
import { render } from "@testing-library/react";
import Dashboard from "./Dashboard";

test("shows controls and display", () => {
    const { getByText } = render(<Dashboard />);
    const display = getByText(/open/i);
    const controls = getByText(/close gate/i);

    expect(display).toBeTruthy()
    expect(controls).toBeTruthy()





});






