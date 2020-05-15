"use strict";

import React from "react";
import ContentBar from "../index";
import howToBet from "~/utils/data/how-to-bet/index";
import { waitForElement, render, fireEvent } from "@testing-library/react";

describe("Error Page Component", () => {
    let getByTestId;
    const scrollSpy = jest.fn();
    global.scrollTo = scrollSpy;

    beforeEach(async () => {
        ({ getByTestId } = render(<ContentBar markDownText={howToBet} nextTitle={"next title"} />));
        await waitForElement(() => getByTestId("content-bar"));
    });

    it("should have next title", () => {
        expect(getByTestId("next-title")).toBeInTheDocument();
        expect(getByTestId("scroll-up")).toBeInTheDocument();
    });

    it("should call scroll up function", () => {
        fireEvent.click(getByTestId("scroll-up"));
        expect(scrollSpy).toHaveBeenCalled();
    });
});
