// This is shared across all pages

import React, { useEffect } from "react";
import { Switch, Route, useHistory, Redirect, useLocation } from "react-router-dom";
import SideBar from "~/containers/SideBar";
import Header from "~/components/Header";
import styles from "./styles.module";
export default function ContentBar() {
    return <div className={styles.contentBar}></div>;
}
