"use strict";

import React from "react";
import ErrorPage from "../index";
import { render } from "@testing-library/react";

describe("Error Page Component", () => {
    it("should have error page details", () => {
        const { getByTestId } = render(<ErrorPage />);
        expect(getByTestId("error-content")).toBeInTheDocument();
    });
});
