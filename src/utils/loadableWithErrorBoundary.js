import React, { lazy, Suspense } from "react";
import withErrorBoundary from "~/hocs/withErrorBoundary";

const loadableWithErrorBoundary = (importFunc, { fallback = null } = { fallback: null }) => {
    const LazyComponent = lazy(importFunc);

    return props =>
        withErrorBoundary(() => (
            <Suspense fallback={fallback}>
                <LazyComponent {...props} />
            </Suspense>
        ));
};

export default loadableWithErrorBoundary;
