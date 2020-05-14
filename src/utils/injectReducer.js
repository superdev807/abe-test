import React, { Component, useContext, useEffect } from "react";
import hoistNonReactStatics from "hoist-non-react-statics";
import { ReactReduxContext } from "react-redux";

import getInjectors from "./reducerInjectors";

/**
 * Dynamically injects a reducer
 *
 * @param {string} key A key of the reducer
 * @param {function} reducer A reducer that will be injected
 *
 */
export default ({ key, reducer }) => WrappedComponent => {
    class ReducerInjector extends Component {
        static WrappedComponent = WrappedComponent;

        static contextType = ReactReduxContext;

        static displayName = `withReducer(${WrappedComponent.displayName || WrappedComponent.name || "Component"})`;

        constructor(props, context) {
            super(props, context);

            getInjectors(context.store).injectReducer(key, reducer);
        }

        render() {
            return <WrappedComponent {...this.props} />;
        }
    }

    return hoistNonReactStatics(ReducerInjector, WrappedComponent);
};

const useInjectReducer = ({ key, reducer }) => {
    const context = useContext(ReactReduxContext);
    useEffect(() => {
        getInjectors(context.store).injectReducer(key, reducer);
    }, []);
};

export { useInjectReducer };
