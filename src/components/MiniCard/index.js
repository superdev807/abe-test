import React from "react";
import IconPlus from "~/resource/icons/IconPlus";
import IconRight from "~/resource/icons/IconRight";
import styles from "./styles.module";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
const MiniCard = ({ imageSrc, cardText, iconType, miniText }) => {
    return (
        <div className={styles.miniCard}>
            <div className={styles.imageSection}>
                <img src={imageSrc} className={styles.image} />
            </div>
            <div className={styles.textSection}>{cardText}</div>
            {!iconType ? (
                <IconPlus className={cx("iconlogo", !miniText ? "iconlogo--normal" : "iconlogo--mini")} />
            ) : (
                <IconRight className={cx("iconlogo", !miniText ? "iconlogo--normal" : "iconlogo--mini")} />
            )}
            <div className={styles.miniText}>{miniText}</div>
        </div>
    );
};

export default MiniCard;
