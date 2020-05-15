import React from "react";
import classNames from "classnames/bind";
import { useHistory } from "react-router-dom";

import styles from "./styles.module";
import IconAbeLogo from "~/resource/icons/IconAbeLogo";
import Button from "@material-ui/core/Button";
const cx = classNames.bind(styles);

const Header = () => {
    const history = useHistory();
    const onHowToBet = pageUrl => () => {
        history.push(pageUrl);
    };
    return (
        <div className={styles.headerWrapper}>
            <IconAbeLogo className={styles.logoIcon} />
            <ul className={styles.menuList}>
                <li className={styles.menuItem}>Odds</li>
                <li className={styles.menuItem}>Futures</li>
                <li className={cx(styles.menuItem, styles.menuItemSelected)} onClick={onHowToBet("/how-to-bet")}>
                    How To Bet
                </li>
                <li className={styles.menuItem}>Leagues</li>
                <li className={styles.menuItem}>Legalization</li>
                <li className={styles.menuItem}>Insights</li>
                <li className={styles.menuItem}>Reviews</li>
                <li className={styles.menuItem}>Deals</li>
            </ul>
            <div className={styles.buttonGroup}>
                <Button className={cx(styles.buttonLogin, styles.buttonNormal)}>Log In</Button>
                <Button className={cx(styles.buttonJoin, styles.buttonNormal)}>Join Now</Button>
            </div>
        </div>
    );
};

export default Header;
