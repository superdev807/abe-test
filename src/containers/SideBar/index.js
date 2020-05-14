// This is shared across all pages

import React from "react";
import SearchBar from "~/components/SearchBar";
import CollapseBar from "~/components/CollapseBar";
import styles from "./styles.module";
export default function SideBar() {
    return (
        <div className={styles.sideBar}>
            <SearchBar />
            <CollapseBar />
        </div>
    );
}
