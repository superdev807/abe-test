import React from "react";
import loadableWithErrorBoundary from "~/utils/loadableWithErrorBoundary";
import LoadingIndicator from "~/components/LoadingIndicator";

export default loadableWithErrorBoundary(() => import("./SearchBar"), {
    fallback: <LoadingIndicator />
});
