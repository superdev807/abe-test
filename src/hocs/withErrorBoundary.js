import React from "react";
import ErrorPage from "~/containers/ErrorPage";
import useErrorBoundary from "use-error-boundary";

const withErrorBoundary = component => {
    const { ErrorBoundary } = useErrorBoundary();
    return <ErrorBoundary render={component} renderError={error => <ErrorPage error={error} />} data-testid="error-boundary" />;
};
export default withErrorBoundary;
