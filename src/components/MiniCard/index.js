import React from "react";
import IconPlus from "~/resource/icons/IconPlus";
import IconRight from "~/resource/icons/IconRight";
import styles from "./styles.module";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
const MiniCard = ({ imageSrc, cardText, iconType, miniText }) => {
    return (
        <div className={styles.miniCard} data-testid="mini-card">
            <div className={styles.imageSection} data-testid="image-section">
                <img src={imageSrc} className={styles.image} />
            </div>
            <div className={styles.textSection} data-testid="card-text">
                {cardText}
            </div>
            {!iconType ? (
                <IconPlus className={cx("iconlogo", !miniText ? "iconlogo--normal" : "iconlogo--mini")} data-testid="icon-plus" />
            ) : (
                <IconRight className={cx("iconlogo", !miniText ? "iconlogo--normal" : "iconlogo--mini")} data-testid="icon-right" />
            )}
            <div className={styles.miniText} data-testid="mini-text">
                {miniText}
            </div>
        </div>
    );
};

export default MiniCard;
