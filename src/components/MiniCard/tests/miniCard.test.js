"use strict";

import React from "react";
import MiniCard from "../index";
import { render } from "@testing-library/react";
import { waitForElement } from "@testing-library/react";
const mockHistoryPush = jest.fn();

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useHistory: () => ({
        push: mockHistoryPush
    })
}));

describe("MiniCard Component with iconType true", () => {
    let getByTestId;

    beforeEach(async () => {
        ({ getByTestId } = render(<MiniCard imageSrc={"tempImage"} cardText={"cardText"} iconType={true} miniText={"miniText"} />));
        await waitForElement(() => getByTestId("mini-card"));
    });

    it("should have image section", () => {
        expect(getByTestId("image-section")).toBeInTheDocument();
    });
    it("should have card text", () => {
        expect(getByTestId("card-text")).toBeInTheDocument();
    });
    it("should have logo icon", () => {
        expect(getByTestId("icon-right")).toBeInTheDocument();
    });
    it("should have mini text", () => {
        expect(getByTestId("mini-text")).toBeInTheDocument();
    });
});

describe("MiniCard Component with iconType false", () => {
    let getByTestId;

    it("should have image section", () => {
        ({ getByTestId } = render(<MiniCard imageSrc={"tempImage"} cardText={"cardText"} iconType={false} />));
        expect(getByTestId("icon-plus")).toBeInTheDocument();
    });
});
