import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./styles.module";
const cx = classNames.bind(styles);

const checkUrl = () => {
    const pathName = window.location.pathname;
    const hashLink = window.location.hash;
    const orgUrl = pathName + hashLink;
    for (let i = 0; i < menuList.length; ++i) {
        for (let j = 0; j < menuList[i].length; ++j) {
            if (menuList[i][j].url == orgUrl) {
                return { url: orgUrl, menuItem: i, subItem: j };
            }
        }
    }
    return { url: orgUrl, menuItem: -1, subItem: -1 };
};

const menuList = [
    [
        {
            title: "Betting 101",
            description: "We'll put on the path to becoming a successful sports bettor",
            opened: true,
            selected: false,
            url: "/how-to-bet/betting"
        },
        { title: "SPORTS BETTING BASICS", selected: false, url: "/how-to-bet/betting/basics" },
        { title: "BETTING ODDS", selected: false, url: "/how-to-bet/betting/betting-odds" },
        { title: "COMPARING ODDS", selected: false, url: "/how-to-bet/betting/comparing-odds" },
        { title: "ONSHORE SPORTSBOOKS", selected: false, url: "/how-to-bet/bettig/onshore-sportsbooks" },
        { title: "IN-GAME BETTING", selected: false, url: "/how-to-bet/betting/in-game-betting" },
        { title: "TIPS FROM THE SHARPS", selected: false, url: "/how-to-bet/betting/tips-from-sharps" },
        { title: "GLOSSARY", selected: false, url: "/how-to-bet/betting/glossary" }
    ],
    [
        {
            title: "Advanced Betting Concepts",
            description: "Take your sports betting game to the next level with advice from the props",
            opened: false,
            selected: false,
            url: "/how-to-bet/advanced"
        },
        { title: "SPORTS BETTING MARKET", selected: false, url: "/how-to-bet/advanced/sports-betting-market" },
        { title: "IMPLIED PROBABILITY", selected: false, url: "/how-to-bet/advanced/implied-probability" },
        { title: `"SYNTHETIC HOLD"`, selected: false, url: "/how-to-bet/advanced/synthetic-hold" },
        { title: "WEAK VS. STRONG", selected: false, url: "/how-to-bet/advanced/weak-vs-strong" }
    ]
];

const CollapseBar = () => {
    const [menuItem, selectMenuItem] = useState(-1);
    const [subItem, selectSubItem] = useState(-1);
    const history = useHistory();
    const menuItemSelect = (menuNum, itemNum) => {
        if (menuItem >= 0 && subItem >= 0) {
            menuList[menuItem][subItem].selected = false;
            menuList[menuItem][0].opened = false;
        }
        if (menuNum >= 0 && itemNum >= 0) {
            menuList[0][0].opened = false;
            menuList[menuNum][itemNum].selected = true;
            menuList[menuNum][0].opened = true;
        }
        if (menuNum < 0) menuList[0][0].opened = true;
        selectMenuItem(menuNum);
        selectSubItem(itemNum);
    };

    const menuItemClick = url => () => {
        history.push(url);
    };

    useEffect(() => {
        const menuFromURL = checkUrl();
        menuItemSelect(menuFromURL.menuItem, menuFromURL.subItem, menuFromURL.url);
    }, [window.location.href]);

    return (
        <div className={styles.collapseBar}>
            {menuList.map((menu, index) => {
                return (
                    <div className={cx("menu", menu[0].opened ? "menu--opened" : "")} key={`sub-${index}`}>
                        {
                            <div
                                className={cx("menu__title", menu[0].selected ? "menu__title--opened" : "")}
                                onClick={menuItemClick(menu[0].url)}>
                                {menu[0].title}
                            </div>
                        }
                        {menu[0].opened && <div className={cx("menu__description")}>{menu[0].description}</div>}
                        {menu[0].opened &&
                            menu.map((menuItem, subIndex) => {
                                if (!subIndex) return null;
                                return (
                                    <div
                                        key={`subItem-${subIndex}`}
                                        className={cx("menu__subItem", menuItem.selected ? "menu__subItem--opened" : "")}
                                        onClick={menuItemClick(menuItem.url)}>
                                        {menuItem.title}
                                    </div>
                                );
                            })}
                    </div>
                );
            })}
        </div>
    );
};

export default CollapseBar;
