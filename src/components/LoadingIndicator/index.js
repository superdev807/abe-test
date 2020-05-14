import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import classNames from "classnames/bind";

import styles from "./styles.module";

const cx = classNames.bind(styles);

const LoadingIndicator = ({ center, className, fullscreen, size, thickness, ...props }) => (
    <div className={cx(className, { center, fullscreen })} {...props}>
        <CircularProgress color="primary" size={size} thickness={thickness} />
    </div>
);

export default LoadingIndicator;
