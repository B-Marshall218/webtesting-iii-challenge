// Test away!

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Controls from "./Controls";


test("Buttons toggle the closed and locked states", () => {
    const { container } = render(<Controls
        locked={false}
        closed={false}
    />);

    expect(container.getElementsByClassName("toggle-btn")).toHaveLength(2);
})


test("Buttons text changes to reflect the state the door will be in if clicked", () => {
    const { getByText } = render(<Controls
        locked={true}
        closed={true}

    />)


    const toggleLocked = getByText(/unlock gate/i);
    const toggleClosed = getByText(/open gate/i);

    expect(toggleLocked).toBeTruthy()
    expect(toggleClosed).toBeTruthy()

})

test("Closed Button disabled if gate is locked", () => {
    const mockToggleClosed = jest.fn()

    const { queryByText } = render(<Controls
        locked={true}
        closed={true}
        toggleClosed={mockToggleClosed}
    />
    );




    const closedBtn = queryByText(/open gate/i);
    expect(closedBtn).toBeTruthy()

    fireEvent.click(closedBtn);
})

test("Locked Button disabled if gate is open", () => {
    const mockToggleLocked = jest.fn()

    const { getByText } = render(<Controls
        unlocked={true}
        open={true}
        toggleLocked={mockToggleLocked}
    />
    );




    const lockedBtn = getByText(/lock gate/i);
    expect(lockedBtn).toBeTruthy()

    fireEvent.click(lockedBtn);
})