import React from "react";
import { render, waitForElement } from "@testing-library/react";
import loadableWithErrorBoundary from "~/utils/loadableWithErrorBoundary";

const LazyComponent = loadableWithErrorBoundary(() => import("./TestLazyComponent.js"), { fallback: "loading" });

const LazyComponentNoFallback = loadableWithErrorBoundary(() => import("./TestLazyComponent.js"));

describe("utils/loadable", () => {
    it("get the fallback initially, then lazy loaded component", async () => {
        const { getByText } = render(<LazyComponent />);

        expect(getByText(/loading/i)).toBeInTheDocument();

        const lazyElement = await waitForElement(() => getByText(/i am lazy/i));
        expect(lazyElement).toBeInTheDocument();
    });

    it("lazy loaded component is loaded with no fallback", async () => {
        const { getByText } = render(<LazyComponentNoFallback />);

        const lazyElement = await waitForElement(() => getByText(/i am lazy/i));
        expect(lazyElement).toBeInTheDocument();
    });
});
