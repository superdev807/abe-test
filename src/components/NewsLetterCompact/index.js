import React, { useState } from "react";
import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";
import imageNews from "~/resource/images/newsLetter.png";
import styles from "./styles.module";

import { emailValidate } from "~/utils/validation";
const NewsLetterCompact = () => {
    const [validCheck, setValidCheck] = useState(true);
    const [email, setEmail] = useState("");
    const signUpClick = () => {
        if (!emailValidate(email)) setValidCheck(false);
    };
    const emailChange = e => {
        setEmail(e.target.value);
        setValidCheck(true);
    };
    return (
        <div className={styles.newsLetterCompact} data-testid="news-letter-compact">
            <div className={styles.newsTitle} data-testid="news-title">
                <span>Bet Smarter</span> <br />
                with abe insights
            </div>
            <div className={styles.newsDescription} data-testid="news-description">
                The 3-minute newsletter with fresh takes on the betting news you need to start your day.
            </div>
            <div className={styles.signUpModal} data-testid="signup-modal">
                <InputBase
                    placeholder="your email here"
                    classes={{ root: validCheck ? styles.emailRoot : styles.emailWarning, input: styles.emailInput }}
                    onChange={emailChange}
                    inputProps={{ "data-testid": "modal-input" }}
                />
                <Button
                    className={validCheck ? styles.signUpButton : styles.signUpInvalid}
                    onClick={signUpClick}
                    data-testid="sing-up-button">
                    sign up for free
                </Button>
            </div>
            {!validCheck && (
                <div className={styles.validationText} data-testid="validation-text">
                    Please provide a valid email address
                </div>
            )}
            <img src={imageNews} alt="logo" className={styles.imageNewsLetter} />
        </div>
    );
};

export default NewsLetterCompact;
