"use strict";

import React from "react";
import ErrorPage from "../index";
import { fireEvent, waitForElement, waitForElementToBeRemoved } from "@testing-library/react";
import { renderWithProviders } from "~/utils/tests/test";

const mockHistoryPush = jest.fn();

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useHistory: () => ({
        push: mockHistoryPush
    })
}));

describe("Error Page Component", () => {
    it("should have error page details", () => {
        const { getByTestId } = renderWithProviders(<ErrorPage />);
        expect(getByTestId("error-img")).toBeInTheDocument();
        expect(getByTestId("error-text-section")).toBeInTheDocument();
        expect(getByTestId("go-home-button")).toBeInTheDocument();
    });

    it("should go to the home page when clicked", async () => {
        const { getByTestId } = renderWithProviders(<ErrorPage />);
        fireEvent.click(getByTestId("go-home-button"));
        expect(mockHistoryPush).toHaveBeenCalledWith("/");
    });
});
