import React from "react";
import styles from "./styles.module";

const ErrorPage = () => {
    return (
        <section className={styles.errorPage} data-testid="error-content">
            Something's wrong
        </section>
    );
};

export default ErrorPage;
