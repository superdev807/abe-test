import React from "react";
import axios from "axios";
import history from "~/utils/history";
import { render, waitForElement } from "@testing-library/react";
import { Router } from "react-router-dom";
import withErrorBoundary from "../withErrorBoundary";
import App from "~/containers/App";

const WrapComponent = () => {
    return (
        <div data-testid="temp-error-msg">
            <h1 data-testid="temp-error-child"></h1>
        </div>
    );
};

const TempComponent = () => {
    return withErrorBoundary(WrapComponent);
};

describe("When no JS errors are caught in a child component", () => {
    it("should render the child component", async () => {
        const { getByTestId } = render(<TempComponent />);
        await waitForElement(() => getByTestId("temp-error-msg"));
        expect(getByTestId("temp-error-child")).toBeInTheDocument();
    });
});

describe("history navigation url change", () => {
    it("When not defined URL, should go to error page", () => {
        history.push("/some/bad/route");
        const { getByTestId } = render(
            <Router history={history}>
                <App />
            </Router>
        );
        expect(getByTestId("error-content")).toBeInTheDocument();
    });
});

jest.mock("axios");

const axiosMock = () => {
    axios.request.mockRejectedValue({ error: "some error" });
};

describe("When API fail error are caught, error page shoud be in the document", () => {
    axiosMock();

    it("should render error page", () => {
        const { getByTestId } = render(
            <Router history={history}>
                <App />
            </Router>
        );
        expect(getByTestId("error-content")).toBeInTheDocument();
    });
});

const mockFn = jest.fn();
describe("When error, error page should be in the document", () => {
    mockFn.mockRejectedValue({ error: "some error" });

    it("should render error page", () => {
        const { getByTestId } = render(
            <Router history={history}>
                <App />
            </Router>
        );
        expect(getByTestId("error-content")).toBeInTheDocument();
    });
});
