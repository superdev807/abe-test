import React from "react";
import classNames from "classnames/bind";
import styles from "./styles.module";
import IconInstagram from "~/resource/icons/IconInstagram";
import IconTwitter from "~/resource/icons/IconTwitter";
const cx = classNames.bind(styles);

const Footer = () => {
    return (
        <div className={styles.footerWrapper}>
            <IconInstagram className={styles.socialIcon} />
            <IconTwitter className={styles.socialIcon} />
            <ul className={styles.footerMenu}>
                <li className={styles.menuItem}>About Us</li>
                <li className={styles.menuItem}>How abe Works</li>
                <li className={styles.menuItem}>Privacy Policy</li>
                <li className={styles.menuItem}>Terms Of Service</li>
            </ul>
            <div className={styles.privacyPolicy}>
                @2020 PopOdds inc. Reserved. <br />
                If you or someone you know has a gambling problem and wants help, call 1-800-Gambler.
                <br />
                You must be 21 years or older to place a bet.
            </div>
        </div>
    );
};

export default Footer;
