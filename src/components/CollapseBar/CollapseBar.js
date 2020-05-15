import React, { useState, useEffect } from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { useHistory } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./styles.module";
const cx = classNames.bind(styles);

const checkUrl = () => {
    const pathName = window.location.pathname;
    const hashLink = window.location.hash;
    const orgUrl = pathName + hashLink;
    for (let i = 0; i < menuList.length; ++i) {
        if (menuList[i].url === orgUrl) {
            return {
                menuItem: menuList[i].title,
                subItem: false
            };
        }
        for (let j = 0; j < menuList[i].subItems.length; ++j) {
            if (menuList[i].subItems[j].url == orgUrl) {
                return {
                    menuItem: menuList[i].title,
                    subItem: menuList[i].subItems[j].title
                };
            }
        }
    }
    return { menuItem: false, subItem: false };
};

const menuList = [
    {
        title: "Betting 101",
        description: "We'll put on the path to becoming a successful sports bettor",
        url: "/how-to-bet/betting",
        subItems: [
            { title: "SPORTS BETTING BASICS", url: "/how-to-bet/betting/basics" },
            { title: "BETTING ODDS", url: "/how-to-bet/betting/betting-odds" },
            { title: "COMPARING ODDS", url: "/how-to-bet/betting/comparing-odds" },
            { title: "ONSHORE SPORTSBOOKS", url: "/how-to-bet/bettig/onshore-sportsbooks" },
            { title: "IN-GAME BETTING", url: "/how-to-bet/betting/in-game-betting" },
            { title: "TIPS FROM THE SHARPS", url: "/how-to-bet/betting/tips-from-sharps" },
            { title: "GLOSSARY", url: "/how-to-bet/betting/glossary" }
        ]
    },
    {
        title: "Advanced Betting Concepts",
        description: "Take your sports betting game to the next level with advice from the props",
        url: "/how-to-bet/advanced",
        subItems: [
            { title: "SPORTS BETTING MARKET", url: "/how-to-bet/advanced/sports-betting-market" },
            { title: "IMPLIED PROBABILITY", url: "/how-to-bet/advanced/implied-probability" },
            { title: `"SYNTHETIC HOLD"`, url: "/how-to-bet/advanced/synthetic-hold" },
            { title: "WEAK VS. STRONG", url: "/how-to-bet/advanced/weak-vs-strong" }
        ]
    }
];

const CollapseBar = () => {
    const [expanded, setExpanded] = useState(false);
    const [subItem, setSubItem] = useState(false);

    const handleChange = panel => () => {
        setExpanded(panel);
    };
    const history = useHistory();

    const menuItemClick = url => () => {
        history.push(url);
    };

    useEffect(() => {
        const menuFromURL = checkUrl();
        setExpanded(menuFromURL.menuItem);
        setSubItem(menuFromURL.subItem);
    }, [window.location.href]);

    return (
        <div className={styles.collapseBar}>
            {menuList.map((menu, index) => (
                <ExpansionPanel
                    key={`panel-${index}`}
                    expanded={expanded === menu.title}
                    onChange={handleChange(menu.title)}
                    classes={{ root: cx("menu", expanded === menu.title ? "menu--opened" : "") }}>
                    <ExpansionPanelSummary
                        className={cx("menu__title", expanded === menu.title ? "menu__title--opened" : "")}
                        onClick={menuItemClick(menu.url)}>
                        {menu.title}
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={cx("menu__panel")}>
                        <div className={cx("menu__description")}>{menu.description}</div>
                        {menu.subItems.map((menuItem, subIndex) => (
                            <div
                                key={`subItem-${subIndex}`}
                                className={cx("menu__subItem", menuItem.title === subItem ? "menu__subItem--opened" : "")}
                                onClick={menuItemClick(menuItem.url)}>
                                {menuItem.title}
                            </div>
                        ))}
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            ))}
        </div>
    );
};

export default CollapseBar;
