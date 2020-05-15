"use strict";

import React from "react";
import Header from "../Header";
import { render } from "@testing-library/react";
import { fireEvent } from "@testing-library/react";
const mockHistoryPush = jest.fn();

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useHistory: () => ({
        push: mockHistoryPush
    })
}));

describe("Header Component", () => {
    it("should have how-to-bet item", () => {
        const { getByTestId } = render(<Header />);
        expect(getByTestId("how-to-bet")).toBeInTheDocument();
    });
    it("should go to how-to-bet page when clicking how-to-bet item", () => {
        const { getByTestId } = render(<Header />);
        fireEvent.click(getByTestId("how-to-bet"));
        expect(mockHistoryPush).toHaveBeenCalledWith("/how-to-bet");
    });
});
