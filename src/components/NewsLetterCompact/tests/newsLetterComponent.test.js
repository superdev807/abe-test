"use strict";

import React from "react";
import NewsLetterCompact from "../index";
import { render } from "@testing-library/react";
import { fireEvent, waitForElement } from "@testing-library/react";

describe("MiniCard Component with iconType true", () => {
    let getByTestId;
    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, "useState");
    useStateSpy.mockImplementation(init => [init, setState]);

    beforeEach(async () => {
        ({ getByTestId } = render(<NewsLetterCompact />));
        await waitForElement(() => getByTestId("news-letter-compact"));
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("should have news title", () => {
        expect(getByTestId("news-title")).toBeInTheDocument();
    });
    it("should have news description", () => {
        expect(getByTestId("news-description")).toBeInTheDocument();
    });
    it("should have signup modal", () => {
        expect(getByTestId("signup-modal")).toBeInTheDocument();
    });

    it("should have email edited and validate check", () => {
        fireEvent.change(getByTestId("modal-input"), { target: { value: "tester@gmail.com" } });
        expect(getByTestId("modal-input").value).toBe("tester@gmail.com");
        fireEvent.click(getByTestId("sing-up-button"));
        expect(setState).toHaveBeenCalled();
    });

    it("should have validation text field", () => {
        fireEvent.change(getByTestId("modal-input"), { target: { value: "tester" } });
        expect(getByTestId("modal-input").value).toBe("tester");
        fireEvent.click(getByTestId("sing-up-button"));
        expect(setState).toHaveBeenCalled();
        expect(getByTestId("validation-text")).toBeInTheDocument();
    });
});
