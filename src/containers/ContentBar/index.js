// This is shared across all pages

import React, { useRef } from "react";
import Markdown from "markdown-to-jsx";
import NewsLetterCompact from "~/components/NewsLetterCompact";
import MiniCard from "~/components/MiniCard";
import IconUp from "~/resource/icons/IconUp";
import styles from "./styles.module";
const ContentBar = ({ markDownText, nextTitle }) => {
    const scrollUp = () => {
        window.scrollTo(0, 0);
    };
    return (
        <div className={styles.contentBar} data-testid="content-bar">
            {markDownText && (
                <Markdown
                    children={markDownText}
                    options={{
                        overrides: {
                            NewsLetterCompact: {
                                component: NewsLetterCompact
                            },
                            MiniCard: {
                                component: MiniCard
                            }
                        }
                    }}
                />
            )}
            {nextTitle && (
                <div className={styles.advancedNext} data-testid="next-title">
                    {`next: ${nextTitle}`}
                </div>
            )}
            {nextTitle && <IconUp className={styles.iconUp} onClick={scrollUp} data-testid="scroll-up" />}
        </div>
    );
};

export default ContentBar;
