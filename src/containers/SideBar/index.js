import React from "react";
import SearchBar from "~/components/SearchBar";
import CollapseBar from "~/components/CollapseBar";
import styles from "./styles.module";

const SideBar = () => {
    return (
        <div className={styles.sideBar}>
            <SearchBar />
            <CollapseBar />
        </div>
    );
};

export default SideBar;
