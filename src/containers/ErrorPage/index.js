import React from "react";
import styles from "./styles.module";

const ErrorPage = () => {
    return (
        <section className={styles.errorPage} data-testid="error-content">
            Page Not Found
        </section>
    );
};

export default ErrorPage;
