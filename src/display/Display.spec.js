// Test away!

import React from "react";
import { render, getByTestId } from "@testing-library/react";
import Display from "./Display";


test("If gate is open shows unlocked", () => {
    const { getByText } = render(<Display />);

    getByText(/open/i);
    getByText(/unlocked/i);
})

test("If gate is closed shows closed", () => {
    const { getByText } = render(<Display closed={true} />);

    getByText(/closed/i);

})

test("If gate is locked should display locked", () => {
    const { getByText } = render(<Display locked={true} />);

    getByText(/locked/i);

})

test("If gate is unlocked should display unlocked", () => {
    const { getByText } = render(<Display locked={false} />);

    getByText(/unlocked/i);

})

test("When locked uses the red led class", () => {
    const { container } = render(<Display locked={true} closed={true} />)
    const element = container.querySelectorAll(".red-led");
    expect(element.length).toEqual(2)
});

test("When unlocked or open uses the green-led class", () => {
    const { container } = render(<Display unlocked={true} open={true} />)
    const element = container.querySelectorAll(".green-led");
    expect(element.length).toEqual(2);
});