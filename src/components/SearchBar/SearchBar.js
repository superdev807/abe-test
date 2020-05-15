// This is shared across all pages

import React from "react";
import InputBase from "@material-ui/core/InputBase";
import IconSearchBar from "~/resource/icons/IconSearchBar";
import styles from "./styles.module";

const SearchBar = () => {
    return (
        <div className={styles.searchBar}>
            <InputBase placeholder="Search How To Bet" classes={{ root: styles.searchRoot, input: styles.searchInput }} />
            <IconSearchBar className={styles.searchIcon} />
        </div>
    );
};

export default SearchBar;
