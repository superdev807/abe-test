import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./styles.module";
const cx = classNames.bind(styles);

const menuList = [
    [
        {
            title: "Betting 101",
            description: "We'll put on the path to becoming a successful sports bettor",
            opened: true,
            selected: false,
            url: "/how-to-bet/betting"
        },
        { title: "SPORTS BETTING BASICS", selected: false, url: "/how-to-bet/betting#basics" },
        { title: "BETTING ODDS", selected: false },
        { title: "COMPARING ODDS", selected: false },
        { title: "ONSHORE SPORTSBOOKS", selected: false },
        { title: "IN-GAME BETTING", selected: false },
        { title: "GLOSSARY", selected: false }
    ],
    [
        {
            title: "Advanced Betting Concepts",
            description: "Take your sports betting game to the next level with advice from the props",
            opened: false,
            selected: false,
            url: "/how-to-bet/advanced"
        },
        { title: "SPORTS BETTING MARKET", selected: false, url: "/how-to-bet/advanced#sports-betting-market" },
        { title: "IMPLIED PROBABILITY", selected: false },
        { title: `"SYNTHETIC HOLD"`, selected: false },
        { title: "WEAK VS. STRONG", selected: false }
    ]
];

const CollapseBar = () => {
    const [menuItem, selectMenuItem] = useState(-1);
    const [subItem, selectSubItem] = useState(-1);
    const history = useHistory();
    const menuItemClick = (menuNum, itemNum, url) => () => {
        if (menuItem >= 0 && subItem >= 0) {
            menuList[menuItem][subItem].selected = false;
            menuList[menuItem][0].opened = false;
        }
        if (menuNum >= 0 && itemNum >= 0) {
            menuList[0][0].opened = false;
            menuList[menuNum][itemNum].selected = true;
            menuList[menuNum][0].opened = true;
        }
        selectMenuItem(menuNum);
        selectSubItem(itemNum);
        history.push(url);
    };

    return (
        <div className={styles.collapseBar}>
            {menuList.map((menu, index) => {
                return (
                    <div className={cx("menu", menu[0].opened ? "menu--opened" : "")} key={`sub-${index}`}>
                        {
                            <div
                                className={cx("menu__title", menu[0].selected ? "menu__title--opened" : "")}
                                onClick={menuItemClick(index, 0, menu[0].url)}>
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
                                        onClick={menuItemClick(index, subIndex, menuItem.url)}>
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
