import React from "react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";

import { render } from "@testing-library/react";

import configureStore from "~/configureStore";
import history from "~/utils/history";

export const renderWithProviders = (children, customStore = {}, injectedReducer, wrapperOptions) => {
    return render(allTheProviders({ children, customStore, injectedReducer }), {
        wrapper: () => allTheProviders({ children, customStore, injectedReducer }),
        ...wrapperOptions
    });
};

const allTheProviders = ({ children, customStore, injectedReducer }) => {
    const store = configureStore(customStore, history, injectedReducer);

    return (
        <Provider store={store}>
            <Router history={history}>{children}</Router>
        </Provider>
    );
};
