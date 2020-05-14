// This is shared across all pages

import React, { useEffect } from "react";
import { Switch, Route, useHistory, Redirect, useLocation } from "react-router-dom";
import SideBar from "~/containers/SideBar/Loadable";
import ContentBar from "~/containers/ContentBar/Loadable";
import Header from "~/components/Header";
import styles from "./styles.module";
export default function App() {
    return (
        <div className={styles.app}>
            <div className={styles.content}>
                <Header />
                <div className={styles.bodyContent}>
                    <SideBar />
                    <ContentBar />
                </div>
            </div>
        </div>
    );
}
